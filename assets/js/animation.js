// 1. Obtener el elemento que queremos observar
const gatito2 = document.getElementById('gatito2');

// 2. Definir las opciones del observador
const options = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.1 
};

// 3. Crear el observador (Intersection Observer)
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            // 1. Quitar la clase de ocultamiento
            entry.target.classList.remove('oculto-inicial');

            // 2. Aplicar duración y retardo (ahora que ya no están en el CSS)
            entry.target.style.animationDuration = '2.5s'; 
            entry.target.style.animationDelay = '0.5s';  
            entry.target.style.animationFillMode = 'both';
            
            // 3. Forzar el reflujo del navegador (CRÍTICO)
            void entry.target.offsetWidth; 

            // 4. Añadir las clases de animación. Esto dispara la animación AHORA. rotateInDownRight
            entry.target.classList.add('animate__animated', 'animate__rotateInDownRight');
            
            // 5. Detener la observación
            observer.unobserve(entry.target);
        }
    });
}, options);

// 4. Empezar a observar el elemento
if (gatito2) {
    observer.observe(gatito2);
}