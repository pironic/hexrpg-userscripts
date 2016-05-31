// ==UserScript==
// @name         HEXRPG WizardMath Calculator
// @namespace    https://github.com/pironic/hexrpg-userscripts/
// @version      0.5
// @description  auto win the wizard math game and submit winning answer
// @author       Michael Writhe
// @match        http://www.hexrpg.com/games/wizardmath*
// @updateURL    http://l.writhem.com/20Q1474
// @downloadURL  http://l.writhem.com/20Q1474
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $.getScript("https://cdn.rawgit.com/harshen/jquery-countdownTimer/master/jquery.countdownTimer.min.js");
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
    } else {
        var haystack = $('b').last().text();

        //frogs
        var needle = new RegExp(/(\d|\d.) chocolate frog/);
        var frogs = needle.exec(haystack);
        if (frogs !== null) {
            frogs = frogs[1];
            console.log("frogs: "+frogs);
            if (frogs > 4) {
                $('form').submit();
                $('b').last().html(haystack + " AutoSpending 5 frogs now.");
            } else {
                $('b').last().html(haystack + " Not enough frogs.");
            }
        }

        //minutes
        needle = new RegExp(/(\d|\d.) more minute/);
        var minutes = needle.exec(haystack);
        if (minutes !== null) {
            minutes = parseInt(minutes[1]) + getRandomInt(-1,15);
            console.log("minutes: "+minutes);
            if (minutes > 0) {
                setTimeout(function(){
                    window.location.reload();
                        /* or window.location = window.location.href; */
                }, 1000*60*minutes);
                $('b').last().html(haystack + " We will reload in "+minutes+" minutes.");
                $("<div class=timer></div>").insertAfter($('b').last());
                $(".timer").countdowntimer({
                    minutes : minutes
                });
            }
        }

        //win
        needle = new RegExp(/Congratulations/);
        var win = needle.exec(haystack);
        if (win !== null) {
            minutes = getRandomInt(19,35);
            console.log("minutes: "+minutes);
            setTimeout(function(){
                    window.location = "//www.hexrpg.com/games/wizardmath.php";
                        /* or window.location = window.location.href; */
                }, 1000*60*minutes);
            $('b').last().html(haystack + " We will reload in "+minutes+" minutes");
            $("<div class=timer></div>").insertAfter($('b').last());
            $(".timer").countdowntimer({
                minutes : minutes
            });
        }

    }
}, false);
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})();
