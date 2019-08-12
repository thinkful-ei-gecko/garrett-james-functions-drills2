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