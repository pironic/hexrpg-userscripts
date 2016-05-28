// ==UserScript==
// @name         HEXRPG WizardMath Calculator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.hexrpg.com/games/wizardmath.php
// @updateURL    http://bit.ly/1XFuC8f
// @downloadURL  http://bit.ly/1XFuC8f
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