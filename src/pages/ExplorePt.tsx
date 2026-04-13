import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal, X, ChevronDown, Film } from "lucide-react";
import {
  Navbar,
  Footer,
  SectionHeader,
  FilmCard,
  FilterChip,
} from "@/components/shared";
import { films, countries, genres, moods, festivals } from "@/lib/dataPt";

export default function ExploreEs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string[]>([]);
  const [selectedMood, setSelectedMood] = useState<string[]>([]);
  const [selectedFestival, setSelectedFestival] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const filteredFilms = useMemo(() => {
    let result = [...films];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (f) =>
          f.title.toLowerCase().includes(q) ||
          f.director.toLowerCase().includes(q) ||
          f.country.toLowerCase().includes(q)
      );
    }

    if (selectedCountry.length > 0) {
      result = result.filter((f) => selectedCountry.includes(f.country));
    }

    if (selectedGenre.length > 0) {
      result = result.filter((f) =>
        f.genre.some((g) => selectedGenre.includes(g))
      );
    }

    if (sortBy === "trending") {
      result.sort((a, b) => b.members - a.members);
    } else if (sortBy === "newest") {
      result.sort((a, b) => b.year - a.year);
    } else if (sortBy === "rewards") {
      result.sort((a, b) => b.rewards - a.rewards);
    }

    return result;
  }, [searchQuery, selectedCountry, selectedGenre, sortBy]);

  const activeFilterCount =
    selectedCountry.length + selectedGenre.length + selectedMood.length;

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-24">
        <section className="pt-32 pb-16 px-6 relative z-10 border-b border-[#262626]/50">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Explorar Canales"
              subtitle="Descubre películas independientes, únete a watch parties en vivo, y encuentra tu comunidad."
            />

            <div className="flex flex-col md:flex-row gap-6 mt-12 relative z-20">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search size={18} className="text-[#9A9590]" />
                </div>
                <input
                  type="text"
                  className="w-full bg-[#1A1A1A] border border-[#262626] rounded-md py-3 pl-12 pr-4 text-[#F5F0EB] placeholder-[#9A9590] focus:outline-none focus:border-[#C8A97E]/50 focus:ring-1 focus:ring-[#C8A97E]/50 transition-all font-body text-base"
                  placeholder="Buscar películas, directores o países..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[160px] bg-[#141414] border-[#262626] text-[#F5F0EB] h-11">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1A1A] border-[#262626]">
                    <SelectItem value="default" className="text-[#F5F0EB] focus:bg-[#262626] focus:text-[#F5F0EB]">
                      Por defecto
                    </SelectItem>
                    <SelectItem value="trending" className="text-[#F5F0EB] focus:bg-[#262626] focus:text-[#F5F0EB]">
                      Tendencia
                    </SelectItem>
                    <SelectItem value="newest" className="text-[#F5F0EB] focus:bg-[#262626] focus:text-[#F5F0EB]">
                      Más reciente
                    </SelectItem>
                    <SelectItem value="rewards" className="text-[#F5F0EB] focus:bg-[#262626] focus:text-[#F5F0EB]">
                      Más premios
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  className="md:hidden border-[#262626] text-[#E0DCD3] px-6 py-6"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  Filtros <ChevronDown size={16} className={`ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className={`hidden md:flex border-[#262626] text-[#9A9590] hover:text-[#F5F0EB] hover:border-[#C8A97E]/30 h-11 !bg-transparent hover:!bg-[#C8A97E]/5 ${
                    showFilters ? "border-[#C8A97E]/40 text-[#C8A97E]" : ""
                  }`}
                >
                  <SlidersHorizontal size={16} className="mr-2" />
                  Filtros
                  {activeFilterCount > 0 && (
                    <span className="ml-2 bg-[#C8A97E] text-[#0A0A0A] text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                      {activeFilterCount}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {showFilters && (
          <div className="bg-[#141414] border border-[#262626] rounded-lg p-6 mb-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[#F5F0EB] uppercase tracking-wider font-body">
                Filtros
              </h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={() => {
                    setSelectedCountry([]);
                    setSelectedGenre([]);
                    setSelectedMood([]);
                    setSelectedFestival([]);
                  }}
                  className="text-xs text-[#C8A97E] hover:text-[#D4BA94] flex items-center gap-1"
                >
                  <X size={12} /> Limpiar todo
                </button>
              )}
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#F5F0EB] mb-4 uppercase tracking-wider">País</h3>
              <div className="flex flex-wrap gap-2">
                {countries.map((c) => (
                  <FilterChip
                    key={c}
                    label={c}
                    active={selectedCountry.includes(c)}
                    onClick={() => toggleFilter(selectedCountry, setSelectedCountry, c)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#F5F0EB] mb-4 uppercase tracking-wider">Género</h3>
              <div className="flex flex-wrap gap-2">
                {genres.map((g) => (
                  <FilterChip
                    key={g}
                    label={g}
                    active={selectedGenre.includes(g)}
                    onClick={() => toggleFilter(selectedGenre, setSelectedGenre, g)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#F5F0EB] mb-4 uppercase tracking-wider">Estado de Ánimo</h3>
              <div className="flex flex-wrap gap-2">
                {moods.map((m) => (
                  <FilterChip
                    key={m}
                    label={m}
                    active={selectedMood.includes(m)}
                    onClick={() => toggleFilter(selectedMood, setSelectedMood, m)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#F5F0EB] mb-4 uppercase tracking-wider">Festival</h3>
              <div className="flex flex-wrap gap-2">
                {festivals.map((f) => (
                  <FilterChip
                    key={f}
                    label={f}
                    active={selectedFestival.includes(f)}
                    onClick={() => toggleFilter(selectedFestival, setSelectedFestival, f)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mb-6">
          <p className="text-sm text-[#9A9590]">
            Mostrando{" "}
            <span className="text-[#F5F0EB] font-medium">
              {filteredFilms.length}
            </span>{" "}
            {filteredFilms.length === 1 ? "película" : "películas"}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFilms.length > 0 ? (
            filteredFilms.map((film) => (
              <FilmCard key={film.id} film={film} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <Film size={48} className="mx-auto text-[#262626] mb-4" />
              <h3 className="text-xl font-display text-[#F5F0EB]">No se encontraron películas</h3>
              <p className="text-[#9A9590] mt-2">Intenta ajustar tus filtros de búsqueda.</p>
              <Button 
                variant="link" 
                className="text-[#C8A97E] hover:text-[#D4BA94] mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCountry([]);
                  setSelectedGenre([]);
                  setSelectedMood([]);
                  setSelectedFestival([]);
                }}
              >
                Limpiar todos los filtros
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}