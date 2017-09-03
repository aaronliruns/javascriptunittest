var sinon = require('sinon');
var assert = require('assert');


describe('Spying Array', function() {
  describe('#indexOf()', function() {
    it('should return 2 when the value is present', function() {
      var testArray = [1,2,3];
      //The spy records the call  
      var indexOfSpy = sinon.spy(testArray,'indexOf');
      var actualIndexResult = testArray.indexOf(3);
      //Assert the calling behavior
      assert.equal(1, indexOfSpy.callCount);
      //Assert the result 
      assert.equal(2, actualIndexResult);
    });
  });
});
