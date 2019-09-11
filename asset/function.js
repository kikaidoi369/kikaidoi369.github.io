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
        document.location.href = "home.html";
        localStorage.setItem('login', true)

    } else {
        document.getElementById("login_result").innerHTML = "Invalid Login"
        localStorage.setItem('login', false)
    }
    console.log(localStorage)
};

function scrollToId(id) {
    menu = ["about_me-menu", "experience-menu", "robot_example-menu"]
    var elem = document.getElementById(id);
    elem.scrollIntoView({ block: "center" });
    menu.forEach(menu_id => {
        document.getElementById(menu_id).classList.remove('active');
    });
    document.getElementById(id + "-menu").classList.add("active")
    console.log(id)
}

function confirmProfile() {
    var firstname = checkFirstName()
    var lastname = checkLastName()
    var gender = checkGender()
    var birthdate = checkBirthDate()
    var document = checkDocument()
    var agree = checkAgree()
    console.log(document)
    if ((firstname && lastname && gender) != false) {
        var text_firstname  = "Firstname: " + firstname
        var text_lastname   = "Lastname: " + lastname
        var text_gender     = "Gender: " + gender
        var text_birthdate  = "BirthDate: " + birthdate
        var text_document   = "Document: " + document
        var text_agree      = "Agreement: " + agree
        alert(
                text_firstname + "\n"
            + text_lastname + "\n"
            + text_gender + "\n"
            + text_birthdate + "\n"
            + text_document + "\n"
            + text_agree
        )
        insertToTable(firstname,lastname,gender,birthdate)
    }
}

function checkFirstName() {
    var firstname = document.getElementById("first-name")
    var form = document.getElementById("first-nameForm")
    if (firstname.value == undefined || firstname.value.trim() == "") {
        form.classList.add("error")
        return false;
    }
    form.classList.remove('error');
    return firstname.value
}

function checkLastName() {
    var lastname = document.getElementById("last-name")
    var form = document.getElementById("last-nameForm")
    if (lastname.value == undefined || lastname.value.trim() == "") {
        form.classList.add("error")
        return false;
    }
    form.classList.remove('error');
    return lastname.value
}

function checkGender() {
    var gender_list = document.getElementsByName("gender")
    var form = document.getElementById("genderForm")
    var gender_status = false
    gender_list.forEach(element => {
        gender_status = gender_status || element.checked
        if (element.checked) {
            gender = element.value
        }
    })
    if (gender_status == false) {
        form.classList.add("error")
        return false
    }
    form.classList.remove('error');
    return gender
}

function checkBirthDate() {
    var form = document.getElementById("birthDateForm")

    var bDate = document.getElementById("dBirth");
    var bDate = bDate.options[bDate.selectedIndex].value;

    var bMonth = document.getElementById("mBirth");
    var bMonth = bMonth.options[bMonth.selectedIndex].value;

    var bYear = document.getElementById("yBirth");
    var bYear = bYear.options[bYear.selectedIndex].value;

    if (parseInt(bDate) != 0 && parseInt(bMonth) != 0 && parseInt(bYear) != 0) {
        console.log(bDate + "/" + bMonth + "/" + bYear)
        form.classList.remove('error');
        return bDate + "/" + bMonth + "/" + bYear
    }
    form.classList.add("error")
    return false
}

function checkDocument() {
    var form = document.getElementById("docForm")
    var doc = document.getElementsByName("document")
    if (doc[0].value != "" && doc[1].value != "") {
        form.classList.remove('error');
        return "Upload Complete"
    }
    form.classList.add("error")
    return false
}

function checkAgree() {
    var form = document.getElementById("agreeForm")
    var agreeCb = document.getElementsByName("agreement")
    if (agreeCb[0].checked == true && agreeCb[1].checked == true){
        form.classList.remove('error');
        return "Agree"
    }
    form.classList.add("error")
    return false
}
// function insertToTable(firstname,lastname,gender,birthdate){
//     var tran_stat = document.getElementById("tran-stat")
//     tran_stat.innerText = "Success"
//     var tBody = document.getElementById("table-content")

// }