// ==UserScript==
// @name         HEXRPG WizardMoney Calculator
// @namespace    https://github.com/pironic/hexrpg-userscripts/
// @version      0.3
// @description  auto win the wizard money and submit for you.
// @author       Michael Writhe
// @match        http://www.hexrpg.com/games/wizardmoney.php
// @updateURL    http://l.writhem.com/1NVSZwA
// @downloadURL  http://l.writhem.com/1NVSZwA
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
