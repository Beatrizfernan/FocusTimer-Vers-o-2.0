import Sound from "./sounds.js"

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const buttonSoundFloresta = document.querySelector('.Floresta')
const buttonSoundFlorestaOff = document.querySelector('.FlorestaOff')
const buttonSoundChuva = document.querySelector('.Chuva')
const buttonSoundChuvaOff = document.querySelector('.ChuvaOff')
const buttonSoundCafeteria = document.querySelector('.Cafeteria')
const buttonSoundCafeteriaOff = document.querySelector('.CafeteriaOff')
const buttonSoundLareira = document.querySelector('.Lareira')
const buttonSoundLareiraOff = document.querySelector('.LareiraOff')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const sound = Sound()
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut


buttonSoundFloresta.addEventListener('click', function () {
    buttonSoundFloresta.classList.add('hide')
    buttonSoundFlorestaOff.classList.remove('hide')
    sound.pressButtonFlo()
})


buttonSoundFlorestaOff.addEventListener('click', function () {
    buttonSoundFloresta.classList.remove('hide')
    buttonSoundFlorestaOff.classList.add('hide')
    sound.pressButtonFloOff()
})

buttonSoundChuva.addEventListener('click', function () {
    buttonSoundChuva.classList.add('hide')
    buttonSoundChuvaOff.classList.remove('hide')
    sound.pressButtonChu()
})

buttonSoundChuvaOff.addEventListener('click', function () {
    buttonSoundChuva.classList.remove('hide')
    buttonSoundChuvaOff.classList.add('hide')
    sound.pressButtonChuOff()
})

buttonSoundCafeteria.addEventListener('click', function () {
    buttonSoundCafeteria.classList.add('hide')
    buttonSoundCafeteriaOff.classList.remove('hide')
    sound.pressButtonCafe()
})
buttonSoundCafeteriaOff.addEventListener('click', function () {
    buttonSoundCafeteria.classList.remove('hide')
    buttonSoundCafeteriaOff.classList.add('hide')
    sound.pressButtonCafeOff()
})
buttonSoundLareira.addEventListener('click', function () {
    buttonSoundLareira.classList.add('hide')
    buttonSoundLareiraOff.classList.remove('hide')
    sound.pressButtonLare()
})

buttonSoundLareiraOff.addEventListener('click', function () {
    buttonSoundLareira.classList.remove('hide')
    buttonSoundLareiraOff.classList.add('hide')
    sound.pressButtonLareOff()
})
minutes = prompt('Quantos minutos?')
  updateTimerDisplay(minutes, 0)
buttonPlay.addEventListener('click', function () {
  
  countdown()
})
buttonStop.addEventListener('click', function () {
    resetTimer()
  })
  
  buttonPlus.addEventListener('click', function () {
    plus()
    
    
  })
  buttonMinus.addEventListener('click', function () {
    minus()
    
    
  })
  function plus( ){
    updateTimerDisplay(Number(5)+Number(minutes), 0)
    
  }

  function minus(){
    updateTimerDisplay(Number(minutes)-Number(5), 0)
    
  }
function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function resetTimer() {
   clearTimeout(timerTimeOut)
  }
function countdown(){
    timerTimeOut = setTimeout(function(){
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      updateTimerDisplay(minutes, 0)
      
      if (minutes <= 0) {
  
        updateTimerDisplay( 0,0)
  
        return
      }
      if( seconds <= 0 ) {
        seconds = 60
        --minutes
      }
  
      updateTimerDisplay(minutes, String(seconds - 1))
      countdown()
    }, 1000)
  }


  