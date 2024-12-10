let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlicon = document.getElementById("ctrlicon");

song.onloadedmetadata = function ()
{
    progress.max = song.duration;
}
 
function playPause()
{
    if (ctrlicon.classList.contains("fa-pause"))
    {
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
    }
    
    else if(ctrlicon.classList.contains("fa-play"))
    {
        song.play();
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
        setInterval(() => {
            progress.value = song.currentTime;
        });
    }
}
 

 
progress.onchange = function ()
{

    song.currentTime=progress.value;
 }