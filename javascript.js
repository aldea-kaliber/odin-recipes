var randomlinks = [];
randomlinks[0]="recipes/Afritada.html";
randomlinks[1]="recipes/Kaldereta.html";
randomlinks[2]="recipes/Karekare.html";
randomlinks[3]="recipes/Mechado.html";
randomlinks[4]="recipes/Menudo.html";
function randomlink(){
    window.open(randomlinks[Math.floor(Math.random()*randomlinks.length)]);
  }