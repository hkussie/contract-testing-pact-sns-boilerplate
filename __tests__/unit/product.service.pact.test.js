const {
    Matchers, 
    MessageConsumerPact,
    asynchronousBodyHandler 
} = require('@pact-foundation/pact');

describe('event handler', () => {
    describe('this is a sampel', () => {
        it('should return successfully', () =>{
            expect(5).toBe(5);
        });
    })
})

console.log(typeof Matchers);
console.log(typeof MessageConsumerPact);
console.log(typeof asynchronousBodyHandler);