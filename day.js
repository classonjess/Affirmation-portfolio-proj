const dayf = []
dayf[0] = "Everyday you will be more mindful of all the small blessings that you should be thankful for.";
dayf[1] = "Today free yourself from destructive fears and doubts.";
dayf[2] = "Today don't let what other people do effect you. What matters is how you choose to react to and what you choose to believe about yourself."
dayf[3] = "Today, focus on compassion. You will naturally relate to others with love and understanding.";
dayf[4] = "The hard days are what make you stronger, keep going!";
dayf[5] = "It is easy to affirm others than it is ourselves, but we need to remember to encourage ourselves as-well.";
dayf[6] = "Be optimistic because today is a new day!";
dayf[7] = "You are valued and helpful.";
dayf[8] = "You are responsible for yourself and you start there."


function day() {
 let dayAffirmations = Math.floor(Math.random() * (dayf.length));
  document.getElementById('dayA').innerHTML = dayf[dayAffirmations];
  setTimeout(start, 3000);
  clearTimeout(setTimeout);
  daytwo();
}

function start(){
document.getElementById('dayA').style.display ='none';
}

function daytwo(){
document.getElementById('dayA').style.display ='inline';
}