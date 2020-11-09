/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (function() {
    // let stor = parseInt(document.getElementById("target").innerHTML);
    // let count = localStorage.getItem("stor");
    // let inc = document.getElementById("increment");
    // inc.addEventListener("click", function(){
    // document.getElementById("target").innerHTML = ++stor;   
// });  
    // if(localStorage != stor) {
        // if(count != 1) {
          // count = parseInt(count);
        // };
        // count++;
        // localStorage.setItem("#target",count);
        // document.getElementsByClassName("counter").innerHTML = count;
      //  }; 
// })();
(function() {
  let tvalue = localStorage.getItem("count");
  let target = document.getElementById("target")
  let button = document.getElementById("increment")
  target.innerText = tvalue;
  button.addEventListener("click", function(){
      tvalue++
      target.innerText = tvalue;
      localStorage.setItem("count", tvalue);
  }
)
})();