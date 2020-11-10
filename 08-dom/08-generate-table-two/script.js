/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
        let body = document.getElementById("target");
            let tbl = document.createElement("table");
            let tblBody = document.createElement("tbody");
            tbl.appendChild(tblBody); // dans la balise tableau(tbl) ont ajoute la balise tablbody
            body.appendChild(tbl);//dans la balise body ont ajoute la balise tableau(tbl) 
            for (let j = 0; j < 10; j++) {
              let row = document.createElement("tr");
            for (let i = 0; i < 10; i++) {
              let cell = document.createElement("td");
              cell.innerText =  (i+1)+" x "+(j+1)+" = "+(i+1)*(j+1);
              row.appendChild(cell); //appendChild ajouter un élément enfant (ont ajoute des cellule dans les ligne)(dans la boucle car elle doivent se répéter)
              }
              tblBody.appendChild(row);
              //ajouter une ligne dans les cellule
            }
        // your code here
})();


