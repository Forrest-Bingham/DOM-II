// Your code goes here
const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("click", event => {
  logoHeading.style.color = "yellow";
  event.stopPropagation();
  console.log("click");
});

const header = document.querySelector(".main-navigation");
header.addEventListener("click", () => {
  header.style.backgroundColor = "orange";
  console.log("click");
});

const stopLink = document.querySelector(".nav-link");
stopLink.addEventListener("click", element => {
  element.preventDefault();
  console.log("click");
});

const navLink = document.querySelectorAll(".nav-link");
navLink[0].addEventListener("click", element => {
  navLink[0].style.color = "blue";
  event.stopPropagation();
  console.log("click");
});

//const navLink = document.querySelectorAll(".nav-link");
navLink[1].addEventListener("click", element => {
  navLink[1].style.color = "red";
  event.stopPropagation();
  console.log("click");
});

//const navLink = document.querySelectorAll(".nav-link");
navLink[2].addEventListener("click", element => {
  navLink[2].style.color = "green";
  event.stopPropagation();
  console.log("click");
});

//const navLink = document.querySelectorAll(".nav-link");
navLink[3].addEventListener("click", element => {
  navLink[3].style.color = "hotpink";
  event.stopPropagation();
  console.log("click");
});

const imageHeader = document.querySelector(".boat");
imageHeader.addEventListener("mouseenter", () => {
  imageHeader.style.transform = "scale(.8)";
  imageHeader.style.transition = "all 0.3s";
  console.log("mouse enter");
});
imageHeader.addEventListener("mouseleave", () => {
  imageHeader.style.transform = "scale(1.0)";
  imageHeader.style.transition = "all 0s";
  console.log("mouse leave");
});

function zoom(event) {
  event.preventDefault();

  if (event.deltaY < 0) {
    // Zoom in
    scale *= event.deltaY * -2;
  } else {
    // Zoom out
    scale /= event.deltaY * 2;
  }

  // Restrict scale
  scale = Math.min(Math.max(0.25, scale), 1);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector(".map");
document.onwheel = zoom;
console.log("On Wheel");

const body = document.querySelector(".home");
window.addEventListener("scroll", () => {
  body.style.backgroundColor = "yellow";
  console.log("window");
});

const changeImg = document.querySelector(".change");
changeImg.addEventListener("dblclick", () => {
  changeImg.src =
    "https://s-media-cache-ak0.pinimg.com/736x/b7/39/c9/b739c97e59146ddfbdcf26b014f313b5.jpg";

  console.log(changeImg);
});

let test = document.querySelector(".content-destination");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener(
  "mouseenter",
  function(event) {
    // highlight the mouseenter target
    event.target.style.color = "green";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  },
  false
);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener(
  "mouseover",
  function(event) {
    // highlight the mouseover target
    event.target.style.color = "red";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  },
  false
);

var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {}, false);

document.addEventListener(
  "dragstart",
  function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  "dragend",
  function(event) {
    // reset the transparency
    event.target.style.opacity = "";
  },
  false
);

/* events fired on the drop targets */
document.addEventListener(
  "dragover",
  function(event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "dragenter",
  function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "dropzone") {
      event.target.style.background = "purple";
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
    }
  },
  false
);

document.addEventListener(
  "drop",
  function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  },
  false
);

noContext = document.querySelector(".footer");

noContext.addEventListener("contextmenu", e => {
  e.preventDefault();
});

let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById("myPics");
const context = myPics.getContext("2d");

// The x and y offset of the canvas from the edge of the page
const rect = myPics.getBoundingClientRect();

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener("mousedown", e => {
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  isDrawing = true;
});

myPics.addEventListener("mousemove", e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
});

window.addEventListener("mouseup", e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

TweenMax.from(".image-header", 3, { x: 300, opacity: 0, scale: 0.5 });
