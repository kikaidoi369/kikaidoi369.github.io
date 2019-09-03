function logout() {
    localStorage.setItem("login", false)
    document.location.href = "login.html";
}

function signin() {
    val_user = "correctUser";
    val_pass = "disEsPassw0rd";
    inp_user = document.getElementById("inp_username").value;
    inp_pass = document.getElementById("inp_password").value;
    console.log("Login Result:" + (inp_user == val_user && inp_pass == val_pass))
    if (inp_user == val_user && inp_pass == val_pass) {
        document.getElementById("login_result").innerHTML = "Pass"
        document.location.href = "index.html";
        localStorage.setItem('login', true)

    } else {
        document.getElementById("login_result").innerHTML = "Fail"
        localStorage.setItem('login', false)
    }
    console.log(localStorage)
};