// Sistema de partículas
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particlesContainer');
    const colors = ['#6C63FF', '#8A4FFF', '#FF2E63', '#FF9A76', '#FFD166', '#FFFFFF'];
    
    function createParticle() {
        const particle = document.createElement('div');
        
        // Tipos de partículas (grandes, medianas, pequeñas)
        const types = ['particle-large', 'particle-medium', 'particle-small'];
        const type = types[Math.floor(Math.random() * types.length)];
        particle.className = `particle ${type}`;
        
        // Color aleatorio
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.color = color;
        
        // Posición inicial aleatoria
        particle.style.left = Math.random() * 100 + 'vw';
        
        // Duración y delay aleatorios
        const duration = Math.random() * 6 + 4;
        const delay = Math.random() * 3;
        
        particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`;
        
        particlesContainer.appendChild(particle);
        
        // Remover partícula después de la animación
        setTimeout(() => {
            if (particle.parentNode === particlesContainer) {
                particlesContainer.removeChild(particle);
            }
        }, (duration + delay) * 1000);
    }
    
    // Crear partículas iniciales
    for (let i = 0; i < 40; i++) {
        setTimeout(createParticle, Math.random() * 1000);
    }
    
    // Seguir creando partículas
    setInterval(createParticle, 150);
});