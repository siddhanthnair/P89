var score = 0;
function update(){
score=score+1;
document.getElementById("score").innerHTML=score;
}
function savescore(){
localStorage.setItem("score", score);

}
function nextpage(){
window.location="activity2.html";
}