"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM ist vollständig gelanden");

    ModuleOne.init();
});



//wird nur für die Test gebraucht, ist etwas von node.js
if (typeof module !== 'undefined' && module) {
    module.exports.ModuleOne = ModuleOne;
}