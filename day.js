const dayf = []
dayf[0] = "Everyday be more mindful of all the small blessings that you should be thankful for.";
dayf[1] = "Today free yourself from destructive fears and doubts.";
dayf[2] = "Today don't let what other people do effect you. What matters is how you choose to react to and what you choose to believe about yourself."
dayf[3] = "Today, focus on compassion. You will naturally relate to others with love and understanding.";
dayf[4] = "The hard days are what make you stronger, keep going!";
dayf[5] = "It is easy to affirm others than it is ourselves, but we need to remember to encourage ourselves as-well.";
dayf[6] = "Be optimistic because today is a new day!";
dayf[7] = "You are valued and helpful.";
dayf[8] = "You are responsible for yourself so start there."
dayf[9] = "The chance to love and be loved exists no matter where you are."
dayf[10] = "Courage starts with showing up and letting ourselves be seen."
dayf[11] = "Are you good enough? YES YOU ARE."
dayf[12] = "Your life is about to be incredible."
dayf[13] = "Do the things you think you cannot do."
dayf[14] = "The secret of attraction is to love yourself."
dayf[15] = "Good riddance to the decisions that don't support self-care, self-value, and self-worth."
dayf[16] = "Root for yourself because you deserve it and while you're at it root for those around you, too."
dayf[17] = "We must accept finite disappointment, but never lose infinite hope."
dayf[18] = "Your life is already a miracle of chances waiting for you to shape its destiny."
dayf[19] = "If you think small, your world will be small. If you think big, your world will be big."
dayf[20] = "Failure is just another way to learn how to do something right."
dayf[21] = "You are the sum of you commitments."


function day() {
 let dayAffirmations = Math.floor(Math.random() * (dayf.length));
  document.getElementById('dayA').innerHTML = dayf[dayAffirmations];
  setTimeout(start,10000);
  clearTimeout(setTimeout);
  daytwo();
}

function start(){
document.getElementById('dayA').style.display ='none';
}

function daytwo(){
document.getElementById('dayA').style.display ='inline';
}