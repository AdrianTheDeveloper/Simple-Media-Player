document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
var player;

function startplayer() //  Function to start the video Linked in the Main.html File
{
 player = document.getElementById('video_player');
 player.controls = false;
}
function play_vid()
{
 player.play();// Plays the video 
}
function pause_vid() // Pause the video 
{
 player.pause();
}
function stop_vid() // Stops the video 
{
 player.pause();
 player.currentTime = 0; // resets Video to play from the beginning 
}
function change_vol() // Changes the Volume 
{
 player.volume=document.getElementById("change_vol").value;
}