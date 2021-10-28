const expect = require('chai').expect;
const index = require('../index');

describe('Array', () => {
    describe( '#indexOf()', () => {
        it('should return -1 when the value is not present', () =>  {
            expect(index.arrayIndex([1,2,3], 4)).to.equal(-1);
        });
    });
});
