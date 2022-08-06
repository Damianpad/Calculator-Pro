const value1 = document.querySelector(".value1")
const value2 = document.querySelector(".value2")
const btn = document.querySelector("btn")



function getInput() {
  let input = document.getElementById("value1").value1
  console.log(input);
}

if (btn){
  btn.addEventListener("click", e => {
    console.log(getInput(e));
  })
}


// value2.addEventListener("click", e => {
//   console.log(e);
// })

// const calculate = getElementById("calculate").addEventListener("click", e => {
//     console.log(e.target)
// })
// const value1 = document.getElementById;

