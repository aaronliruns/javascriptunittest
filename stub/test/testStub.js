let sinon = require('sinon');
let assert = require('assert');
let jsdom = require("jsdom");
let { JSDOM } = jsdom;
let { window } = new JSDOM(`<!DOCTYPE html>`);
let $ = require('jquery')(window);

function saveUser(user, callback) {
  $.post('/users', {
    first: user.firstname,
    last: user.lastname
  }, callback);

}

describe('saveUser', function() {
  it('should call callback after saving', function() {

    //We'll stub $.post so a request is not sent
    var post = sinon.stub($, 'post');
    //post.yields();//Causes the stub to call the first callback it receives with the provided arguments (if any).
    post.callsArg(2);//causes the stub to call the third argument as a callback.

    //We can use a spy as the callback so it's easy to verify
    var callback = sinon.spy();

    saveUser({ firstname: 'Han', lastname: 'Solo' }, callback);

    post.restore();
    sinon.assert.calledOnce(callback);
  });
});