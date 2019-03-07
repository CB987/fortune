const fortuneButton = document.querySelector('[data-fortune-button]');
const fortuneOutput = document.querySelector('[data-fortune-output]');

let fortune = ["Truth has no special time of its own.  Its hour is now -- always.\n\t\t-- Albert Schweitzer", "With listening comes wisdom, with speaking repentance.", "The older a man gets, the farther he had to walk to school as a boy.", "There is nothing stranger in a strange land than the stranger who comes\nto visit.", "Look!  Before our very eyes, the future is becoming the past.", "To err is humor."];

let i = 0;

function getFortune() {
    // when user clicks button, show fortune
    fortuneOutput.textContent = fortune[i];
    if (i === fortune.length - 1) {
        i = 0;
    } else {
        i++;
    }
}

fortuneButton.addEventListener('click', getFortune);