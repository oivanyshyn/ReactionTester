var start = new Date().getTime();

function getColor(){

var letter = '0123456789ABCDEF'.split('');

var color = "#";

for (var i = 0; i < 6; i++){
  color += letter[Math.floor(Math.random() * 16 )];
}

return color;

}

function makeShapeAppear(){

  var top = Math.random() * 400;

  var left = Math.random() * 400;

  var width = (Math.random() * 200) + 100;

  if(Math.random() > 0.5){

      document.getElementById("shape").style.borderRadius = "50%";
  }else{

    document.getElementById("shape").style.borderRadius = "0%";
  }

  document.getElementById("shape").style.backgroundColor = getColor();

  document.getElementById("shape").style.top = top + "px";

  document.getElementById("shape").style.left = left + "px";

  document.getElementById("shape").style.width = width + "px";

  document.getElementById("shape").style.height = width + "px";

  document.getElementById("shape").style.display = "block";

  start = new Date().getTime();
}

function delayAppear(){

        setTimeout(makeShapeAppear, Math.random() * 3000);

}

delayAppear();

document.getElementById("shape").onclick = function(){

    document.getElementById("shape").style.display = "none";

    var end = new Date().getTime();

    var timeTaken = (end - start)/1000;

    document.getElementById("timeTaken").innerHTML = timeTaken + "seconds.";

    delayAppear();

}
