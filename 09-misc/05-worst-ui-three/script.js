/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let result1 = document.getElementById("part-one");
    let result2 = document.getElementById("part-two");
    let result3 = document.getElementById("part-three");
    let result4 = document.getElementById("part-four");
    let output = document.getElementById("target");
    let onclick = document.getElementById("fix-part-one");
    let onclick2 = document.getElementById("fix-part-two");
    let onclick3 = document.getElementById("fix-part-three");
    let onclick4 = document.getElementById("fix-part-four");
    let max = result1.getAttribute("data-max");
    let min = result1.getAttribute("data-min");
    let max2 = result2.getAttribute("data-max"); //data max result 2 à 4
    let min2 = result2.getAttribute("data-min"); //data min result 2 à 4
    //premier
    let time = setInterval(function(){
        if(result1.value < max){
            let count = parseInt(result1.value) + 1;
            result1.value = count;
        }
        else(result1.value = min)
    }, 1);

    onclick.addEventListener("click", function(){
        clearInterval(time);
        result1 = "+32" + result1.value;
        output.innerHTML = result1 + min2 + min2 + min2;
    });
    
    //deuxième
    let time2 = setInterval(function(){
        if(result2.value < max2){
            let count = parseInt(result2.value) + 1;
            result2.value = count;
        }
        else(result2.value = min2)
    }, 5);
    onclick2.addEventListener("click", function(){
        clearInterval(time2);
        result2 = result2.value;
        output.innerHTML = result1 + result2 + min2 + min2;
    })
    //troisième
    let time3 = setInterval(function(){
        if(result3.value < max2){
            let count = parseInt(result3.value) + 1;
            result3.value = count;
        }
        else(result3.value = min2)
    }, 6);
    onclick3.addEventListener("click", function(){
        clearInterval(time3);
        result3 = result3.value;
        output.innerHTML = result1 + result2 + result3 + min2;
    })
    //quatrième
    let time4 = setInterval(function(){
        if(result4.value < max2){
            let count = parseInt(result4.value) + 1;
            result4.value = count;
        }
        else(result4.value = min2)
    }, 7);
    onclick4.addEventListener("click", function(){
        clearInterval(time4);
        result4 = result4.value;
        output.innerHTML = result1 + result2 + result3 + result4;
    })
   // your code here

})();