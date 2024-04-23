const login = function login() {
    const bodyUnable = document.getElementById('body');
    let text;
    let password = prompt("Qual a senha?", "");
    if (password == "7162priv"){
        bodyUnable.classList.remove("unable");
    } else {
        alert("Errou amigo, mete o pé.")
    }

}

export default login;