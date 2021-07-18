const infoMessages = document.querySelectorAll(".info-message");
const inputZone = document.querySelector("#pw");
const hasNumbers = /\d/ ;
const hasUpperCase = /[A-Z]/;
const hasSpecialChar = /[^\w\s]/;
const hasRpeat = /(.)\1{1,}/

inputZone.addEventListener("input", e => {
  let pw = e.target.value;
  
  //check for length
  if (pw.length >= 8){
    infoMessages[0].classList.add("disable")
  }else {
    infoMessages[0].classList.remove("disable")
  }

  //check for uppercase
  if(hasUpperCase.test(pw)){
    infoMessages[1].classList.add("disable")
  }else {
    infoMessages[1].classList.remove("disable")
  }

  //check for numbers
  if(hasNumbers.test(pw)){
    infoMessages[2].classList.add("disable")
  }else {
    infoMessages[2].classList.remove("disable")
  }

  //check for special character
  if(hasSpecialChar.test(pw)){
    infoMessages[3].classList.add("disable")
  }else {
    infoMessages[3].classList.remove("disable")
  }

  //check for repeat
  if(hasRpeat.test(pw)){
    infoMessages[4].classList.add("disable")
  }else {
    infoMessages[4].classList.remove("disable")
  }
})