const tap = document.querySelector('#tap')
const reset = document.querySelector('#reset')
const bgColor = document.querySelector('#bg-color')
const color = document.querySelector('#color')
const clicker = document.querySelector('#clicker')
const popUp = document.querySelector('#pop-up')

let count = 0;




//клик на пробел
document.addEventListener('keydown', (event) => {
    console.log(event)
    if (event.code.toLowerCase() === 'space'){
        setRandomColors()
        count++
        document.querySelector('#count-out').innerHTML = 'Count: ' + count
    }
})

//закрытие замочка, копирование цвета и всплывающее окошко
document.addEventListener('click', (event) => {
    const type = event.target.dataset.type
    if (type === 'lock'){
        const node = event.target.tagName.toLowerCase() === 'i'
        ? event.target 
        : event.target.children[0]
        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
        popUp.classList.remove('clicker__pop-up--active')
    }
    else if (type === 'copy'){
        copyToClick(event.target.textContent)
        popUp.classList.add('clicker__pop-up--active')

    }
    else{
        popUp.classList.remove('clicker__pop-up--active')
    }
})

/*
//копирование строки при нажатии на кнопку цвета
color.addEventListener('click',(event) => {
    const type = event.target.dataset.type
    if (type === 'copy'){
        copyToClick(event.target.textContent)
        popUp.classList.add('clicker__pop-up--active')
    }


})
*/


//клик на тап
tap.addEventListener('click', (event) =>{
    reset.addEventListener('click', (event) =>{
        count = 0;
        document.querySelector('#count-out').innerHTML = 'Count: ' + count
    })
    count++
    document.querySelector('#count-out').innerHTML = 'Count: ' + count
    if (setRandomColors()!= 1){
        document.querySelector('#color').innerHTML = setRandomColors()
    }
    popUp.classList.remove('clicker__pop-up--active')

    
})

//копирование
function copyToClick(text){
    return navigator.clipboard.writeText(text)
}

//генерация цветов
function generateRandomColor(){
    const hexCode = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++){
        color += hexCode[Math.floor(Math.random() * hexCode.length)]
    }
    return '#' + color
}

//задаем цвет фону основной области
function setRandomColors(){
    
    const isLocked = clicker.querySelector('i').classList.contains('fa-lock')
    const color = generateRandomColor()

    if(isLocked){
        return 1
    }
    
    bgColor.style.background = color 

    return color
}

