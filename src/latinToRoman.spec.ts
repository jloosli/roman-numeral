import { latinToRoman } from './';
describe("test latinToRoman function", () => {
    it('should return a string', function () {
        const result = latinToRoman(1);
        expect(typeof result).toBe('string')
    });
});