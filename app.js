let name = document.getElementById("name");
let fathername = document.getElementById("fathername");
let email = document.getElementById("email");
let image = document.getElementById("image");
let button = document.getElementById("button");


let hidden = document.getElementById("hidden");
hidden.style.display= "none";
let inputimage = document.getElementById("inputimage");
let inputname = document.getElementById("inputname");
let inputfathername = document.getElementById("inputfathername");
let inputemail = document.getElementById("inputemail");
let inputnumber = document.getElementById("inputnumber");
inputnumber.value=Math.floor(Math.random()*100000)+900000;
button.addEventListener('click' , function(){
hidden.style.display= "block"
inputname.value= name.value;
inputfathername.value= fathername.value;
inputemail.value=email.value;
 let file = image.files[0];
            if (file) {
                inputimage.src = URL.createObjectURL(file);
            }

            if(name.value === ""){
    alert("Kindly Enter Your Name")
}
else if(fathername.value === ''){
    alert("Kindly Enter your Father Name:")
}
else if(email.value===""){
    alert("Kindly Enter your Email Address");
}
else if(image.value===""){
    alert("Kindly Select Your Image")
}
})

