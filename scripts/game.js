// retrieve score object from localStorage
        let score = JSON.parse(localStorage.getItem('score')) || {
          userWins: 0,
          draws: 0,
          computerWins: 0
        };
        
        // calling the function to update score on page load
        updateScoreElement();
        
        // a function to randomly select a card for the computer
        function selectConputerCard(){
          const randomNumber = Math.random();
          let computerMove = '';
          
          if(randomNumber >= 0 && randomNumber < 1/3){
            computerMove = 'rock'
          }else if(randomNumber >= 1/3 && randomNumber < 2/3){
            computerMove = 'paper'
          }else{
            computerMove = 'scissors'
          }
          return computerMove;
        }

        // Function to get the winner
        function playGame(userPick){
          let result = '';
          const computerPick = selectConputerCard();

          if(userPick === 'rock'){
            if(computerPick === 'rock'){
              result = 'Draw';
              
            }else if(computerPick === 'paper'){
              result = 'User Wins';
            }else if(computerPick === 'scissors'){
            result = 'Computer Wins';
            }

          }else if(userPick === 'paper'){
            if(computerPick ==='rock'){
              result = 'Computer Wins';
            }else if(computerPick === 'paper'){
              result ='Draw'
            }else if(computerPick === 'scissors'){
              result = 'User Wins';
            }

          }else if(userPick === 'scissors'){
            if(computerPick === 'rock'){
              result = 'User Wins';
            }else if(computerPick === 'paper'){
              result = 'Computer Wins';
            }else if(computerPick === 'scissors'){
              result = 'Draw';
            }
          }

          if(result === 'User Wins'){
            score.userWins += 1
          }else if(result === 'Computer Wins'){
            score.computerWins += 1
          }else if(result === 'Draw'){
            score.draws += 1
          }


          // storing the score into a local storage
          localStorage.setItem('score', JSON.stringify(score));

          // CALLING THE FUNCTION TO UPDATE SCORE IN REAL TIME
          updateScoreElement();
          

          // displaying results on the page
          document.querySelector('.js-result').innerHTML = result;

          // displaying moves on the page

          document.querySelector('.js-move').innerHTML = `  You
          <img src="images/${userPick}-emoji.png" alt="" class="move-icon">
          <img src="images/${computerPick}-emoji.png" alt="" class="move-icon">
          Computer`

        }
      
        // function to udate score
        function updateScoreElement(){
           document.querySelector('.js-score')
           .innerHTML = `Wins: ${score.userWins} draws: ${score.draws} loses: ${score.computerWins}`

        }
    
      // 