const myMessage2 = document.getElementById("myMessage");

console.log(myMessage2);

myMessage2.addEventListener("click", greetings);

function greetings() {

  if(myMessage2.innerHTML === "I need to be Clicked!") {
    myMessage2.innerHTML = "I have been Clicked!";
  } else {
      myMessage2.innerHTML = "I need to be Clicked!"
  }

}
