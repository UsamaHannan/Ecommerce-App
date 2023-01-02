let useremail = JSON.parse(localStorage.getItem("token")).email;

let userfirstName = JSON.parse(localStorage.getItem("token")).firstName;
let userlastName = JSON.parse(localStorage.getItem("token")).lastName;

let userimage = JSON.parse(localStorage.getItem("token")).image;

var userdata = "",
  userdata = `
    <div class="content m-2">
    
    
   <div class="row">
       <div class="card col-lg-2">
           <div class="text-center card-box">
               <div class="member-card ">
                   <div class="mx-auto"><img src="${userimage}" class="rounded-circle img-thumbnail" alt="profile-image"></div>
                   <div class="">
                       <h4>${userfirstName} ${userlastName}</h4>
                       <p class="text-muted">${useremail}</p>
                   </div>
                 
                  
                   </div>
               </div>
               
           </div>
    `;
document.getElementById("check").innerHTML = userdata;
