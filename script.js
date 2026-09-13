// BANNER ANIMADO DE ABERTURA // 

window.addEventListener("load", () => {

    const video = document.getElementById("animacao-abertura");
    const preloader = document.getElementById("preloader");

    if (!video || !preloader) return;

    // Quando o vídeo terminar
    video.addEventListener("ended", () => {

        // Faz a tela desaparecer suavemente
        preloader.classList.add("escondido");

        // Remove o preloader depois da transição
        setTimeout(() => {
            preloader.remove();
        }, 800);

    });

});


window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");
    const video = document.getElementById("animacao-abertura");

    if (!preloader || !video) return;

    // Verifica se a pessoa está usando celular
    const celular = window.matchMedia("(max-width: 768px)").matches;

    // Escolhe o vídeo
    if (celular) {
        video.src = "assets/banner-celular.webm";
    } else {
        video.src = "assets/banner-desktop.webm";
    }

    // Começa o vídeo depois de definir o arquivo
    video.load();

    video.play().catch(() => {
        // Alguns navegadores podem bloquear o autoplay.
        // Como o vídeo está muted, normalmente funciona.
    });

    // Quando o vídeo terminar
    video.addEventListener("ended", () => {

        preloader.classList.add("escondido");

        // Remove a tela depois do fade
        setTimeout(() => {
            preloader.remove();
        }, 800);

    });

});