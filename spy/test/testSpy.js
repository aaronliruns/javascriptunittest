var sinon = require('sinon');
var assert = require('assert');


describe('Spying Array', function() {
  describe('#indexOf()', function() {
    it('should return 2 when the value is present', function() {
      var testArray = [1,2,3];
      //The spy records the call  
      var actualIndexResult = testArray.indexOf(3);
      var spliceSpy  = sinon.spy(testArray,'splice');
      testArray.splice(actualIndexResult,1);
      //Assert the calling behavior
      assert.equal(1, spliceSpy.callCount);
      //Assert the result 
      assert.equal(2, testArray.length);
      spliceSpy.restore();
    });
  });
});
