const screen01 = document.querySelector('.bisc-init')
const screen02 = document.querySelector('.bisc-init2')
const biscot01 = document.querySelector('.img-a')
const biscotTry = document.querySelector('.link')

let numAleatorio = Math.floor(Math.random() * 5)
const frases = ['Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.', 'O sucesso está sempre ao alcance daqueles que persistem com determinação.', 'Grandes realizações exigem grandes sonhos e uma dose ainda maior de trabalho árduo.', 'Acredite nas possibilidades que o futuro reserva, pois cada desafio é uma oportunidade disfarçada.', 'Seja gentil consigo mesmo e com os outros, pois a verdadeira riqueza reside nas conexões humanas.']
const fraseParagrafo = document.querySelector('.msg-p');

biscot01.addEventListener('click', handleBisc)
biscotTry.addEventListener('click', handleBisc)

function toggleClass(){
    screen01.classList.toggle('hide')
    screen02.classList.toggle('hide')
}

function handleBisc(event){
    event.preventDefault()
    toggleClass()
    fraseParagrafo.innerHTML = frases[numAleatorio]
    numAleatorio = Math.floor(Math.random() * 5)
}