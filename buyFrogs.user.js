// ==UserScript==
// @name         HEXRPG Buy multiple frogs
// @namespace    https://github.com/pironic/hexrpg-userscripts/
// @version      0.1
// @description  Prompt the user to buy frogs if found on a store.
// @author       Michael Writhe
// @match        http://www.hexrpg.com/store/store.*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        var link = $('a[href*="item=190&"]');
        // var needle = new RegExp(/(Chocolate Frog<br>\n.*\(\d{1,4} in stock\))/);
        // var thread = '<a href="#frog" onclick="">$1</a>';
        // $('tr').last().html(function(index,html){
        //     return html.replace(needle,thread);
        // });

        link.attr('onclick','buyFrogs()');
        console.log(link);

        function buyFrogs() {
            var link = $('a[href*="item=190&"]');
            var haystack = $('tr').last().text();
            var needle = new RegExp(/Chocolate Frog\n.*\((\d{1,4}) in stock\)/);
            var qty = needle.exec(haystack);
            if (qty !== null) {
                var frogs = qty[1];
                var desired = parseInt(prompt("We found some Chocolate frogs for sale on this store. Enter a number you would like to buy, there are "+frogs+" available.", "0"), 10);
                if (desired > frogs)
                    desired = frogs;

                if (desired > 0) {
                    for (i = desired; i > 1; i--) {
                        //haystack.replace(/Chocolate Frog\n.*\((\d{1,4}) in stock\)/,"()"i);
                        $.get( link.attr('href') );
                    }
                    setTimeout(function(){ window.location.href = link.attr('href'); }, 5000);
                }
            }
        }

        var script = document.createElement('script');
        script.appendChild(document.createTextNode('('+ buyFrogs +')();'));
        (document.body || document.head || document.documentElement).appendChild(script);
    });
})();

