import React, { createContext, useContext, useState, useEffect } from 'react';

// Mock DB initial data
const DEFAULT_USERS = [
  { id: '1', name: 'Admin User', email: 'admin@demo.com', password: 'password', role: 'admin' },
  { id: '2', name: 'Pass User', email: 'pass@demo.com', password: 'password', role: 'pass' },
  { id: '3', name: 'Creator User', email: 'creators@demo.com', password: 'password', role: 'creator' }
];

export type User = {
  id: string;
  name: string;
  email: string;
  role: string; // 'admin', 'pass', 'creator', 'user'
};

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => Promise<boolean>;
  register: (name: string, email: string, pass: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Initialize DB in localStorage if it doesn't exist
  useEffect(() => {
    const defaultData = localStorage.getItem('agarra_users_db');
    if (!defaultData) {
      localStorage.setItem('agarra_users_db', JSON.stringify(DEFAULT_USERS));
    }
    
    // Check if user is logged in
    const activeUserId = localStorage.getItem('agarra_active_user');
    if (activeUserId) {
      const db = JSON.parse(localStorage.getItem('agarra_users_db') || '[]');
      const activeUser = db.find((u: any) => u.id === activeUserId);
      if (activeUser) {
        setUser({ id: activeUser.id, name: activeUser.name, email: activeUser.email, role: activeUser.role });
      }
    }
  }, []);

  const login = async (email: string, pass: string) => {
    const db = JSON.parse(localStorage.getItem('agarra_users_db') || '[]');
    const found = db.find((u: any) => u.email === email && u.password === pass);
    if (found) {
      const u = { id: found.id, name: found.name, email: found.email, role: found.role };
      setUser(u);
      localStorage.setItem('agarra_active_user', found.id);
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, pass: string) => {
    const db = JSON.parse(localStorage.getItem('agarra_users_db') || '[]');
    if (db.find((u: any) => u.email === email)) {
      return false; // Email already taken
    }
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password: pass,
      role: 'user'
    };
    db.push(newUser);
    localStorage.setItem('agarra_users_db', JSON.stringify(db));
    
    // Log them in immediately
    const u = { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role };
    setUser(u);
    localStorage.setItem('agarra_active_user', newUser.id);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('agarra_active_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
