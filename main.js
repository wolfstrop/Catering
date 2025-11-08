// Carrusel automático para la sección Hero
document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    
    // Función para cambiar al siguiente slide
    function nextSlide() {
        // Remover clase active del slide actual
        carouselItems[currentIndex].classList.remove('active');
        
        // Avanzar al siguiente índice
        currentIndex = (currentIndex + 1) % carouselItems.length;
        
        // Agregar clase active al nuevo slide
        carouselItems[currentIndex].classList.add('active');
    }
    
    // Iniciar el carrusel automático (cambia cada 5 segundos)
    setInterval(nextSlide, 5000);
    
    // Manejo del formulario de contacto
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Recoger datos del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const evento = document.getElementById('evento').value;
        const fecha = document.getElementById('fecha').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Crear el contenido del correo
        const subject = `Consulta de Catering - ${nombre}`;
        const body = `Nombre: ${nombre}%0D%0AEmail: ${email}%0D%0ATeléfono: ${telefono}%0D%0ATipo de Evento: ${evento}%0D%0AFecha del Evento: ${fecha}%0D%0A%0D%0AMensaje:%0D%0A${mensaje}`;
        
        // Abrir cliente de correo
        window.location.href = `mailto:contacto@cateringdelicioso.com?subject=${subject}&body=${body}`;
        
        // Mostrar mensaje de confirmación
        alert('Gracias por tu consulta. Se abrirá tu cliente de correo para que puedas enviarnos tu mensaje.');
    });
    
    // Navegación suave
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});

