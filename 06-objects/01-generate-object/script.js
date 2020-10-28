/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener ("click", function() {
    // const donnee = { lastname: 'Debroux', firstname: 'Cédric', age: 39, city: "Clavier", country: "Belgique" };
    let me = new Object();
    me.name = "Debroux";
    me.surname = "Cédric";
    me.age = 39;
    me.city = "Clavier";
    me.country = "Belgium";

    console.table(me);

});
})();
