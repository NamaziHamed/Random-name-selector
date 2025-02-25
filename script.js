const input = document.querySelector("input");
const btnAdd = document.querySelector("#btn-add");
const btnRandom = document.querySelector("#btn-random");
const output = document.querySelector("#output");
const btnClear = document.querySelector("#btn-clear")

let list = [];

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  handleFormSubmit();
});

btnRandom.addEventListener("click", (e) => handleRandom(e));
btnClear.addEventListener("click",e=>{
  e.preventDefault()
  list = []
  output.innerHTML = ''
})

function handleFormSubmit() {
  if (input.value) {
    list.push(input.value);
    const num = list.length;
    output.innerHTML += `
    <div id="${num}" class="row align-items-center">
        <span class="col-md-1">${num}.</span>
        <span class="col">${input.value}</span>
        <hr class="my-1"/>
    </div>
    `;
    input.value = ''
  } else {
    alert("Input field is empty");
  }
}

function handleRandom(e, i = 0) {
  e.preventDefault();
  const outputs = document.querySelectorAll("#output .row");
  if (i < 100) {
    outputs.forEach((item) => {
      item.style.background = "white";
    });
  }
  if (i < 100) {
    const res = Math.ceil(Math.random() * list.length);
    outputs.forEach((item) => {
      if (item.id == res) {
        item.style.background = "red";
      }
    });
    setTimeout(() => {
      i++;
      handleRandom(e, i);
    }, 1*i);
  }
}
