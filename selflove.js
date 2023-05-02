

const selflo = []
selflo[0] = "Give yourself permission to-do what is right for you.";
selflo[1] = "Allow yourself to be who you are without judgement.";
selflo[2] = "You make a difference in the world."
selflo[3] = "You are allowed to ask for what you want and need.";
selflo[4] = "You are loved and worthy of so much in this world";
selflo[5] = "You are more than what your circumstances dictate.";
selflo[6] = "Be proud of your accomplishments - no matter how small.";
selflo[7] = "I am glowing!";
selflo[8] = "You are in the drivers seat of your life. Take control!";
selflo[9] = "Your potential to succeed is limitless!";
selflo[10] = "You are enough!";
selflo[11] = "You can choose to feel good.";
selflo[12] = "You are enough!";





function self() {
  let selfAffirmations = Math.floor(Math.random() * (selflo.length));
   document.getElementById('selfl').innerHTML = selflo[selfAffirmations];
   setTimeout(startTimer, 5000);
   clearTimeout(setTimeout);
   again();
}

function startTimer(){
  document.getElementById('selfl').style.display ='none';
}

function again(){
  document.getElementById('selfl').style.display ='inline';
}