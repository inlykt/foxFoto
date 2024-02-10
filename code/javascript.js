let colorr = "red";
const logoButton = document.querySelector("img.titlelogo");
let togg = true;

// disables or enables the radial gradient
function changeRad() {
  if (togg == true) {
    document.body.style.background = "radial-gradient(circle at top right, goldenrod 0px, #ffffff 600px)";
    document.body.style.backgroundRepeat =  "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    togg = false
  } else {
    document.body.style.background = "white";
    togg = true
  }
}

// adds the event listener and calls changeRad
logoButton.addEventListener("click", changeRad);