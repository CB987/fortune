const fortuneButton = document.querySelector('[data-fortune-button]');
const fortuneOutput = document.querySelector('[data-fortune-output]');
const randomButton = document.querySelector('[data-random]');
const previousFortune = document.querySelector('[data-previous]');

let fortune = ["Truth has no special time of its own.  Its hour is now -- always.\n\t\t-- Albert Schweitzer", "With listening comes wisdom, with speaking repentance.", "The older a man gets, the farther he had to walk to school as a boy.", "There is nothing stranger in a strange land than the stranger who comes\nto visit.", "Look!  Before our very eyes, the future is becoming the past.", "To err is humor."];

let i = 0;

function getFortune() {
    // when user clicks button, show fortune
    if (i === fortune.length - 1) {
        i = 0;
        fortuneOutput.textContent = fortune[i];
    } else {
        i++;
        fortuneOutput.textContent = fortune[i];
    }
}

function showPreviousFortune() {
    // when user clicks previous fortune button, show previous fortune
    if (i === 0) {
        i = fortune.length - 1;
        fortuneOutput.textContent = fortune[i];
    } else {
        i--;
        fortuneOutput.textContent = fortune[i];
    }
}

function randomFortune() {
    // returns number between 0 and 5
    let random = Math.floor(Math.random() * (fortune.length));
    // if random is same as current fortune and is not the last fortune in list
    
    fortuneOutput.textContent = fortune[random];

}

fortuneButton.addEventListener('click', getFortune);
previousFortune.addEventListener('click', showPreviousFortune);
randomButton.addEventListener('click', randomFortune);

