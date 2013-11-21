/*global describe, it */
'use strict';
(function () {
    
    describe('App.Models.Core', function () {
        it('has some defualt values', function () {
            var model = new App.Models.Core();
            expect(model).to.be.ok;
            expect(model.get('title')).to.equal("");
            expect(model.get('text')).to.equal("");
            expect(model.get('createdAt')).to.be.a("Date");
        });
        it('sets passed attrs to the model', function() {
            var model = new App.Models.Core({
                title: "A time slot for 8 A.M. - 9 A.M.",
                text: "We're going to be having some great convos."
            });
            expect(model.get('title')).to.equal('A time slot for 8 A.M. - 9 A.M.');
            expect(model.get('text')).to.equal("We're going to be having some great convos.");
        });
    });

})();