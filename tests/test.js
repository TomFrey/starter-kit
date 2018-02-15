var assert = require('chai').assert;
var expect = require('chai').expect;

var ModuleOne = require('../assets/js/modules/moduleOne.js');

describe('moduleOne', function () {
    it('test sollte auf "default value" gesetzt werden', function () {
        var initialValue = ModuleOne.init();
        expect(initialValue).equals('defaultValue');
    });
});