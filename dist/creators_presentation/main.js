document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('scroll-container');
    const sections = document.querySelectorAll('.slide-section');
    const tiltWrappers = document.querySelectorAll('.tilt-wrapper');
    const navLinks = document.querySelectorAll('.navbar nav a');

    // 1. Intersection Observer (Active Classes para animaciones automáticas "Zoom In")
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
            } else {
                // Al salir de vista, removemos la clase para que reinicie la animación al volver
                entry.target.classList.remove('is-active');
                
                // Reiniciar transformaciones del wrapper generadas por mouse
                const wrapper = entry.target.querySelector('.tilt-wrapper');
                if(wrapper) {
                    wrapper.style.transform = `rotateX(0deg) rotateY(0deg)`;
                    const glare = wrapper.querySelector('.glare');
                    if(glare) glare.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 0%, transparent 60%)`;
                }
            }
        });
    }, {
        root: container,
        threshold: 0.4
    });

    sections.forEach(section => observer.observe(section));

    // 2. Efecto Tilt 3D estilo Web Moderna y Glare (Brillo de ratón)
    // Solo aplicable a dispositivos con hover (ratón)
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        tiltWrappers.forEach(wrapper => {
            wrapper.addEventListener('mousemove', (e) => {
                const rect = wrapper.getBoundingClientRect();
                // Coordenadas del mouse relativas al contenedor
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculamos el porcentaje (-1 a 1 de centro)
                const centerX = (x / rect.width - 0.5) * 2;
                const centerY = (y / rect.height - 0.5) * 2;
                
                // Rotación máxima de 10 grados
                const rotateX = -centerY * 10;
                const rotateY = centerX * 10;
                
                // Aplicamos 3D Rotate
                wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

                // Efecto de brillo de la luz siguiendo el ratón
                const glare = wrapper.querySelector('.glare');
                if(glare) {
                    const percentX = (x / rect.width) * 100;
                    const percentY = (y / rect.height) * 100;
                    glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
                }
            });

            // Resetea cuando sale el ratón
            wrapper.addEventListener('mouseleave', () => {
                wrapper.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                const glare = wrapper.querySelector('.glare');
                if(glare) {
                    glare.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 0%, transparent 60%)`;
                }
            });
        });
    }

    // 3. Efecto Parallax en las imágenes para el Scroll Global
    container.addEventListener('scroll', () => {
        const scrollTop = container.scrollTop;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const distance = scrollTop - sectionTop;
            
            // Si la sección está cerca del campo visual (- alto de pantalla a + alto pantalla)
            if (Math.abs(distance) < window.innerHeight * 1.5) {
                const wrapper = section.querySelector('.tilt-wrapper');
                if(wrapper) {
                    // Mueve ligeramente la imagen en el Eje Y mientras scrolea (Parallax Offset)
                    // Multiplicador 0.2 es la velocidad, negativo o positivo
                    const parallaxY = distance * 0.15;
                    // Aplicar este movimiento dentro de la transformación base de la sección
                    // No sobreescribe el 3D Hover porque la caja rota. Usamos margin o TOP/Translate del contenedor.
                    wrapper.parentElement.style.transform = `translateY(${parallaxY}px)`;
                }
            }
        });

        // Highlights nav logic simplificado
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            // Comprobamos si la sección está en la mirad superior de la pantalla
            if(rect.top >= -window.innerHeight/2 && rect.top <= window.innerHeight/2) {
                const id = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.style.color = 'rgba(255,255,255,0.7)';
                    link.style.textShadow = 'none';
                });
                const activeLink = document.querySelector(`.navbar nav a[href="#${id}"]`);
                if(activeLink) {
                    activeLink.style.color = '#fff';
                    activeLink.style.textShadow = '0 0 10px rgba(255, 107, 0, 0.8)';
                }
            }
        });
    });

    // 4. Smooth Anchor Scrolling Local
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                container.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
