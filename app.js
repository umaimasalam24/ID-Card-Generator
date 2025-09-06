// // confirm("Do You Want to give Us Information?")
// // let pname = prompt("Enter Your Name: ")
// // let pfatherName = prompt("Enter Your Father Name: ")
// // let pRollNo = prompt("Enter Your Roll No: ") 
// // let pcourse = prompt("Enter Your Course Name: ");
// // let name = document.getElementById("name")
// // let fatherName = document.getElementById('fatherName');
// // let RollNo = document.getElementById('RollNo');
// // let course = document.getElementById('course');
// // name.value = pname;
// // fatherName.value = pfatherName
// // RollNo.value = pRollNo;
// // course.value= pcourse;

// let inputName = document.getElementById("name").value;
// let inputFatherName = document.getElementById("fatherName").value;
// let inputRollNo = document.getElementById("RollNo").value;
// let generatebtn = document.getElementById("generatebtn");
// generatebtn.addEventListener("click" , function(){
//     document.writeln(`<h1> ID Card </h1> <h3> Name: </h3> ${inputName} <h3> Father Name: </h3> ${inputFatherName}  <h3> Roll No: ${inputRollNo}`  )
// })


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

