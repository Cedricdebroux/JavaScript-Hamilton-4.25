/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let result1 = parseInt(document.getElementById("part-one").innerHTML);
    let result2 = parseInt(document.getElementById("part-two").innerHTML);
    let result3 = parseInt(document.getElementById("part-three").innerHTML);
    let result4 = parseInt(document.getElementById("part-four").innerHTML);
    let output = document.getElementById("target");
    if (result2 < 10){
        result2 = '0' + result2;
    };
    if (result3 < 10){
        result3 = '0' + result3;
    };
    if (result4 < 10){
        result4 = '0' + result4;
    };
    document.getElementById("part-one").addEventListener("click", function(){
        if (result1 < this.getAttribute("data-max")){
        document.getElementById("part-one").innerHTML = ++result1;
                output.innerHTML = "+" + result1 + result2 + result3 + result4;
        };
    });
    document.getElementById("part-two").addEventListener("click", function(){
        if (result2 < this.getAttribute("data-max")){
            document.getElementById("part-two").innerHTML = ++result2;
            if (result2 < 10){
                result2 = '0' + result2;
            };
            output.innerHTML = "+" + result1 + result2 + result3 + result4;
            };
    });
    document.getElementById("part-three").addEventListener("click", function(){
        if (result3 < this.getAttribute("data-max")){
            document.getElementById("part-three").innerHTML = ++result3;
            if (result3 < 10){
                result3 = '0' + result3;
            };
            output.innerHTML = "+" + result1 + result2 + result3 + result4;
            };
    });
    document.getElementById("part-four").addEventListener("click", function(){
            
        if (result4 < this.getAttribute("data-max")){
            document.getElementById("part-four").innerHTML = ++result4;
            if (result4 < 10){
                result4 = '0' + result4;
            };
            output.innerHTML = "+" + result1 + result2 + result3 + result4;
            };
    });
    
})();
// (function() {
    // let result1 = parseInt(document.getElementById("part-one").innerHTML)-1;
    // let result2 = parseInt(document.getElementById("part-two").innerHTML)-1;
    // let result3 = parseInt(document.getElementById("part-three").innerHTML)-1;
    // let result4 = parseInt(document.getElementById("part-four").innerHTML)-1;
    // let output = document.getElementById("target");
    // let table = [];
    // table.length = 4;
    // document.getElementById("part-one").addEventListener("click", function(){
        // if (result1 < this.getAttribute("data-max")){
            // result1 += 1;
            // table[0] = "+" + result1;
            // target.innerHTML = table;
        // }; 
    // });
    // document.getElementById("part-two").addEventListener("click", function(){
        // if (result2 < this.getAttribute("data-max")){
            // result2 += 1;
            // table[1] = "0" + result2;
            // target.innerHTML = table;
        // }; 
        // 
    // });
    // document.getElementById("part-three").addEventListener("click", function(){
        // if (result3 < this.getAttribute("data-max")){
            // result3 += 1;
            // table[2] = "0" + result3;
            // target.innerHTML = table;
        // }; 
    // });
    // document.getElementById("part-four").addEventListener("click", function(){
        // if (result4 < this.getAttribute("data-max")){
            // result4 += 1;
            // table[3] = "0" + result4;
            // target.innerHTML = table;
        // }; 
    // });
    // 
// })();
// 