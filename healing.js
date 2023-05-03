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
heali[10] = "You are enough.";
heali[11] = "You are on the way to becoming the best version of yourself.";
heali[12] = "You have the ability to reclaim your power!";
heali[13] = "You are your own hero.";
heali[14] = "You are not your anxiety. You are not what your fears try to tell you are.";
heali[15] = "Promise to be kind to yourself because you deserve such kindness .";
heali[16] = "Embrace the glorious mess that you are.";
heali[17] = "The emotion that can break your heart is sometimes the very one that heals it.";
heali[18] = "Everything passes if you learn to hold thing lightly.";
heali[19] = "Hold your head up! You were not made for failure, YOU were made for victory.";
heali[20] = "Your past is not a reflection of your future.";
heali[21] = "Difficult times allow you to appreciate the good times.";


function healing() {
 let healingAffirmations = Math.floor(Math.random() * (heali.length));
  document.getElementById('heal').innerHTML = heali[healingAffirmations];
  setTimeout(clear, 6000);
  clearTimeout(setTimeout);
  star();
}

function clear(){
document.getElementById('heal').style.display ='none';
}

function star(){
document.getElementById('heal').style.display ='inline';
}
