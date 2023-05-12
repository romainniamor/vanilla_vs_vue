//imc=poids en kg/t2 en m

const form = document.querySelector("form");
console.log(form);
console.dir(form);

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  countImc();
}

const inputs = document.querySelectorAll("input");
console.dir(inputs);

function countImc() {
  const height = inputs[0].value;
  const weight = inputs[1].value;

  if (!height || !weight || height <= 0 || weight <= 0) {
    console.log("error");
    error();
    return;
  } else {
    console.log("data:", height, weight);
  }

  const imc = Math.round(weight / Math.pow(height / 100, 2));
  console.log("imc:", imc);
  showResult(imc);
}

// function permettant de trouver la bonne valeur ds le tableau imcData
function showResult(imc) {
  const rank = imcData.find((data) => {
    if (imc >= data.range[0] && imc < data.range[1]) return data;
  });

  const indiceImc = document.querySelector(".score");
  indiceImc.textContent = imc;
  const commentImc = document.querySelector(".comment");
  commentImc.textContent = `${rank.name}`;
  const iconImc = document.querySelector(".sign");
  if (iconImc) {
    if (rank.name === "Bonne Santé") {
      iconImc.classList.remove("fa-thumbs-down");
      iconImc.classList.add("fa-thumbs-up");
    } else {
      iconImc.classList.remove("fa-thumbs-up");
      iconImc.classList.add("fa-thumbs-down");
    }
  }
}

function error() {
  const messageError = document.querySelector(".error");
  console.dir(messageError);
  messageError.textContent = "Erreur de saisie.";

  setTimeout(() => {
    messageError.textContent = "";
  }, 5000);
}

const imcData = [
  { name: "Maigreur", color: "rgba(17, 0, 255, 0.5);", range: [0, 18] },
  { name: "Bonne Santé", color: "rgba(170, 234, 7, 0.5)", range: [18, 25] },
  { name: "Surpoids", color: "rgba(235, 89, 10, 0.6);", range: [25, 30] },
  { name: "Obésité", color: "rgba(255, 0, 0, 0.5)", range: [30, 100] },
];
