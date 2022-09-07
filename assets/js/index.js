var container = ["Savino", "Corporation", "BMW"];
var counter = 0;
var text = document.getElementById("terminal-1-text");

setInterval (update_terminal_1_text, 1000);
function update_terminal_1_text (){
  text.innerHTML = container [counter];
  counter ++;
  if (counter >= container.lenght){
    counter=0;
  }
}
