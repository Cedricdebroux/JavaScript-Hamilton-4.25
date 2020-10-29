/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("pass-one").value;
if (
  str.match(/[a-z]/g) &&
  str.match(/[0-9]/g) &&
  str.match(/[a-z\d{2}]/g) &&
  str.length >= 8
) {
  document.getElementById("validity").innerHTML = "Ok";
} else {
  document.getElementById("validity").innerHTML = "Not ok";
}
})();