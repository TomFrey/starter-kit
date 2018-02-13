'use strict';

var ModuleOne = (function(){
    console.log('inside ModuleOne IIFE');

    var test;

    function init(){
        test = 'defaultValue';
        //hier kommt die Funktionalität von ModuleOne...
    }

    //public api
    return {
        init: init
    };
})();
