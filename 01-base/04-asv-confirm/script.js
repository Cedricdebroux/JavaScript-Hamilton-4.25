/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var age, gender, city, question;
    age = prompt("quel âges avez-vous ");
    gender = prompt("quel est votre genre");
    city = prompt("dans quelle ville vivez-vous"); 
    question = confirm("Vous êtes bien une personne de sexe " + gender + "de " + age + "ans et vivant à " +city );
    if (question == false){
        age = prompt("quel âges avez-vous ");
        gender = prompt("quel est votre genre");
        city = prompt("dans quelle ville vivez-vous"); 
        question = confirm("Vous êtes bien une personne de sexe " + gender + "de " + age + "ans et vivant à " +city );
    }
})();
