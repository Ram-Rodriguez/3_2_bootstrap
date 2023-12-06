let userPage = document.addEventListener("load", getInfo())
let btnUpdate = document.querySelector("#btnUpdate");

btnUpdate.onclick = ()=> {
    let formGroup = document.querySelectorAll('.delete');
    let sexCS = document.querySelectorAll('#txtUserCS, #txtUserSex');
    let sexLabel = document.querySelectorAll('#labelSex');
    let divSexCS = document.querySelectorAll(".selectCS, .radioSex");
    let Male = "Male", Female = "Female";
    
    if(sexCS.length != null){
        for(i = 0; i < sexCS.length; i++){
            sexCS[i].remove();
        } 
    }
    
    if(formGroup.length != null){
        for(i = 0; i < formGroup.length; i++){
             formGroup[i].removeAttribute('readonly');   
        }     
    }    

    if(sexLabel.length != null){
        for(i = 0; i < sexLabel.length; i++){
            
            sexLabel[i].remove();     
        }    
    }    

    if(divSexCS.length != null){
        for(i = 0; i < divSexCS.length; i++){
            divSexCS[i].remove();     
        }    
    }    

    let rowContainer = document.querySelectorAll(".row");
    let colContainer = document.createElement("div");

    rowContainer[0].appendChild(colContainer);

    var h6 = document.createElement('h6');
    node = document.createTextNode("Sex:");
    h6.appendChild(node);
    colContainer.appendChild(h6);

    createOptionRadio(Male);
    createOptionRadio(Female);

    function createOptionRadio(string) {
        let rowContainer = document.querySelectorAll(".row");
        let colContainer = document.createElement("div");

        rowContainer[0].appendChild(colContainer);

        var container = document.createElement('div');
        container.className = `form-check`;
    
        var input = document.createElement('input') || [];
        input.type = "radio";
        input.className = "form-check-input sex:";
        input.value = 1;
        input.id = string;
        input.name = "sex";
        input.setAttribute('checked', true);
    
        var label = document.createElement('label');
        label.value = string
    
        colContainer.appendChild(container);
        container.appendChild(input);
        input.appendChild(label);
    
        return rowContainer;
    };
}


function getInfo() {
    let user = JSON.parse(localStorage.getItem("users")),
    name = user[0].name,
    email = user[0].email,
    password = user[0].password,
    sex = user[0].sex,
    civilStatus = user[0].civilStatusValue,
    address = user[0].address,
    birthdate = user[0].birthdate;

    for(i = 0; i < user[0].password.length; i++){
        password += "*";
    }

    if(sex == 1){
        sex = "Male";
    } else {
        sex = "Female";
    }

    document.querySelector("#txtWelcomeBanner").innerHTML = `Welcome, ${name}`

    document.querySelector("#txtUserName").value = `${name}`
    document.querySelector("#txtUserEmail").value = `${email}`
    document.querySelector("#txtUserPassword").value = `${password}`
    document.querySelector("#txtUserSex").value = `${sex}`
    document.querySelector("#txtUserCS").value = `${civilStatus}`
    document.querySelector("#txtaddressTextarea").value = `${address}`
    document.querySelector("#txtDOB").value = `${birthdate}`
}





