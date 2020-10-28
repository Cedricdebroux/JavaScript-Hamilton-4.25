/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click" , function(){
        let password = document.getElementById("pass-one").value;
        let confirmPassword = document.getElementById("pass-two").value;
        if (password === confirmPassword) {
            console.log("Passwords match.");
        }
        else{
            document.getElementById("pass-one").style.borderColor = "red";
            document.getElementById("pass-two").style.borderColor = "red";
        }
    
    });

    // your code here

})();
