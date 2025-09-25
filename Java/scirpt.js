document.getElementById("logo").addEventListener("click", function(){
    this.style.display="none";
})
document.addEventListener("DOMContentLoaded", () =>{
  const form =document.querySelector(".form");

  form.addEventListener("submit", function (e){
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email == "" || !email.includes("@")) {
      alert("please enter a valid email.");
      e.preventDefault();
      return;
    }

    if (password == "" || password.length <6) {
      alert("password must be at least 6 characters long.");
      e.preventDefault();
      return;
    }
    alert("Form submitted successfully ✅ ")
  });
});