document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector(".slider");
    let index = 0;

    function cambiarImagen() {
        index = (index + 1) % 3; // Hay 3 imágenes
        let desplazamiento = -index * 100; // Se mueve en base al índice
        slider.style.transform = `translateX(${desplazamiento}%)`;
    }

    setInterval(cambiarImagen, 4000);
});
