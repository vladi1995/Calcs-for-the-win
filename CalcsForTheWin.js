function homeWork() {
    "use strict";
    const prompt = require ("prompt-sync")({sigint: true})

    //Initialize the variables - result stands for final calculation; points for accumulated points
    //on every right answer
    let result = 0;
    let points = 0;
    //Initialize an array of possible actions
    const actions = ['+','-','*'];

    //This function returns a random action - +;-;*
    function randomItem (actions) {
        return actions[Math.floor(Math.random()*actions.length)];
    }

    //This function calculates a and b and returns the result
    function collectData(a,b,randomCommand) {
        switch (randomCommand) {
            case '+':
                return Number(a)+Number(b);
                break;
            case '-':
                return a-b;
                break;
            case '*':
                return a*b;
                break;
        }
    }

    //This loop will be true until wrong answer
    while (true) {
        let a = prompt("Enter a: ");
        let b = prompt("Enter b: ");
        //Check if a and b are numbers
        if (isNaN(a) || isNaN(b)) {
            console.log('a and b must be numbers!');
            continue;
        }
        
        let randomCommand = randomItem(actions);
        result = collectData(a,b,randomCommand);
        let c = prompt(`Enter a ${randomCommand} b = `);
        if (c != result) {
            console.log(`You lose!`);
            console.log(`Points: ${points}`);
            break;
        } else {
            points+=1;
        }
    }
}

//Function invokation
homeWork();