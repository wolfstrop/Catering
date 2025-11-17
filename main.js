/* // Carrusel automático para la sección Hero
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

 */


// Carrusel automático para la sección Hero
document.addEventListener('DOMContentLoaded', function () {
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
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
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
    }

    // Navegación suave
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Funcionalidad del modal de privacidad
    const privacyLink = document.getElementById('privacyLink');
    const privacyModal = document.getElementById('privacyModal');
    const closeModal = document.querySelector('.close-modal');

    // Abrir modal
    privacyLink.addEventListener('click', function () {
        privacyModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evitar scroll en el fondo
    });

    // Cerrar modal al hacer clic en la X
    closeModal.addEventListener('click', function () {
        privacyModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
    });

    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function (event) {
        if (event.target === privacyModal) {
            privacyModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaurar scroll
        }
    });

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            privacyModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaurar scroll
        }
    });
});

