const selflo = []
selflo[0] = "Give yourself permission to-do what is right for you.";
selflo[1] = "Allow yourself to be who you are without judgement.";
selflo[2] = "You make a difference in the world."
selflo[3] = "You are allowed to ask for what you want and need.";
selflo[4] = "You are loved and worthy of so much in this world.";
selflo[5] = "You are more than what your circumstances dictate.";
selflo[6] = "Be proud of your accomplishments - no matter how small.";
selflo[7] = "You are glowing!";
selflo[8] = "You are in the drivers seat of your life. Take control!";
selflo[9] = "Your potential to succeed is limitless!";
selflo[10] = "You are enough!";
selflo[11] = "You can choose to feel good.";
selflo[12] = "You are on your way to becoming the best version of yourself.";
selflo[13] = "YOU can do anything you set your mind to. All you need to do is take that first step.";
selflo[14] = "Negativity bounces off me.";
selflo[15] = "You are beautiful inside and out.";
selflo[16] = "You matter; your life matters.";
selflo[17] = "You can rise against any obstacle - any fear.";
selflo[18] = "Be willing to take risks and step out of my comfort zone.";
selflo[19] = "My self-worth is not contingent upon others’ opinions of me.";
selflo[20] = "Your emotions are valid and warranted.";
selflo[21] = "You are allowed to make my own decisions, even if others don’t agree with them.";
selflo[22] = "You are capable of creating the life I want.";

function self() {
  let selfAffirmations = Math.floor(Math.random() * (selflo.length));
   document.getElementById('selfl').innerHTML = selflo[selfAffirmations];
   setTimeout(startTimer, 6000);
   clearTimeout(setTimeout);
   again();
}

function startTimer(){
  document.getElementById('selfl').style.display ='none';
}

function again(){
  document.getElementById('selfl').style.display ='inline';
}