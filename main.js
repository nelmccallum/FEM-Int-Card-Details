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
    }
}

App.$.userName.addEventListener("keyup", function(){
        App.$.nameOnCard.innerText = App.$.userName.value;
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
