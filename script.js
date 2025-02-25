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
        <button class="btn col-md-1" onclick="handleDelete(event)" id="delete"><i class="fa-solid fa-trash"></i></button>
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
  if (list.length===0){
    alert("Your list is empty!")
  }else{
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
}

function handleDelete(e){
  e.preventDefault()
  const id = e.target.closest(".row").id - 1
  list.splice(id,1)
    output.innerHTML = ''
    list.forEach((item,index)=>{
      output.innerHTML += `
    <div id="${index+1}" class="row align-items-center">
        <span class="col-md-1">${index+1}.</span>
        <span class="col">${item}</span>
        <button class="btn col-md-1" onclick="handleDelete(event)" id="delete"><i class="fa-solid fa-trash"></i></button>
        <hr class="my-1"/>
    </div>
    `;
    })
}