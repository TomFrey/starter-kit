'use strict';

var ModuleOne = (function(){
    console.log('inside ModuleOne IIFE');

    var test;

    function init(){
        console.log('init() of ModuleOne called');
        test = 'defaultValue';

        //hier kommt die Funktionalität von ModuleOne...
        return test;
    }

    //public api
    return {
        init: init
    };
})();


//braucht es nur, damit die Tests funktionieren
if (typeof module !== 'undefined' && module) {
  module.exports.ModuleOne = ModuleOne;
}
