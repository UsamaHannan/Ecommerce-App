// varaible declaration
let productmain = document.querySelector("#product-main");
//headers configuration for the api fetching
document.addEventListener("DOMContentLoaded", () => {
  console.log();
  localStorage.setItem(
    "myuniquetockenid",
    JSON.stringify(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs"
    )
  );
});
let product3 = localStorage.setItem.myuniquetockenid;
// making object to make the data easy to access
let productobject = {};
let productReq = () => {
  //  console.log("enter in eve");
  let token = JSON.parse(localStorage.getItem("myuniquetockenid"));

  const url = "https://dummyjson.com/products";

  let h = new Headers();

  h.append("Athentication", `Bearer ${token}`);

  let req = new Request(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "app-id":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs",
    },
  });

  fetch(req)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      productobject = data;
      let innerlist = "";

      data.products.map((values) => {
        innerlist += `  
    
       

       
       
            <div class="col">
             
              
              <div class="card m-2" style="width: 16rem;" >
              <img src="${values.thumbnail}" class="card-img-top" alt="...">
              <div class="card-body text-center" contenteditable="true">
                <h5 class="card-title">${values.title}</h5>
                <p class="card-text">${values.description}</p>
                <span class="m-2">$${values.price}</span><br>
                <span class="m-2">${values.brand}</span><br>
                <span class="badge text-bg-dark m-2">${values.category}</span><br>
                  <a href="#" class="btn btn-primary m-2"><i class="fa-solid fa-pen-to-square"></i></a><a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-eye"></i></a><a href="#" class="btn btn-primary m-2"><i class="fa-solid fa-trash"></i></a>
                </div>
              </div>
             
      
      
      
            </div>
           
           
 



    `;
      });

      productmain.innerHTML = innerlist;
    });

  // fething for the user list
};
productReq();
