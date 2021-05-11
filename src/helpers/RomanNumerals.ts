export const ROMAN_ONE = "I";
export const ROMAN_FIVE = "V";
export const ROMAN_TEEN = "X";
export const ROMAN_FIFTY = "L";
export const ROMAN_HUNDRED = "C";
export const ROMAN_FIVE_HUNDRED = "D";
export const ROMAN_THOUSAND = "M";
export const ROMAN_MAX = 3999;

interface RomanValues {
    [letter: string]: number;
 } 

const RomanNumerals = {
    toRoman: (decimal: number):string => {
        if (decimal > ROMAN_MAX) {
            decimal = ROMAN_MAX;
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

            // If next letter more significant that current - decrease the total value by value of current letter
            if (letters[idx + 1] && (ROMAN_VALE[letters[idx + 1]] > value)) {
                decimal -= value;
            } else {
                decimal += value;
            }
        });

        return decimal;
    }
};

export default RomanNumerals;