let container = document.querySelector(".tableBody");
// console.log("hi")
const goToIO = () => {
  window.location.href = "./IoReport.html";
};
let displayUpdateComp = document.querySelector(".displayUpdateComp");
let closeIconUpdate = document.querySelector(".closeIconUpdate");
closeIconUpdate.addEventListener("click", () => {
  displayUpdateComp.classList.toggle("activeUpdateComp");
});

let displayViewComp = document.querySelector(".displayViewComp");
let closeIconView = document.querySelector(".closeIconView");
closeIconView.addEventListener("click", () => {
  displayViewComp.classList.toggle("activeviewComp");
});

const toaddComplaints = () => {
  window.location.href = "./addComplaints.html";
};