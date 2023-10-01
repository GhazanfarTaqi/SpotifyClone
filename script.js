console.log("Hello World")
let songindex = 0
let audioelement= new Audio("songs/1.mp3")
let masterplay = document.getElementById("masterplay")
let progressbar= document.getElementById("progressbar")
let gif= document.getElementById("gif")
let songitems=Array.from(document.getElementsByClassName("songItems"))
let mastersongname = document.getElementById("mastersongname")
// song1.play()
let songs=[
    {songname:"Sang e Mah", filepath:"songs/1.mp3",coverpath:"covers/1.png"},
    {songname:"Chaand_Baaliyan", filepath:"songs/2.mp3",coverpath:"covers/2.jpeg"},
    {songname:"Kana_Yaari", filepath:"songs/3.mp3",coverpath:"covers/3.jpeg"},
    {songname:"Pasoori", filepath:"songs/4.mp3",coverpath:"covers/4.jpeg"},
    {songname:"Run_Free", filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"Middle_Of_The_Night", filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname:"O_Meri_Laila", filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songname:"Tere_Bin Ost", filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
    {songname:"Nasheed_For_Workout_Gym", filepath:"songs/9.mp3",coverpath:"covers/9.jpg"},
]
songitems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src= songs[i].coverpath
    element.getElementsByClassName("songname")[0].innerText= songs[i].songname
});
masterplay.addEventListener("click",()=>{
    if (audioelement.paused || audioelement.currentTime<=0){
        audioelement.play()
        masterplay.classList.remove("fa-play")
        masterplay.classList.add("fa-pause")
        gif.style.opacity=1
    }
    else{
        audioelement.pause()
        masterplay.classList.remove("fa-pause")
        masterplay.classList.add("fa-play")
        gif.style.opacity=0
    }
})
audioelement.addEventListener("timeupdate",()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
    progressbar.value=progress 
})
progressbar.addEventListener("change",()=>{
    audioelement.currentTime=(progressbar.value*audioelement.duration)/100
})
const makeallplay=()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove("fa-pause")
        element.classList.add("fa-play")
        
    })    
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeallplay()
        songindex= parseInt(e.target.id)
        e.target.classList.remove("fa-play")
        e.target.classList.add("fa-pause")
        audioelement.src = `songs/${songindex}.mp3`
        
        audioelement.currentTime= 0
        audioelement.play()
        mastersongname.innerText= songs[songindex-1].songname
        gif.style.opacity=1
        masterplay.classList.remove("fa-play")
        masterplay.classList.add("fa-pause")
    })
})
document.getElementById("next").addEventListener("click",()=>{
    if (songindex>=9){
        songindex=0
    }
    else{
        songindex+=1
        audioelement.src = `songs/${songindex}.mp3`
        mastersongname.innerText= songs[songindex-1].songname
        audioelement.currentTime= 0
        audioelement.play()
        masterplay.classList.remove("fa-play")
        masterplay.classList.add("fa-pause")
    }

})
document.getElementById("previous").addEventListener("click",()=>{
    if (songindex<= 0){
        songindex=0
    }
    else{
        songindex-=1
        audioelement.src = `songs/${songindex}.mp3`
        mastersongname.innerText= songs[songindex+1].songname
        audioelement.currentTime= 0
        audioelement.play()
        masterplay.classList.remove("fa-play")
        masterplay.classList.add("fa-pause")
    }

})