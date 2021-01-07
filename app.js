const game = ()=>{
 
    let pScore=0;
    let cScore=0;

    const startGame=()=>{


        const playBtn=document.querySelector(".intro button");
        const introScreen=document.querySelector(".intro");
        const match=document.querySelector(".match");


        playBtn.addEventListener('click',()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    }; 

    const playMatch=()=>{
        const options=document.querySelectorAll(".options button");
        const playerHand=document.querySelector(".player-hand");
        const computerHand=document.querySelector(".computer-hand");

        const hands=document.querySelectorAll(".hands img");

        hands.forEach(hand=>{
            hand.addEventListener('animationend',function(){
                this.style.animation='';
            });
        })

        const computerOptions=['rock','scissors','paper'];


        options.forEach(Option => {
            Option.addEventListener('click',function(){
                const computerNumber=Math.floor(Math.random()*3);
                const computerChoice=computerOptions[computerNumber];
                
                //gameplayed
                

                setTimeout(()=>{compareHands(this.textContent,computerChoice);
                    //update images
    
                    playerHand.src = `./${this.textContent}.png`;
                    computerHand.src =`./${computerChoice}.png`;
                },2000);



                //animation
                playerHand.style.animation="shakePlayer 2s ease";
                
                computerHand.style.animation="shakeComputer 2s ease";

            });
        });

        
        

    };

    const updateScore=()=>{
        const playerScore=document.querySelector(".player-score p");
        const computerScore=document.querySelector(".computer-score p");
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
    }



    const compareHands=(playerChoice,computerChoice)=>{
        const winner = document.querySelector(".winner");

        if(playerChoice===computerChoice){
            winner.textContent="It is a tie";
            return
        }

        if(playerChoice==='rock'){
            if(computerChoice==='paper'){
                winner.textContent="Computer wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent="You win";
                pScore++;
                updateScore();                
                return;
            }
        }
        if(playerChoice==='paper'){
            if(computerChoice==='scissors'){
                winner.textContent="Computer wins";
                cScore++;
                updateScore();                
                return;
            }
            else{
                winner.textContent="You win";
                pScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice==='scissors'){
            if(computerChoice==='rock'){
                winner.textContent="Computer wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent="You win";
                pScore++;
                updateScore();                
                return;
            }
        }
    }






startGame();
playMatch();
};


game();