/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {
    document.querySelector("#run").addEventListener("click", () => {
        window.lib.getPosts((error, posts) => {
          if (error){
            console.log("ERROR!")
          } else {
            let i = 0
            posts.forEach(post => {
                window.lib.getComments(post.id, (err, comments) => {
                  if (err){
                    console.log("Error!")
                  } else {
                  post.comments = comments;
                  }
                  if (++i === posts.length){
                    console.log(posts)
                  }
                });          
            });
          }
        });
    });
  })();