const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copyButton = document.getElementById("copy");

const generatePassword = ()=>{

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%^&*(){}+=!|\/?><[]";

  let password = "";
  const lengthofPassword = 10; 

  for(let i = 0; i < lengthofPassword; i++){
  
    password += chars.charAt(Math.floor(Math.random() * chars.length))
    //console.log(password);
  }

  passwordBox.value = password;

};



button.addEventListener("click",generatePassword);

copyButton.addEventListener("click",()=>{
  
  const passwordCopy = passwordBox.value.trim();
  if(!passwordCopy){
    alert("No Password to copy! Please generate a password first.")
  return;
}

navigator.clipboard.writeText(passwordCopy)
.then(()=>{
  alert("Password copied to clipboard");
});

});