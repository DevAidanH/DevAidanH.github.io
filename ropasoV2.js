//Aidan Humpidge
//Ropaso v2.0
//01/10/2019

var playerChoice = 0;
var computerChoice = 0;

var score = 0;
var computerScore = 0;

var outputText = "";

//gets the input from button press and uses paramter passing
function input(x)
{
    switch (x)
    {
        case "1":
            playerChoice = 1;
            break;
        case "2":
            playerChoice = 2;
            break;
        case "3":
            playerChoice = 3;
            break;
    }
    play();
}
function play()
{
    computerNumber();
    compare();
}

//picks a value for the computer to use
function computerNumber()
{
    var ranNum = Math.random() * (4 - 1) + 1;
    computerChoice = parseInt(ranNum);
}

//compares the computer value to the user value with a set of rules
function compare()
{
    if (computerChoice == 3 && playerChoice == 2) 
    {
        winner = false;
        outputText = "Scissors beats paper - You lose :(";
        output();
    }
    if (playerChoice == 3 && computerChoice == 2) 
    {
        winner = true;
        outputText = "Scissors beats paper - You win :)";
        output();
    }
    
    if (computerChoice == 1 && playerChoice == 3) 
    {
        winner = false;
        outputText = "Rock beats Scissors - You lose :(";
        output();
    }
    if (playerChoice == 1 && computerChoice == 3) 
    {
        winner = true;
        outputText = "Rock beats Scissors - You win :)";
        output();
    }
    
    if (computerChoice == 2 && playerChoice == 1) 
    {
        winner = false;
        outputText = "Paper beats rock - You lose :(";
        output();
    }
    if (playerChoice == 2 && computerChoice == 1) 
    {
        winner = true;
        outputText = "Paper beats rock - You win :)";
        output();
    }
}

//outputs the current statement to the html
function output() {
    if (winner == true) 
    {
      document.getElementById("winner").innerHTML = outputText;
      score = score + 1;
      document.getElementById("playerScoreCounter").innerHTML = score;
    } 
    else 
    {
      document.getElementById("winner").innerHTML = outputText;
      computerScore = computerScore + 1;
      document.getElementById("computerScoreCounter").innerHTML = computerScore;
    }
  }
  