function getComputerChoice()
{
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}
function getHumanChoice()
{
    let human = "";
    while(true)
    {
        human = prompt("What is your attack(rock, paper or scissors)");
        human = human.toLowerCase();
        if(human == "rock" ||human == "paper" ||human == "scissors")
        {
            return human;
        }
        else
        {
            console.log("Invalid Option, try again");
        }
    }
}

var playerScore = 0;
var computerScore = 0;
function playRound(human, computer)
{
    
    const scorePlayer = document.getElementById("resultPlayer");
    const scoreComputer = document.getElementById("resultComputer");
    const gameResult = document.getElementById("GameResult");
    if(human == "rock")
    {
        if(computer == "paper")
        {
            gameResult.textContent =("You lose! Paper beats Rock");
            computerScore++;
        }
        else if(computer == "rock")
        {
            gameResult.textContent =("Draw!");
        }
        else if(computer == "scissors")
        {
            gameResult.textContent =("You win!, rock beats scissors");
            playerScore++;
        }
    }
    else if(human == "paper")
    {
        if(computer == "paper")
        {
            gameResult.textContent =("Draw!");
        }
        else if(computer == "rock")
        {
            
            gameResult.textContent =("You win! Paper beats Rock");
            playerScore++;
        }
        else if(computer == "scissors")
        {
            gameResult.textContent =("You lose!, scissors beats paper");
            computerScore++;
        }
    }
    else if(human == "scissors")
    {
        if(computer == "paper")
        {
            gameResult.textContent =("You win!, scissors beats paper");
            playerScore++;
        }
        else if(computer == "rock")
        {
            gameResult.textContent =("You lose!, rock beats scissors");
            computerScore++;

        }
        else if(computer == "scissors")
        {
            gameResult.textContent =("Draw!");
        }
    }
    if(playerScore>=5)
    {
        document.getElementById('game').style.display = 'none';
        const end = document.createElement("p");
        end.innerText = "You Win!";
        end.style.cssText = 'display:flex; justify-content:center; align-items:center; color: red; font-size:200px;';
        document.body.appendChild(end);

        const again = document.createElement("button");
        again.textContent="Play Again";

        document.body.appendChild(again);

        again.addEventListener("click", function() {
            window.location.href = "RPS.html";
        })
    }
    if(computerScore>=5)
    {
        document.getElementById('game').style.display = 'none';
        const end = document.createElement("p");
        end.innerText = "Computer Wins!";
        end.style.cssText = 'display:flex; justify-content:center; align-items:center; color: red; font-size:200px;';
        const again = document.createElement("button");
        again.textContent="Play Again";

        document.body.appendChild(end);
        document.body.appendChild(again);

        again.addEventListener("click", function() {
            window.location.href = "RPS.html";
        })
    }
    scorePlayer.textContent = (playerScore);
    scoreComputer.textContent = (computerScore);
    return;
}


