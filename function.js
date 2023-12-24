let counter = 0;
let scoreObject = document.querySelector(".score");

let movingRight = function (objecElement, left) {
  setTimeout(() => {
    objecElement.style.visibility = "visible"; //the object start visable
    objecElement.style.top =
      Math.floor(
        Math.random() * (window.innerHeight - 10 * objecElement.style.height)
      ) + "px";
    let id = setInterval(() => {
      left += 20;
      if (left < window.innerWidth - objecElement.width) {
        objecElement.style.left = left + "px";
      } else {
        objecElement.style.visibility = "hidden"; //the object will be hidden when reach the end of page
        clearInterval(id);

        objecElement.classList.add("flip");
        movingLift(objecElement, left);
      }
    }, 50);
  }, 500);
};

let movingLift = function (objecElement, left, top) {
  setTimeout(() => {
    objecElement.style.visibility = "visible";

    objecElement.style.top =
      Math.floor(
        Math.random() * (window.innerHeight - 10 * objecElement.style.height)
      ) + "px";
    let id = setInterval(() => {
      left -= 20;
      if (left > 0) {
        objecElement.style.left = left + "px";
      } else {
        clearInterval(id);
        objecElement.style.visibility = "hidden"; //the object will be hidden when reach the end of page

        objecElement.classList.remove("flip");
        movingRight(objecElement, left);
      }
    }, 50);
  }, 500);
};

document.images[0].onclick = function () {
  console.log("good");
  document.images[0].classList.add("die");
  moveDown();
  console.log("dieeee");
  setTimeout(() => {
    document.images[0].classList.remove("die");
  }, 1000);
  counter += 10;
  scoreObject.innerHTML = counter;
};

let moveDown = function () {
  setInterval(() => {
    top += 20;
    birdObject.style.top = top + "px";
  }, 50);
  console.log(top);
};
