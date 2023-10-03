const {
    Matchers, 
    MessageConsumerPact,
    asynchronousBodyHandler 
} = require('@pact-foundation/pact');
const { like, term } = Matchers;
const path = require('path');


describe('event handler', () => {
    const messagePact = new MessageConsumerPact({
        consumer: "example-consumer-service", 
        dir: path.resolve(process.cwd(), "pacts"),
        pactfileWriteMode: "update",
        provider: process.env.PACT_PROVIDER
            ? process.env.PACT_PROVIDER
            : "example-consumer-service",
        logLevel: "info",
    });
    describe('this is a sample', () => {
        it('accepts a sample event', () => {

        });

        it('should return successfully', () =>{
            expect(5).toBe(5);
        });
    })
})

/*
console.log(typeof Matchers);
console.log(typeof MessageConsumerPact);
console.log(typeof asynchronousBodyHandler);
*/