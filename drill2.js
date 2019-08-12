function jediName(firstName, lastName){
    return `${lastName.slice(0,3)}${firstName.slice(0,2)}`;
}

function beyond(num) {
    if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
        return 'And Beyond!';
    } else if (Number.isFinite(num) && num > 0) {
        return 'To Infinity!';
    } else if (Number.isFinite(num) && num < 0) {
        return 'To Negative Infinity!';
    } else if (num === 0) {
        return 'Staying home...'
    }
}

function decode (word) {
    if (word[0] === 'a') {
        return word[1];
    } else if (word[0] === 'b') {
        return word[2];
    } else if (word[0] === 'c') {
        return word[3];
    } else if (word[0] === 'd') {
        return word[4];
    } else {
        return '';
    }
}

function daysInMonth (month, leapYear) {
    switch (month) {
        case 'february':
            return leapYear ? `${month} has 29 days` : `${month} has 28 days`;
            break;
        case 'september':
        case 'april':
        case 'june':
        case 'november':
            return `${month} has 30 days`;
            break;
        default:
            return `${month} has 31 days`;
    }
}

function rpsGame(num) {
    // 1 = rock
    // 2 = paper
    // 3 = scissors
    if(num < 1 || num > 3) {
        throw new Error('Please choose either 1 2 or 3');
    }
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if(randomNo === num) {
        return 'The game ended in a tie!';
    } else if ((num === 1 & randomNo === 3) || (num === 3 && randomNo === 1)) {
        return 'Rock beats scissors';
    } else if ((num === 2 & randomNo === 3) || (num === 3 && randomNo === 2)) {
        return 'Scissors beats paper';
    } else if ((num === 2 & randomNo === 1) || (num === 1 && randomNo === 2)) {
        return 'Paper beats rock';
    }
}