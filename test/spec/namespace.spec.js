/*global describe, it */
'use strict';
(function () {
    
    describe('Namespace Testing', function () {
        it('supplies an "App" object', function () {
            expect(App).to.be.an('object');
        });
        it('should prove namespace properties are included', function() {
            expect(App).to.include.keys('Config', 'Models', 'Collections', 'Routers', 'Views', 'Templates');
        });
        it('supplies an "app" object', function () {
            expect(app).to.be.an('object');
        });  
    });

})();