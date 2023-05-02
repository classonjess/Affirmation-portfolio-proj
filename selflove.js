
const selflo = []
selflo[0] = "Give yourself permission to-do what is right for you.";
selflo[1] = "Allow yourself to be who you are without judgement.";
selflo[2] = "You make a difference in the world by simply existing in it."
selflo[3] = "You are allowed to ask for what you want and need.";
selflo[4] = "You are loved and worthy";
selflo[5] = "You are more than what your circumstances dictate.";



function self() {
 let selfAffirmations = Math.floor(Math.random() * (selflo.length));
  document.getElementById('selfl').innerHTML = selflo[selfAffirmations];
  
  setTimeout(() => {
    const text =document.getElementById('selfl');
    text.style.display = 'none';
  }, 3000)
  
};

