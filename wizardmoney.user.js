// ==UserScript==
// @name         HEXRPG WizardMoney Calculator
// @namespace    https://github.com/pironic/hexrpg-userscripts/
// @version      0.7
// @description  auto win the wizard money and submit for you.
// @author       Michael Writhe
// @match        http://www.hexrpg.com/games/wizardmoney.php
// @match        http://www.hexrpg.com/games/
// @updateURL    http://l.writhem.com/1NVSZwA
// @downloadURL  http://l.writhem.com/1NVSZwA
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
    $.getScript("https://cdn.rawgit.com/harshen/jquery-countdownTimer/master/jquery.countdownTimer.min.js");
window.addEventListener('load', function() {
    if(document.location == "http://www.hexrpg.com/games/"){
        setTimeout(function(){
            // reload back to wizardmoney in 10 seconds.
            console.log("navigating back to wizardmoney now...");
            //window.location.replace("http://www.hexrpg.com/games/wizardmoney.php");
        }, 10000);
    } else {
        // we are on the wizardmoney page.
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
        if (galleon+sickle+knut > 0) {
            $('form').submit();
        } else {
            var haystack = $('p').text();
            var needle = new RegExp(/(\d.*) more minute/);
            var minutes = needle.exec(haystack);
            if (minutes !== null) {
                minutes = parseInt(minutes[1]) + getRandomInt(-1,(parseInt(minutes[1])*0.66));
                console.log("minutes: "+minutes);
                setTimeout(function(){
                    window.location = "//www.hexrpg.com/games/wizardmoney.php";
                    /* or window.location = window.location.href; */
                }, 1000*60*minutes);
                $('p').html(haystack + " We will reload in "+minutes+" minutes");
                $("<div class=timer></div>").insertAfter($('p'));
                $(".timer").countdowntimer({
                    minutes : minutes
                });
            }
        }
    }
}, false);
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})();
