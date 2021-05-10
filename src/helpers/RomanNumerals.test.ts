import RomanNumerals, {
    ROMAN_ONE,
    ROMAN_FIVE,
    ROMAN_TEEN,
    ROMAN_FIFTY,
    ROMAN_HUNDRED,
    ROMAN_FIVE_HUNDRED,
    ROMAN_THOUSAND
} from './RomanNumerals';

describe('RomanNumerals', () => {

    describe('toRoma', () => {
        it('(1) should return "I"', () => {
            expect(RomanNumerals.toRoman(1)).toBe(ROMAN_ONE)
        });
        it('(2) should return "II"', () => {
            expect(RomanNumerals.toRoman(2)).toBe(`${ROMAN_ONE}${ROMAN_ONE}`)
        });
        it('(3) should return "III"', () => {
            expect(RomanNumerals.toRoman(3)).toBe(`${ROMAN_ONE}${ROMAN_ONE}${ROMAN_ONE}`)
        });
        it('(4) should return "IV"', () => {
            expect(RomanNumerals.toRoman(4)).toBe(`${ROMAN_ONE}${ROMAN_FIVE}`)
        });
        it('(5) should return "V"', () => {
            expect(RomanNumerals.toRoman(5)).toBe(ROMAN_FIVE)
        });
        it('(6) should return "VI"', () => {
            expect(RomanNumerals.toRoman(6)).toBe(`${ROMAN_FIVE}${ROMAN_ONE}`)
        });
        it('(8) should return "XIII"', () => {
            expect(RomanNumerals.toRoman(8)).toBe(`${ROMAN_FIVE}${ROMAN_ONE}${ROMAN_ONE}${ROMAN_ONE}`)
        });
        it('(9) should return "IX"', () => {
            expect(RomanNumerals.toRoman(9)).toBe(`${ROMAN_ONE}${ROMAN_TEEN}`)
        });

        it('(10) should return "X"', () => {
            expect(RomanNumerals.toRoman(10)).toBe(ROMAN_TEEN)
        });
        it('(11) should return "XI"', () => {
            expect(RomanNumerals.toRoman(11)).toBe(`${ROMAN_TEEN}${ROMAN_ONE}`)
        });
        it('(13) should return "XIII"', () => {
            expect(RomanNumerals.toRoman(13)).toBe(`${ROMAN_TEEN}${ROMAN_ONE}${ROMAN_ONE}${ROMAN_ONE}`)
        });
        it('(15) should return "XV"', () => {
            expect(RomanNumerals.toRoman(15)).toBe(`${ROMAN_TEEN}${ROMAN_FIVE}`)
        });
        it('(19) should return "XIX"', () => {
            expect(RomanNumerals.toRoman(19)).toBe(`${ROMAN_TEEN}${ROMAN_ONE}${ROMAN_TEEN}`)
        });
        it('(34) should return "XXXIV"', () => {
            expect(RomanNumerals.toRoman(34)).toBe("XXXIV")
        });
        it('(47) should return "XLVII"', () => {
            expect(RomanNumerals.toRoman(47)).toBe("XLVII")
        });
        it('(50) should return "L"', () => {
            expect(RomanNumerals.toRoman(50)).toBe(ROMAN_FIFTY)
        });
        it('(75) should return "LXXV"', () => {
            expect(RomanNumerals.toRoman(75)).toBe("LXXV")
        });
        it('(92) should return "XCII"', () => {
            expect(RomanNumerals.toRoman(92)).toBe("XCII")
        });
        it('(99) should return "XCIX"', () => {
            expect(RomanNumerals.toRoman(99)).toBe("XCIX")
        });


        it('(100) should return "C"', () => {
            expect(RomanNumerals.toRoman(100)).toBe(ROMAN_HUNDRED)
        });
        it('(500) should return "D"', () => {
            expect(RomanNumerals.toRoman(500)).toBe(ROMAN_FIVE_HUNDRED)
        });
        it('(1000) should return "M"', () => {
            expect(RomanNumerals.toRoman(1000)).toBe(ROMAN_THOUSAND)
        });

        it('(2567) should return "M"', () => {
            expect(RomanNumerals.toRoman(2567)).toBe(ROMAN_THOUSAND)
        });
    })
});