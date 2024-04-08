const display = document.getElementById("display")
const apend = (input)=>{
    display.value += input
}
const cler = ()=>{
    display.value= "";
}

const calculate = ()=>{
    display.value = eval(display.value);
}
