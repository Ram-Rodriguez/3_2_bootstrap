

let btnRegister = document.querySelector("#btnRegister");

let btnLogin = document.querySelector("#btnLogin");

btnRegister.onclick = () => {
  let email = document.querySelector("#txtRegisterEmail").value,
    name = document.querySelector("#txtRegisterName").value,
    password = document.querySelector("#txtRegisterPassword").value,
    civilStatusSelector = document.querySelector("#civilStatus"),
    civilStatusValue = civilStatusSelector.value,
    civilStatus = civilStatusSelector.options[civilStatusSelector.selectedIndex].text,
    address = document.querySelector("#addressTextarea").value,
    confirmPassword = document.querySelector(
      "#txtRegisterConfirmPassword"
    ).value,
    birthdate = document.querySelector("#startDate").value,
    sexRadios = document.querySelectorAll(".sex");
    for (i = 0; i < sexRadios.length; i++) {
        if (sexRadios[i].checked)
            sex = sexRadios[i].value;
    }
    
    
  register(email, name, password, confirmPassword, sex, civilStatusValue, address, birthdate);
};

btnLogin.onclick = function () {
    console.log("btnLogin has been clicked.");
  
    let email = document.querySelector("#txtLoginEmail").value;
    let password = document.querySelector("#txtLoginPassword").value;
    login(email, password);
};

function register(email, name, password, confirmPassword, sex, civilStatusValue, address, birthdate) {
    if (!email) return alert(`Email is required.`);
    else if (!name) return alert(`Name is required`);
    else if (!civilStatusValue) return alert(`Civil Status is required`);
    else if (!password || !confirmPassword) return alert(`Password is required.`);
    else if (password != confirmPassword)
      return alert(`Password does not match.`);
    else if (!address) return alert(`Address is required.`);
  
    let userToCreate = {
      email,
      name,
      password,
      sex,
      civilStatusValue,
      address,
      birthdate
    };
  
    let users = localStorage.getItem("users");
    if (!users) {
      users = [userToCreate]; // First user na mareregister
    } else {
      users = JSON.parse(users);
      users.push(userToCreate);
    }
  
    // Success validation
    localStorage.setItem("users", JSON.stringify(users));
    alert(`User ${userToCreate.name} has been successfully created.`); // alert("User " + userToCreate.name + " has been successfully created.");
  }

  function login(email, password) {
    let users = localStorage.getItem("users");
    ;
    if (!users) {
      return alert(`Email or password is invalid.`);
    }
  
    users = JSON.parse(users);
    let userIndex = users.findIndex((u) => {
      return u.email == email && u.password == password;
    });

    if (userIndex == -1) {
        return alert(`Email or password is invalid.`);
    }
    // Success validation
    //alert(`Welcome ${users[userIndex].name}.`);

    location.assign("userPage.html");
  }

//let userPage = document.addEventListener("load", getInfo())


/*function getInfo() {
    let user = JSON.parse(localStorage.getItem("users")),
    name = user[0].name;
    document.querySelector("#txtWelcomeBanner").innerHTML = `Welcome, ${name}`
}*/