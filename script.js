const today = new Date();
document.getElementById("today").textContent = today.toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric"}).toUpperCase();
document.getElementById("year").textContent = today.getFullYear();
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.getElementById("signupForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.getElementById("formMessage").textContent="Thanks! This demo form is not connected yet. Add an email service before publishing signups.";
});