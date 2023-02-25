const tap = document.querySelector('#tap')
const reset = document.querySelector('#reset')
const bgColor = document.querySelector('#bg-color')
const color = document.querySelector('#color')
const clicker = document.querySelector('#clicker')
let count = 0;

//клик на пробел
document.addEventListener('keydown', (event) => {
    event.preventDefault()
    if (event.code.toLowerCase() === 'space'){
        setRandomColors()
        count++
        document.querySelector('#count-out').innerHTML = 'Count: ' + count
    }
})

//закрытие замочка
document.addEventListener('click', (event) => {
    const type = event.target.dataset.type
    if (type === 'lock'){
        const node = event.target.tagName.toLowerCase() === 'i'
        ? event.target 
        : event.target.children[0]
        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
    }

})
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
    
})

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
