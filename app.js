 let score = {
            wins: 0,
            loses: 0,
            ties: 0
        };

        console.log(JSON.parse(localStorage.getItem('score')));

        function updateScore() {
            document.querySelector('.js-score').innerHTML = `wins : ${score.wins}, loses: ${score.loses}, Tie : ${score.ties}`;
        }

        updateScore(); 

        function playergame(playermove) {
            let result = '';
            const computermove = pickcomputermove();
            if (playermove === 'rock') {


                if (computermove === 'rock') {
                    result = 'Tie';
                }
                else if (computermove === 'paper') {
                    result = 'You lose';
                }
                else if (computermove === 'scissors') {
                    result = 'You win';
                }


            }

            else if (playermove === 'paper') {
                randomnumber = Math.random();



                if (computermove === 'rock') {
                    result = 'You win';
                }
                else if (computermove === 'paper') {
                    result = 'Tie';
                }
                else if (computermove === 'scissors') {
                    result = 'You lose';
                }


            }
            else if (playermove === 'scissors') {

                if (computermove === 'rock') {
                    result = 'You lose';
                }
                else if (computermove === 'paper') {
                    result = 'You win';
                }
                else if (computermove === 'scissors') {
                    result = 'Tie';
                }
            }


            if (result === 'You win') {
                score.wins += 1;
            }
            else if (result === 'You lose') {
                score.loses += 1;
            }
            else if (result === 'Tie') {
                score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));
            updateScore(); // Update display after game

         document.querySelector('.js-result').innerHTML = result;
            //   alert(`You picked ${playermove}.Computer picked ${computermove}. ${result}
            // );
      document.querySelector('.js-move').innerHTML = ` You
            <img src="${playermove}.png" class="move-rock1">
            <img src="${computermove}.png" class="move-paper1">
            Computer`;
        }
        function pickcomputermove() {
            const randomnumber = Math.random();
            let computermove = '';

            if (randomnumber >= 0 && randomnumber < 1 / 3) {
                computermove = 'rock';
            }
            else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
                computermove = 'paper';
            }
            else if (randomnumber >= 2 / 3 && randomnumber < 1) {
                computermove = 'scissors';
            }
            return computermove;
        }