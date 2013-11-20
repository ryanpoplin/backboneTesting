/*global describe, it */
'use strict';
(function () {
    
    describe('library testing', function () {
        describe('chai', function () {
            it('check for equality using "expect"', function () {
            	expect(helloJsHacker()).to.equal("Poplinr is a JS hacker...");
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
    
    // Where the hell does 'done()' come from? 
    describe('timing testing', function() {
    	it('should be a quick procedure', function(done) {
    		expect('hi').to.equal('hi');
    		done();
    	});	    	
    	it('should be a semi-quick procedure', function(done) {
    		setTimeout(function() {
    			expect('hi').to.equal('hi');
    			done();
    		}, 40);
    	});
    	it('should be a slow procedure', function(done) {
    		setTimeout(function() {
    			expect('hi').to.equal('hi');
    			done();
    		}, 100);
    	});
    	it('should be a timeout failure', function(done) {
    		setTimeout(function() {
    			expect('hi').to.equal('hi');
    			done();
    		}, 2001);
    	});
   	});

    // Play with this 'mocha.bail'...
   	mocha.bail(false);
   	describe('testing failures', function() {
   		it('as an assertion should fail', function() {
   			expect('hi').to.equal('goodbye');
   		});
   		it('should fail on unexpected exception', function() {
   			throw new Error();
   		});
   	});

})();