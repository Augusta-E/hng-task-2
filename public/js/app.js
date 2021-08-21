const contactForm = document.querySelector(".myForm");
let fname = document.getElementById("fname");
let number = document.getElementById("number");
let email = document.getElementById("email");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e)=>{
    e.preventDefault();

let formData = {
    name: fname.value,
    number: number.value,
    email: email.value,
    message: message.value
}

let xhr = new XMLHttpRequest();
xhr.open("POST", '/');
xhr.setRequestHeader("content-type", "application/json");
xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == "success"){
        alert("Message sent");
        fname.value =  "";
        email.value = "";
        number.value = "";
        message.value = "";
    }
};

xhr.send(JSON.stringify(formData));

})
