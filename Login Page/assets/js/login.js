const camposenha = document.getElementById("password");
const mostrarsenha = document.querySelector(".fa-eye");

mostrarsenha.addEventListener('click', () => {
    if (camposenha.type === 'password') {
        camposenha.type = 'text';
        mostrarsenha.classList.replace("fa-eye", "fa-eye-slash")
    } else {
        camposenha.type = 'password';
        mostrarsenha.classList.replace("fa-eye-slash", "fa-eye")
    }
});