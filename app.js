var running = false;
var time = 0;
var interval;
var timer = {};

function start() {

  if (!running) {
    interval = setInterval(function() {
      running = true;
      time++;
      timer.m = Math.floor(time / 100 / 60 % 60);
      timer.s = Math.floor(time / 100 % 60);
      timer.ms = time % 100;

      if (timer.m < 10) {
        timer.m = "0" + timer.m;
      }

      if (timer.s < 10) {
        timer.s = "0" + timer.s;
      }

      if (timer.ms < 10) {
        timer.ms = "0" + timer.ms;
      }

      document.getElementById('minutes').innerHTML = timer.m;
      document.getElementById('seconds').innerHTML = timer.s;
      document.getElementById('miliseconds').innerHTML = timer.ms;

    }, 10)

    document.getElementById('lap').disabled = false;
    document.getElementById('start').onclick = pause;
    document.getElementById('start').innerHTML = "pause";
    document.getElementById('start').style.background = '#efeb00';

  }
}

function pause() {
  clearInterval(interval);
  running = false;
  document.getElementById('lap').disabled = true;
  document.getElementById('start').onclick = start;
  document.getElementById('start').innerHTML = "resume";
  document.getElementById('start').style.background = '#43ba4a';
}

function clearr() {
  time = 0;
  document.getElementById('miliseconds').innerHTML = "00";
  document.getElementById('seconds').innerHTML = "00";
  document.getElementById('minutes').innerHTML = "00";
  document.getElementById('laps').innerHTML = "";
  if (running === false) {
  document.getElementById('start').innerHTML = "start";
}

}

function lap() {
  let li = document.createElement("li");
  let lapLi = document.createTextNode(timer.m + ":" + timer.s + ":" + timer.ms);
  let br = document.createElement("br");
  document.getElementById('laps').appendChild(lapLi);
  document.getElementById('laps').appendChild(br);
}
