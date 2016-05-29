// ==UserScript==
// @name         HEXRPG WizardMath Calculator
// @namespace    https://github.com/pironic/hexrpg-userscripts/
// @version      0.3
// @description  auto win the wizard math game and submit winning answer
// @author       Michael Writhe
// @match        http://www.hexrpg.com/games/wizardmath.php
// @updateURL    http://l.writhem.com/20Q1474
// @downloadURL  http://l.writhem.com/20Q1474
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
window.addEventListener('load', function() {
    // your code here
    var total = 0;
    $('form :input').each(function() {
        if(this.name == "nums[]") {
            if (parseInt(this.value) < 10) {
                total += parseInt(this.value);
            }
            console.log(total);
        }
    });
    if (total > 0) {
        $('[name=ans]').val(String(total));
        //alert(total);
        $('form').submit();
    }
}, false);

})();
