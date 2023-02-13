
export default function () {


    const FlorestaAudio = new Audio("https://github.com/Beatrizfernan/audioss/blob/main/audios/Floresta.wav?raw=true")
    const ChuvaAudio = new Audio("https://github.com/Beatrizfernan/audioss/blob/main/audios/Chuva.wav?raw=true")
    const CafeteriaAudio = new Audio("https://github.com/Beatrizfernan/audioss/blob/main/audios/Cafeteria.wav?raw=true")
    const LareiraAudio = new Audio("https://github.com/Beatrizfernan/audioss/blob/main/audios/Lareira.wav?raw=true")
    
    
    
    
 


function pressButtonFlo() {
    FlorestaAudio.play()
}

function pressButtonFloOff() {
    FlorestaAudio.pause()
}
function pressButtonChu() {
    ChuvaAudio.play()
}
function pressButtonChuOff() {
    ChuvaAudio.pause()
}
function pressButtonCafe() {
    CafeteriaAudio.play()
}
function pressButtonCafeOff() {
    CafeteriaAudio.pause()
}
function pressButtonLare() {
    LareiraAudio.play()
}
function pressButtonLareOff() {
    LareiraAudio.pause()
}



//function timeEnd() {
//    kitchenTimer.play()
//}



return {
    pressButtonFlo,
    pressButtonChu,
    pressButtonCafe,
    pressButtonLare,
    pressButtonFloOff,
    pressButtonChuOff,
    pressButtonCafeOff,
    pressButtonLareOff
}}

