/*global describe, it */
'use strict';
(function () {

    window.hello = function() {
        return "Web Devs!";
    };

    function helloJsHacker() {
        return "You're JS hackers...";
    }
    
    describe('Library Testing', function () {
        describe('chai', function () {
            it('check for equality using "expect"', function () {
            	expect(helloJsHacker()).to.equal("You're JS hackers...");
            });
        });
        describe('sinon', function() {
        	it('should report a spy called', function() {
        		var yoSpy = sinon.spy(window, 'hello');
        		expect(yoSpy.called).to.be.false;
        		hello();
        		expect(yoSpy.called).to.be.true;
        		hello.restore();
        	});
        });
    });

    // Play with this 'mocha.bail'...
   	/*mocha.bail(false);
   	describe('testing failures', function() {
   		it('as an assertion should fail', function() {
   			expect('hi').to.equal('goodbye');
   		});
   		it('should fail on unexpected exception', function() {
   			throw new Error();
   		});
   	});*/

})();