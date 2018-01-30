
var running = 0;
var time = 0;
var interval = setInterval(function() {
 if(running === 1){
    time++;
    document.getElementById('miliseconds').innerHTML = time;
}
}, 1)



document.getElementById('start').addEventListener("click", function(){
  running = 1;
  interval();
})

document.getElementById('stop').addEventListener("click", function(){

  clearInterval(interval);
  running = 0;

})

