const heali = []
heali[0] = "You are understood and your perspective is important";
heali[1] = "You're at peace and worthy.";
heali[2] = "You are worthy of investing in yourself."
heali[3] = "You are surround by love and support.";
heali[4] = "Breath in healing and exhale the things that burden you.";
heali[5] = "You can hold two opposing feelings at once, it means you are processing.";
heali[6] = "You deserve  information and you deserve moments of silence too.";
heali[7] = "You have everything you need to succeed.";
heali[8] = "Let go of things that sit achingly out of reach.";
heali[9] = "Let go. It creates space for opportunities to come.";

function healing() {
 let healingAffirmations = Math.floor(Math.random() * (heali.length));
  document.getElementById('heal').innerHTML = heali[healingAffirmations];
  setTimeout(clear, 3000);
  clearTimeout(setTimeout);
  star();
}

function clear(){
document.getElementById('heal').style.display ='none';
}

function star(){
document.getElementById('heal').style.display ='inline';
}
