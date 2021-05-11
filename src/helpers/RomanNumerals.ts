export const ROMAN_ONE = "I";
export const ROMAN_FIVE = "V";
export const ROMAN_TEEN = "X";
export const ROMAN_FIFTY = "L";
export const ROMAN_HUNDRED = "C";
export const ROMAN_FIVE_HUNDRED = "D";
export const ROMAN_THOUSAND = "M";
export const ROMAN_MAX = 3999;
export const ROMAN_MAX_SEQUENTIAL_LETTERS = 3;

interface RomanValues {
    [letter: string]: number;
 } 

const RomanNumerals = {
    toRoman: (decimal: number):string => {
        if (decimal > ROMAN_MAX) {
            throw new Error(`The maximum decimal number that can be converted to roman is ${ROMAN_MAX}`);
        }
        if (isNaN(decimal)) {
            throw new Error('Can\'t convert NaN');
        }
        if (decimal < 0) {
            throw new Error('Only positive numbers are allowed');
        }
        if (decimal === 0) {
            throw new Error('Can\'t convert zero');
        }

        const romans = [];
        let position = 0;
        // We will use this pairs of letters to create the number that we want
        const positionLetters = [
            // [lessSignificantLetter, moreSignificantLetter]
            [ROMAN_ONE, ROMAN_FIVE],
            [ROMAN_TEEN, ROMAN_FIFTY],
            [ROMAN_HUNDRED, ROMAN_FIVE_HUNDRED],
            [ROMAN_THOUSAND],
        ]

        while (position < 4) {
            const base = Math.pow(10, position);
            const positionValue = (decimal % (base * 10)) / base;

            const [lessSignificantLetter, moreSignificantLetter] = positionLetters[position];
            const [nextPositionLetter] = positionLetters[position + 1] || []; // The or is for the last position

            if (positionValue < 4) {
                romans.unshift(lessSignificantLetter.repeat(positionValue));
            } else if (positionValue >= 5 && positionValue < 9) {
                romans.unshift(`${moreSignificantLetter}${lessSignificantLetter.repeat(positionValue - 5)}`);
            } else {
                // For 4 and 9 we should avoid adding four the same letters
                romans.unshift(`${lessSignificantLetter}${positionValue === 4 ? moreSignificantLetter : nextPositionLetter}`);
            }

            // Remove the value that we process
            decimal -= (positionValue * base);

            // Go to next step
            position++;
        }

        return romans.join('');
    },

    fromRoman: (roman: string):number => {
        if (roman.length === 0) {
            throw new Error('Empty string');
        }
        // Normalize input
        roman = roman.toUpperCase();

        // We will use value of Roman numbers to determine their order
        const ROMAN_VALE = {
            [ROMAN_ONE]: 1,
            [ROMAN_FIVE]: 5,
            [ROMAN_TEEN]: 10,
            [ROMAN_FIFTY]: 50,
            [ROMAN_HUNDRED]: 100,
            [ROMAN_FIVE_HUNDRED]: 500,
            [ROMAN_THOUSAND]: 1000,
        } as RomanValues;

        let decimal = 0;
        roman.split('').forEach((romanLetter, idx, letters) => {
            let value = ROMAN_VALE[romanLetter];
            const nextRomanLetterIdx = idx + 1;
            const nextRomanLetter = letters[nextRomanLetterIdx];


            if (value === undefined) {
                throw new Error('Invalid Roman number. Unknown letter.');
            } 
            // Check if we have 4 letters in the row
            if (nextRomanLetter && romanLetter.repeat(ROMAN_MAX_SEQUENTIAL_LETTERS) === letters.slice(nextRomanLetterIdx, nextRomanLetterIdx + ROMAN_MAX_SEQUENTIAL_LETTERS).join('')) {
                throw new Error('Invalid Roman number. The maximum sequential letter exceeded.')
            }
            // If next letter more significant that current - decrease the total value by value of current letter
            if (nextRomanLetter && (ROMAN_VALE[nextRomanLetter] > value)) {
                decimal -= value;
            } else {
                decimal += value;
            }

            if (decimal > ROMAN_MAX) {
                throw new Error(`The maximum roman number that can be converted to decimal is ${RomanNumerals.toRoman(ROMAN_MAX)}`);
            }
        });

        return decimal;
    }
};

export default RomanNumerals;