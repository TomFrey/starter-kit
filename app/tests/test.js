//var assert = require('chai').assert;
//var expect = require('chai').expect;

//var ModuleOne = require('../assets/js/modules/moduleOne.js');


// Machen wir nur für die node Tests
if (typeof module !== 'undefined' && module) {
  var assert = require('chai').assert;
  var expect = require('chai').expect;

  var ModuleOne = require('../assets/js/modules/moduleOne.js').ModuleOne;
}


describe('moduleOne', function () {
    it('test sollte auf "default value" gesetzt werden', function () {
        var initialValue = ModuleOne.init();
        expect(initialValue).equals('defaultValue');
    });
});
