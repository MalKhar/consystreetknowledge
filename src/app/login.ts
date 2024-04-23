const login = function login() {
    const bodyUnable = document.getElementById('body');
    let text;
    let password = prompt("Qual a senha?", "");
    if (password !== "7162priv"){
        bodyUnable.removeChild(bodyUnable.firstChild);
        bodyUnable.removeChild(bodyUnable.firstChild);
        bodyUnable.removeChild(bodyUnable.firstChild);
        bodyUnable.removeChild(bodyUnable.firstChild);
        bodyUnable.removeChild(bodyUnable.firstChild);
        bodyUnable.style.backgroundColor = "#000";
        alert("vaza");
    } else {
        bodyUnable.classList.remove("unable");
    }

}

export default login;