let lvl = document.querySelector("#lvl");
let lift = document.querySelector("#lift");
let floor = 0;
let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");
let fourth = document.querySelector("#fourth");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let ten = document.querySelector("#ten");
let eleven = document.querySelector("#eleven");
let twelve = document.querySelector("#twelve");
let thirteen = document.querySelector("#thirteen");
let fourteen = document.querySelector("#fourteen");
let fiveteen = document.querySelector("#fiveteen");
let sixteen = document.querySelector("#sixteen");
let arrowUp = document.getElementsByClassName("arrowUp");
let arrowDown = document.getElementsByClassName("arrowDown");

function rander() {
  lift.style.bottom = `${floor}px`;
}

first.addEventListener("click", () => {
  floor = 0;
  rander();
  lift.style.transition = "2s";
});
second.addEventListener("click", () => {
  floor = 27;
  rander();
  lift.style.transition = "2s";
});
third.addEventListener("click", () => {
  floor = 53;
  rander();
  lift.style.transition = "2s";
});
fourth.addEventListener("click", () => {
  floor = 79;
  rander();
  lift.style.transition = "2s";
});
five.addEventListener("click", () => {
  floor = 105;
  rander();
  lift.style.transition = "2s";
});
six.addEventListener("click", () => {
  floor = 131;
  rander();
  lift.style.transition = "2s";
});
seven.addEventListener("click", () => {
  floor = 157;
  rander();
  lift.style.transition = "2s";
});
eight.addEventListener("click", () => {
  floor = 183;
  rander();
  lift.style.transition = "2s";
});
nine.addEventListener("click", () => {
  floor = 209;
  rander();
  lift.style.transition = "2s";
});
ten.addEventListener("click", () => {
  floor = 235;
  rander();
  lift.style.transition = "2s";
});
eleven.addEventListener("click", () => {
  floor = 261;
  rander();
  lift.style.transition = "2s";
});
twelve.addEventListener("click", () => {
  floor = 287;
  rander();
  lift.style.transition = "2s";
});
thirteen.addEventListener("click", () => {
  floor = 313;
  rander();
  lift.style.transition = "2s";
});
fourteen.addEventListener("click", () => {
  floor = 339;
  rander();
  lift.style.transition = "2s";
});
fiveteen.addEventListener("click", () => {
  floor = 365;
  lift.style.transition = "2s";
  rander();
});
sixteen.addEventListener("click", () => {
  floor = 391;
  rander();
  lift.style.transition = "2s";
});
seventeen.addEventListener("click", () => {
  floor = 417;
  rander();
  lift.style.transition = "2s";
});
eighteen.addEventListener("click", () => {
  floor = 443;
  rander();
  lift.style.transition = "2s";
});
