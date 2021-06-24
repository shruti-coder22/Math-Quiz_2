var player_1_name = localStorage.getItem("Player_1_Name");
var player_2_name = localStorage.getItem("Player_2_Name");

var p1_score = 0;
var p2_score = 0;

document.getElementById("player1_name").innerHTML= player_1_name + ":";
document.getElementById("player2_name").innerHTML= player_2_name + ":";

document.getElementById("player1_score").innerHTML= p1_score + ":";
document.getElementById("player2_score").innerHTML= p2_score + ":";

document.getElementById("player_question").innerHTML= "Question Turn - " + player_1_name;
document.getElementById("player_answer").innerHTML= "Answer Turn - " + player_2_name;

function send() {
    
}