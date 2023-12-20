
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

// let custom_text_header = `
// <div class="custom-text-header"> <pre>                     __                             ___       __  
//    ____  ____  _____/ /__________  ____ ___  ____  / (_)___  / /__
//   / __ \\/ __ \\/ ___/ __/ ___/ __ \\/ __ '__ \\/ __ \\/ / / __ \\/ //_/
//  / / / / /_/ (__  ) /_/ /  / /_/ / / / / / / /_/ / / / / / / ,&lt;   
// /_/ /_/\\____/____/\\__/_/   \\____/_/ /_/ /_/\\____/_/_/_/ /_/_/|_|  
//                                                                  </pre> </div>
// `;
let custom_text_header = `
<div class="custom-text-header"> <pre>
    __  ____      __         __              _      __          __        
   /  |/  (_)____/ /______ _/ /_____  ____  (_)____/ /   ____ _/ /_  _____
  / /|_/ / / ___/ //_/ __ `/ __/ __ \/ __ \/ / ___/ /   / __ `/ __ \/ ___/
 / /  / / (__  ) ,< / /_/ / /_/ /_/ / / / / / /__/ /___/ /_/ / /_/ (__  ) 
/_/  /_/_/____/_/|_|\__,_/\__/\____/_/ /_/_/\___/_____/\__,_/_.___/____/ 
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
