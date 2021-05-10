export const ROMAN_ONE = "I";
export const ROMAN_FIVE = "V";
export const ROMAN_TEEN = "X";
export const ROMAN_FIFTY = "L";
export const ROMAN_HUNDRED = "C";
export const ROMAN_FIVE_HUNDRED = "D";
export const ROMAN_THOUSAND = "M";
export const ROMAN_MAX = 3999;


const RomanNumerals = {
    toRoman: (decimal: number):string => {
        if (decimal > ROMAN_MAX) {
            decimal = ROMAN_MAX;
        }

        const romans = [];
        let position = 0;

        //console.log('decimal', decimal)
        while (position < 4) {
            const base = Math.pow(10, position);
            const positionValue = (decimal % (base * 10)) / base;

            //console.log({positionValue, position, base});
            switch (position) {
                case 0:
                    if (positionValue < 4) {
                        romans.unshift(ROMAN_ONE.repeat(positionValue));
                    } else if (positionValue >= 5 && positionValue < 9) {
                        romans.unshift(`${ROMAN_FIVE}${ROMAN_ONE.repeat(positionValue - 5)}`);
                    } else {
                        // For 4 and 9 we should avoid adding four IIII
                        romans.unshift(`${ROMAN_ONE}${positionValue === 4 ? ROMAN_FIVE : ROMAN_TEEN}`);
                    }
                break;
                case 1:
                    if (positionValue < 4) {
                        romans.unshift(ROMAN_TEEN.repeat(positionValue));
                    } else if (positionValue >= 5 && positionValue < 9) {
                        romans.unshift(`${ROMAN_FIFTY}${ROMAN_TEEN.repeat(positionValue - 5)}`);
                    } else {
                        // For 4 and 9 we should avoid adding four IIII
                        romans.unshift(`${ROMAN_TEEN}${positionValue === 4 ? ROMAN_FIFTY : ROMAN_HUNDRED}`);
                    }
                break;
            }

            // Remove the value that we process
            decimal -= (positionValue * base);
            // Go to next step
            position++;
        }

        return romans.join('');
    },

    fromRoman: (roman: string):number => {
        return Number(roman);
    }
};

export default RomanNumerals;