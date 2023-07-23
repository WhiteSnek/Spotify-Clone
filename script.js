console.log("Welcome to spotify");
// Initialize the variables
var songIndex = 0;
let audioElement = new Audio('resources/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('song-item'));
let isPlaying = false;
let time = audioElement.currentTime
let songs = [
    {songName: "Haryana Hood", artistName: "Irshad Khan", filePath: "resources/songs/1.mp3", coverPath: "resources/covers/1.jpg"},
    {songName: "Amplifier", artistName: "Imran Khan", filePath: "resources/songs/2.mp3", coverPath: "resources/covers/2.jpg"},
    {songName: "52 Bars", artistName: "Karan Aujla", filePath: "resources/songs/3.mp3", coverPath: "resources/covers/3.jpg"},
    {songName: "Angreji Beat", artistName: "Honey Singh", filePath: "resources/songs/4.mp3", coverPath: "resources/covers/4.jpg"},
    {songName: "Safar", artistName: "MixSingh", filePath: "resources/songs/5.mp3", coverPath: "resources/covers/5.jpg"},
    {songName: "On Top", artistName: "Karan Aujla", filePath: "resources/songs/6.mp3", coverPath: "resources/covers/6.jpg"},
    {songName: "No Reason", artistName: "Parmish Verma", filePath: "resources/songs/7.mp3", coverPath: "resources/covers/7.jpg"},
    {songName: "Rubicon Drill", artistName: "Laddi Chahal", filePath: "resources/songs/8.mp3", coverPath: "resources/covers/8.jpg"},
    {songName: "One Bottle Down", artistName: "Honey Singh", filePath: "resources/songs/9.mp3", coverPath: "resources/covers/9.jpg"},
    {songName: "G.O.A.T.", artistName: "Diljit Dosanjh", filePath: "resources/songs/10.mp3", coverPath: "resources/covers/10.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("artistName")[0].innerText = songs[i].artistName;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
})
// audioElement.play();

// Listen to events'
// Handle play/pause clicks
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        isPlaying = true;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        isPlaying = false;
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        // audioElement.pause();
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    var prevIndex = 10;
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        // let newTime = audioElement.currentTime;
        songIndex = parseInt(e.target.id);
        if(songIndex != prevIndex){
            audioElement.currentTime = 0;
            audioElement.src = `resources/songs/${songIndex+1}.mp3`;
            prevIndex = songIndex;
        }
        // if(songIndex == prevIndex){
        //     prevIndex = songIndex;
        // }
        // else{
        //     prevIndex = 10;
        // }
        // prevIndex = 0;
        // audioElement.play();
        if(isPlaying){
            console.log("pause")
            // newTime = audioElement.currentTime;
            audioElement.pause();
            isPlaying = false;
            e.target.classList.remove("fa-circle-pause");
            e.target.classList.add("fa-circle-play");
            gif.style.opacity = 0;
            
        }
        else{
            // audioElement.currentTime = newTime;
            audioElement.play();
            isPlaying = true;
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
            gif.style.opacity = 1;
        }
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        masterSongName.innerText = songs[songIndex].songName;
        console.log(songIndex);
    })
    // songIndex = 
    
})
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*1000);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 1000;
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `resources/songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    masterSongName.innerText = songs[songIndex].songName;
    
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 9;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `resources/songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    masterSongName.innerText = songs[songIndex].songName;
})