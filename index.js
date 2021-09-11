
var readlineSync = require('readline-sync');
var score=0
var userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + userName + '!');

function game(q,a)
{ 
  var myans=readlineSync.question(q);
  if(myans===a)
  {
       console.log('You are right');
       score+=1;
  }
  else
  {
          console.log('You are wrong');
          score-=1;
  }
}

game("Who won the ICC Champions Trophy in 2013 ","India");
game("How many times did India go up to the Semi Final of ICC World Cup? ","4");


game(" Who will host the next ICC World Cup in 2023 ","India");

var ques=[{q:' Who is known as Captain Cool ',a:'Mahendra Singh Dhoni'},{q:'Who was the Indian Captain when India won the Cricket World Cup in 1983? ',a:'Kapil Dev'}];

for(var i=0;i<ques.length;i++)
{
  var currq=ques[i];
  game(currq.q,currq.a);
}



console.log("Your Score is: ",score);











