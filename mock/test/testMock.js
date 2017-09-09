var sinon = require('sinon');
var assert = require('assert');


describe('Mocking Array', function() {
  describe('#splice()', function() {
    it('should be called with exact parameters', function() {
      var testArray = [1,2,3];
      var actualIndexResult = testArray.indexOf(3);
      var spliceMock  = sinon.mock(testArray,'splice');

      // You state your success criteria upfront
      spliceMock.expects("splice").once().withExactArgs(2,1);

      testArray.splice(actualIndexResult,1);
      //Different from spy. The last element is never removed from the array
      assert.equal(3, testArray.length);

      spliceMock.verify();      
      spliceMock.restore();


      //Assert the result 

    });
  });
});
