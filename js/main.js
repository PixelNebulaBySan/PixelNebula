// Efectos hover en botones
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.link-button');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
