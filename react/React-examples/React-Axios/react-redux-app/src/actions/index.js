export const MULTIPLY_BY_TWO = 'MULTIPLY_BY_TWO';
export const MULTIPLY_BY_FIVE = 'MULTIPLY_BY_FIVE';

export const multiplyByTwo = (value) => {
    console.log('In action' + value)
    const two = {
        type: MULTIPLY_BY_TWO,
        twoVal : value
    }
    return two;
}

export const multiplyByFive = (value) => {
    return {
        type: MULTIPLY_BY_FIVE,
        fiveVal : value
    }
}