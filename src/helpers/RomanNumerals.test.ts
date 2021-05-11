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
    const testScenarios = [
        // [DecimalNumber, RomanNumber]
        [1, ROMAN_ONE],
        [2, `${ROMAN_ONE}${ROMAN_ONE}`],
        [3, `${ROMAN_ONE}${ROMAN_ONE}${ROMAN_ONE}`],
        [4, `${ROMAN_ONE}${ROMAN_FIVE}`],
        [5, ROMAN_FIVE],
        [6, `${ROMAN_FIVE}${ROMAN_ONE}`],
        [7, `${ROMAN_FIVE}${ROMAN_ONE}${ROMAN_ONE}`],
        [8, `${ROMAN_FIVE}${ROMAN_ONE}${ROMAN_ONE}${ROMAN_ONE}`],
        [9, `${ROMAN_ONE}${ROMAN_TEEN}`],
        [10, ROMAN_TEEN],
        [11, `${ROMAN_TEEN}${ROMAN_ONE}`],
        [12, `${ROMAN_TEEN}${ROMAN_ONE}${ROMAN_ONE}`],
        [13, `${ROMAN_TEEN}${ROMAN_ONE}${ROMAN_ONE}${ROMAN_ONE}`],
        [14, `${ROMAN_TEEN}${ROMAN_ONE}${ROMAN_FIVE}`],
        [15, `${ROMAN_TEEN}${ROMAN_FIVE}`],
        [16, `${ROMAN_TEEN}${ROMAN_FIVE}${ROMAN_ONE}`],
        [17, `${ROMAN_TEEN}${ROMAN_FIVE}${ROMAN_ONE}${ROMAN_ONE}`],
        [18, `${ROMAN_TEEN}${ROMAN_FIVE}${ROMAN_ONE}${ROMAN_ONE}${ROMAN_ONE}`],
        [19, `${ROMAN_TEEN}${ROMAN_ONE}${ROMAN_TEEN}`],
        [20, `${ROMAN_TEEN}${ROMAN_TEEN}`],
        [30, `${ROMAN_TEEN}${ROMAN_TEEN}${ROMAN_TEEN}`],
        [34, "XXXIV"],
        [40, "XL"],
        [47, "XLVII"],
        [50, ROMAN_FIFTY],
        [60, "LX"],
        [70, "LXX"],
        [75, "LXXV"],
        [80, "LXXX"],
        [90, "XC"],
        [92, "XCII"],
        [99, "XCIX"],
        [100, ROMAN_HUNDRED],
        [178, "CLXXVII"],
        [200, "CC"],
        [300, "CCC"],
        [400, "CD"],
        [500, ROMAN_FIVE_HUNDRED],
        [600, "DC"],
        [700, "DCC"],
        [735, "DCCXXXV"],
        [800, "DCCC"],
        [900, "CM"],
        [1000, ROMAN_THOUSAND],
        [2001, "MMI"],
        [2149, "MMCXLIX"],
        [2015, "MMXV"],
        [3000, "MMM"],
        [3999, "MMMCMXCIX"],
    ] as [number, string][];

    it('toRoma', () => {
        testScenarios.forEach(([decimal, roman]) => {
            expect(RomanNumerals.toRoman(decimal)).toBe(roman)
        });
    })
});