var running = false;
var time = 0;
var interval;



function start() {

  if (!running) {
  interval = setInterval(function() {
      running = true;
      time++;
      var m = Math.floor(time / 100 / 60 % 60);
      var s = Math.floor(time / 100 % 60);
      var ms = time % 100;


      document.getElementById('input').innerHTML = m + ":" + s + ":" + ms;

  }, 10)
  }
}

function stop() {
  clearInterval(interval);
  running = 0;
}

function clearr() {
  time = 0;

  document.getElementById('input').innerHTML = "";
  // document.getElementById('miliseconds').innerHTML = "";
  // document.getElementById('seconds').innerHTML = "";
  // document.getElementById('minutes').innerHTML = "";
  // document.getElementById('hours').innerHTML = "";

}
