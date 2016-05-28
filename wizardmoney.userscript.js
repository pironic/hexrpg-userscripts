// ==UserScript==
// @name         HEXRPG WizardMoney Calculator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.hexrpg.com/games/wizardmoney.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
window.addEventListener('load', function() {
    // your code here
    var galleon = 0;
    var knut = 0;
    var sickle = 0;
    var space = 0;
    $('td img').each(function() {
        var current = this.src.split("/").pop().slice(0, -4);
        switch(current) {
            case "galleon" :
                galleon++;
                break;
            case "knut":
                knut++;
                break;
            case "sickle":
                sickle++;
                break;
            default:
                space++;
                break;
        }
    });
    $("[name=g]").val(String(galleon));
    $("[name=s]").val(String(sickle));
    $("[name=k]").val(String(knut));
    $('form').submit();
}, false);

})();