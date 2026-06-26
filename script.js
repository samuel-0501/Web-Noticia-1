// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
    const botaoGostar = document.getElementById("btnInteracao");
    let contadorGostos = 0;

    botaoGostar.addEventListener("click", () => {
        contadorGostos++;
        botaoGostar.textContent = `Gostou! (${contadorGostos})`;
        botaoGostar.style.backgroundColor = "#28a745";
    });
});
