let button = document.getElementById('btn')
let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


button.addEventListener('click',newFunc)

function newFunc(){
    let color = '#'
    for(let i=0;i<6;i++){
        color += randomvalue()
    }
let wrap = document.getElementById('wrap')
wrap.style.backgroundColor = color;
document.getElementById('color').innerHTML = color
console.log(color);
}

function randomvalue(){
    let randNum = Math.floor(Math.random()* 16)
    return hex[randNum]
}