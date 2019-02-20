/* 
GAME RULES:

1-The game has 2 players, playing in rounds
2-In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
3-BUT, if the player rolls a 1, all his ROUND score gets lost. After that, its the next players turn 
4-The player con choose to hold, which means that his ROUND score get added to his GLOBAL score. After that, its the next players turn.
5-The first player to reach 100 points in GLOBAL score wins the game.

Later on we will add some extra rules in order to make the game more interesting to code along with.

*/

var currentScore = 0;

document.getElementById('btn-dice').addEventListener("click", function(){

    var diceResult = Math.floor(Math.random() * 6) + 1;

    if(diceResult === 1) {

        currentScore = 0;
    } else {

        currentScore = currentScore + diceResult;
    }

    document.getElementById('current-0').textContent = currentScore;   
});

