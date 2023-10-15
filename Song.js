
<html>
    <body>
        <button id="play">Play</button>
        </body>
</html>
   
let audioElement=new Audio("Song5.mp3");
let Students=[
    {songName:"Janam.mp3",filepath:"./Janam.mp3",coverPath:""},
{songName:"Hauli.mp3",filepath:"./Hauli.mp2",coverPath:""},
{songName:"coca.mp3",filePath:"./coca.mp3",coverPath:""},
{songName:"Gali.mp3",filePath:"./Gali.mp3",coverPath:""},
{songName:"Chote.mp3",filePath:"./Chote.mp3",coverPath:""},
{songName:"Boyfriend.mp3",filePath:"./Boyfriend.mp3",coverPath:""}]

document.getElementById('btn1').addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else
    {
        audioElement.pause;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})


