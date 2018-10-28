// define variables for wins, losses, random 
//..number generated/target score, user score, crystal random values. 
var currentScore = 0;
var winCounter = 0;
var lossCounter = 0;
var targetScore = 0;
var crystalBtn = $('.crystalButton');







//Starting game conditions.
function startGame(){
    currentScore = 0;
    $('#scoreBox').text(currentScore);

    $('.alert').addClass('modal');

    $('#wins').text(winCounter);
    $('#losses').text(lossCounter);

    // generate random number at start of game b/t 19 and 120
    targetScore = Math.floor(Math.random() * (120 - 19 +1)  + 19);
        console.log("target score is", targetScore);
        $('#scoreTarget').text(targetScore);

    // Fill Arr: have crystals generate random number b/t 1 and 12
    var buttonValues = [];
    for (var i = 0; i < 4; i++) {
        buttonValues.push(Math.floor(Math.random() * (12 - 1) +1));
        console.log(buttonValues);
    }
        $('#button1').attr('value', buttonValues[0]);

        $('#button2').attr('value', buttonValues[1]);

        $('#button3').attr('value', buttonValues[2]);

        $('#button4').attr('value', buttonValues[3]); 

}
startGame();









//Play game conditions.
var playGame = function(){

    currentScore = currentScore + (Number($(this).attr('value')));
    $('#scoreBox').text(currentScore);
    
    //if current core = target score
    if  (currentScore === targetScore){
        $('#scoreBox').text(currentScore)
        winCounter++;
        $('#wins').text(winCounter);

        //modal relays "you win"
        $('.modal').removeClass('modal');
        $('#winloss').text('You Win!'); 
    }
    else if (currentScore > targetScore){
        $('#scoreBox').text(currentScore);
        lossCounter++;
        $('#losses').text(lossCounter);

        //show "you lose".
        $('.modal').removeClass('modal');
        $('#winloss').text('Oh No! Your Score Exceeded the Target Score.');
    }
    else {
        //repeat and play another time
    }
}


//on-click for crystal buttons.
$('.crystalButton').on('click', playGame);
//on-click modal button restarts game.
$('.btn-success').on('click', startGame);










    //check win if current score = target score.


    //player wins if their score matches random number 

    //player loses if score exceeds random number

    //game restarts when player wins or loses

    //game restarts with new random number and new random numbers assigned to crystals
    //.. user score is reset to 0.

    //score showing number of wins and losses