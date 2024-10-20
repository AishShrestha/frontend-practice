const randomNumber =Math.floor(Math.random()*101);
console.log('random: ',randomNumber);
const guessBtn = document.querySelector('#guessBtn');
var count = 0

guessBtn.addEventListener('click', () => {
    const inputNumber = document.querySelector('#guessInput').value;
    const feedback = document.querySelector('.feedbackspan');
    const attempt = document.querySelector('.attemptspan');
    console.log(inputNumber);

    if(isNaN(inputNumber)) {
        alert('Please enter a valid number');
        return;
    }
    if (inputNumber < 0 || inputNumber > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }

    if(randomNumber > inputNumber){
        feedback.textContent = 'Too low! Try again.';
        attempt.textContent = ` ${++count}`;
    }else if(randomNumber < inputNumber){
        feedback.textContent = 'Too high! Try again.';
        attempt.textContent = ` ${++count}`;
    }else{
        feedback.textContent = 'Congratulations! You guessed correctly.';
        attempt.textContent = ` ${++count}`;
        document.querySelector('#guessInput').disabled = true;
        guessBtn.disabled = true;
    }

    const restart = document.querySelector('.restart');
    restart.addEventListener('click', () => {
        const randomNumber =Math.floor(Math.random()*101);
        console.log("new random number: " + randomNumber);
        let inputNumber = document.querySelector('#guessInput');
        let attempt = document.querySelector('.attemptspan');
        let feedback = document.querySelector('.feedbackspan');

        inputNumber.value = '';
        inputNumber.textContent = '';
        attempt.textContent = '';
        feedback.textContent = '';
        console.log(inputNumber);

        guessBtn.disables = false;
        document.querySelector('#guessInput').disabled = false;



      
    });

    



});


