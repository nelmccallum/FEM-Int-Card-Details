const App = {
    $: {
        nameOnCard: document.getElementById("cardName"),
        numOnCard: document.getElementById("cardNum"),
        monthOnCard: document.getElementById("cardMonth"),
        yearOnCard: document.getElementById("cardYear"),
        cvcOnCard: document.getElementById("cardCVC"),
        userName: document.getElementById("nameInput"),
        userNum: document.getElementById("numInput"),
        month: document.getElementById("expMonth"),
        year: document.getElementById("expYear"),
        userCVC: document.getElementById("cvcInput"),
        submit: document.getElementById("submitBtn"),
        continue: document.getElementById("resetBtn"),
        cvcError: document.getElementById("cvcError"),
        expError: document.getElementById("expDateError"),
        numError: document.getElementById("cardNumError"),
        nameError: document.getElementById("cardNameError"),
        TYmesseage: document.getElementById("ThankYou"),
        InputContainer: document.getElementById("inputContainer"),
    }
}
let expDateBlank = false;

App.$.userName.addEventListener("keyup", function(){
        App.$.nameOnCard.innerText = App.$.userName.value.toUpperCase();
});

App.$.userNum.addEventListener("keyup", function(){
    App.$.numOnCard.innerText = App.$.userNum.value;
});

App.$.month.addEventListener("keyup", function(){
    App.$.monthOnCard.innerText = App.$.month.value;
});

App.$.year.addEventListener("keyup", function(){
    App.$.yearOnCard.innerText = App.$.year.value;
});

App.$.userCVC.addEventListener("keyup", function(){
    App.$.cvcOnCard.innerText = App.$.userCVC.value;
});

App.$.submit.onclick = function(){
    let conditions = 0;
    console.log(conditions);
    if (App.$.userName.value === "" || parseInt(App.$.userName.value)){
        App.$.nameError.style.display = "block"
        App.$.userName.style.borderColor = "hsl(0, 100%, 66%)";
    } else {
        App.$.nameError.style.display = "none";
        App.$.userName.style.borderColor = "hsl(270, 3%, 87%)";
        conditions += 1;
    };

    if (isNaN(App.$.userNum.value) || App.$.userNum.value === ""){
        App.$.numError.style.display = "block";
        App.$.userNum.style.borderColor = "hsl(0, 100%, 66%)";
    } else {
        App.$.numError.style.display = "none";
        App.$.userNum.style.borderColor = "hsl(270, 3%, 87%)";
        conditions += 1;
    };

    if (App.$.month.value === "" || App.$.year.value === ""){
        App.$.expError.style.display = "block";
        App.$.month.style.borderColor = "hsl(0, 100%, 66%)";
        App.$.year.style.borderColor = "hsl(0, 100%, 66%)";
        expDateBlank = true;
    } else if(isNaN(App.$.month.value) || isNaN(App.$.year.value)){
        App.$.expError.innerText = "Must be a number";
        App.$.month.style.borderColor = "hsl(0, 100%, 66%)";
        App.$.year.style.borderColor = "hsl(0, 100%, 66%)";
        App.$.expError.style.display = "block";
        expDateBlank = true;
    }   else {
        App.$.expError.style.display = "none";
        App.$.month.style.borderColor = "hsl(270, 3%, 87%)";
        App.$.year.style.borderColor = "hsl(270, 3%, 87%)";
        conditions += 1;
    };

    if (App.$.userCVC.value === "" && expDateBlank){
        App.$.cvcError.style.display = "block";
        App.$.userCVC.style.borderColor = "hsl(0, 100%, 66%)";
    } else if (App.$.userCVC.value === "" && !expDateBlank){
        App.$.cvcError.style.display = "block";
        App.$.userCVC.style.borderColor = "hsl(0, 100%, 66%)";
        App.$.cvcError.style.marginLeft = "47%"; 
    } else {
        App.$.cvcError.style.display = "none";
        App.$.userCVC.style.borderColor = "hsl(270, 3%, 87%)";
        conditions += 1;
    };

    if (conditions === 4){
        App.$.InputContainer.style.display = "none";
        App.$.TYmesseage.style.display = "flex";
    }
    console.log(conditions);
};

App.$.continue.onclick = function(){
    App.$.TYmesseage.style.display = "none";
    App.$.InputContainer.style.display = "flex";
    window.location.reload();
}