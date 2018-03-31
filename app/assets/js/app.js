"use strict";

var App = (function(ModuleOne){

  /**** wird vor dem DOM ready ausgeführt ****/

  /**** wird nach dem DOM ready ausgeführt ****/
  function init(){
    console.log('init() of App called');

    ModuleOne.init();
  };

  //public api
  return{
    init: init
  }

})(ModuleOne);

//wenn der DOM vollständig geladen ist init aufrufen
ready(App.init);
