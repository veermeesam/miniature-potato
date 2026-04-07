// EmailJS Init
(function(){
  emailjs.init("-2DD8LC4eEapshVkOJ");
})();

// Scroll functions
function scrollToAcademy() {
  document.getElementById("academy").scrollIntoView({behavior:"smooth"});
}

function scrollToBuild() {
  document.getElementById("build").scrollIntoView({behavior:"smooth"});
}

// Project Form
document.getElementById("projectForm").addEventListener("submit", function(e){
  e.preventDefault();

  let formData = new FormData(this);

  emailjs.send("service_ab0b9m","template_j241efb",{
    idea: formData.get("idea"),
    email: formData.get("email")
  });

  fetch("save.php",{
    method:"POST",
    body:formData
  });

  alert("Thanks for choosing Nova X Cypher 🚀");
});

// Apply Form
document.getElementById("applyForm").addEventListener("submit", function(e){
  e.preventDefault();

  let formData = new FormData(this);

  fetch("save.php",{
    method:"POST",
    body:formData
  });

  alert("Thanks for choosing Nova X Cypher to boost your career 🎯");
});