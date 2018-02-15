'use strict';

var ModuleOne = (function(){
    console.log('inside ModuleOne IIFE');

    var test;

    function init(){
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
module.exports = ModuleOne;

