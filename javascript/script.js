const fieldSet = document.querySelector("#fieldset")
const progressBar = document.querySelector("#enemy")
//const aanvaL = document.querySelector(".aanval")
const pasAanvaltoe = document.querySelector("#pasaanvaltoe")
let typhlosionAudio = new Audio("Audio/typhlosion.mp3")
const mijnProgressbar = document.querySelector("#Thyphlosion")
let venusaurAudio = new Audio("Audio/venusaur.mp3")
const winstVerlies = document.querySelector("#winstverlies")
let gewonnenAudio = new Audio("Audio/gewonnen.mp3")
let verlorenAudio = new Audio("Audio/verloren.mp3")
const huidigeWaarde = document.querySelector("#huidigewaarde")
const mijnHuidigeWaarde = document.querySelector("#mijnhuidigewaarde")
const thyphlosionPlaatje = document.querySelector("#ThyphlosionPlaatje")
const venusaurPlaatje = document.querySelector("#VenusaurPlaatje")
const standaardButton = document.querySelector("#standaard")
let standaardAudio = new Audio("Audio/muziek4.mp3")
const strandButton = document.querySelector("#strand")
let strandAudio = new Audio("Audio/muziek3.mp3")
const sneeuwButton = document.querySelector("#sneeuw")
let sneeuwAudio = new Audio("Audio/muziek5.mp3")
const grotButton = document.querySelector("#grot")
let grotAudio = new Audio("Audio/muziek2.mp3")
const bosButton = document.querySelector("#bos")
let bosAudio = new Audio("Audio/muziek1.mp3")

//timer functie
//let timeR = document.querySelector("#timer")
//let secondsPassed = 60
//const updatE = document.querySelector("#update")

//setInterval(countSeconds, 1000)

//function countSeconds() {
//   timeR.textContent = secondsPassed
//   if (secondsPassed <= 0) {
//      clearInterval(timeR);
//  }else if(secondsPassed === 10){
//      updatE.textContent = ("kies snel een aanval!")
//   }else {
//      secondsPassed -= 1; 
//  }
//}

function aanvalKlaar(){
   fieldSet.disabled = true
}

//healthbar
function verlaagWaarde(){
   let aanvalWaarde = document.querySelector("input[name='damage']:checked").value
   console.log("aanvalwaarde", aanvalWaarde)
   //Bron: Berry 
   progressBar.value = progressBar.value - aanvalWaarde
   huidigeWaarde.textContent = progressBar.value + "/200"
   venusaurPlaatje.style.animation = 'none';
   beweegMijnPlaatje()
   // om plaatje elke keer opnieuw te kunnen laten bewegen
   typhlosionAudio.play()
   aanvalKlaar()
   setTimeout(mijnVerlaagwaarde,2000)
   winstOfVerlies()
}

pasAanvaltoe.addEventListener("click", verlaagWaarde)
//aanval tegenstander
//let enemyAanval = ["30","60","90","120"]

//https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio

function mijnVerlaagwaarde(){
   if (progressBar.value <= 0){
      winstOfVerlies()
   }
   else if (progressBar.value >= 1){
      let mysteryNumber = Math.random() * 4
      mysteryNumber = Math.floor(mysteryNumber)
      console.log(mysteryNumber)
      let enemyAanval = ["30","60","90","120"]
      console.log(enemyAanval[mysteryNumber])
      mijnProgressbar.value = mijnProgressbar.value - enemyAanval[mysteryNumber]
      thyphlosionPlaatje.style.animation = 'none';
      // om plaatje elke keer opnieuw te kunnen laten bewegen
      setTimeout(wisselBeurt,2000)
      beweegPlaatje()
      venusaurAudio.play()
      mijnHuidigeWaarde.textContent = mijnProgressbar.value + "/200"
      winstOfVerlies() 
   }
}

//Aanval weer mogelijk
function wisselBeurt (){
   fieldSet.disabled = false
}

//winnaar
function speelVerlorenAudio(){
   verlorenAudio.play()
}

function speelGewonnenAudio(){
   gewonnenAudio.play()
}

//wat er gebeurt als je heb verloren of gewonnen
function winstOfVerlies(){
  if (mijnProgressbar.value === 0){
      winstVerlies.textContent = "Verloren"
      winaarTekstAnimatie()
      console.log("verlies")
      verliesAnimatie()
      stopAudio()
      setTimeout(speelVerlorenAudio, 2000)
  }
  else if (progressBar.value === 0){
     winstVerlies.textContent = "Gewonnen"
     winaarTekstAnimatie()
     console.log("winst")
     winstAnimatie()
     stopAudio()
     setTimeout(speelGewonnenAudio, 2000)
 }
}

//indicator
console.log(progressBar.value + "/200")
console.log(mijnProgressbar.value + "/200")

huidigeWaarde.textContent = progressBar.value + "/200"
mijnHuidigeWaarde.textContent = mijnProgressbar.value + "/200"

//animatie
function beweegPlaatje(){
   venusaurPlaatje.style.animation = "turn 2000ms"
}

function beweegMijnPlaatje(){
   thyphlosionPlaatje.style.animation = "turn 2000ms"
}

function verliesAnimatie(){
   thyphlosionPlaatje.style.animation = "verloren 2000ms forwards"
}

function winstAnimatie(){
   venusaurPlaatje.style.animation = "verloren 2000ms forwards"
}

function winaarTekstAnimatie(){
   winstVerlies.style.animation = "vergroten 2000ms forwards"
}

//mijn bron https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes

//buttons
//stoppen van muziek
function stopAudio(){
   standaardAudio.pause()
   standaardAudio.currentTime = 0
   
   strandAudio.pause()
   standaardAudio.currentTime = 0

   sneeuwAudio.pause()
   sneeuwAudio.currentTime = 0

   grotAudio.pause()
   grotAudio.currentTime = 0

   bosAudio.pause()
   bosAudio.currentTime = 0
}

//stoppen van audio
//https://stackoverflow.com/questions/14834520/html5-audio-stop-function

//geluid verlagen
//https://chatgpt.com/share/43a9fb3b-1da6-4edd-890a-f6c19dda0746

//new audio
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement

//standaard achtergrond
function standaardAchtergrond(){
   stopAudio()
   document.body.style.backgroundImage = "url('images/standaard.png')"
   standaardAudio.play()
   standaardAudio.volume = 0.3
}

standaardButton.addEventListener("click",standaardAchtergrond)

//strand achtergrond
function strandAchtergrond(){
   stopAudio()
   document.body.style.backgroundImage = "url('images/strand.png')"
   strandAudio.play()
   strandAudio.volume = 0.3
}

strandButton.addEventListener("click",strandAchtergrond)

//sneeuw achtergrond
function sneeuwAchtergrond(){
   stopAudio()
   document.body.style.backgroundImage = "url('images/sneeuw.jpeg')"
   sneeuwAudio.play()
   sneeuwAudio.volume = 0.3
}

sneeuwButton.addEventListener("click",sneeuwAchtergrond)

//grot achtergrond
function grotAchtergrond(){
   stopAudio()
   document.body.style.backgroundImage = "url('images/grot.png')"
   grotAudio.play()
   grotAudio.volume = 0.3
}

grotButton.addEventListener("click",grotAchtergrond)

//bos achtergrond
function bosAchtergrond(){
   stopAudio()
   document.body.style.backgroundImage = "url('images/bos.jpeg')"
   bosAudio.play()
   bosAudio.volume = 0.3
}

bosButton.addEventListener("click",bosAchtergrond)