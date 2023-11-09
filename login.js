
    
function togglePass(){
    let pass = document.getElementById("pass")
    pass.type = (pass.type === "text") ? "password": "text";
}

// function login(e){
//     e.preventDefault()
//     console.log("clicked")
// }

if(localStorage.getItem("flag") === "true"){
    window.location.href = '../index.html';
}else{
    alert("Please login")
}

$(document).ready(function(){
    const user = document.getElementById("user");
    const pass = document.getElementById("pass");
    
    $("#login-btn").click((e)=>{
        e.preventDefault();
        localStorage.setItem("flag", true);
        window.location.href = '../index.html';
    })
})