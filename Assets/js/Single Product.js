// varaible declaration
let singleproduct = document.querySelector("#single-product");
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
let key6 = localStorage.setItem.myuniquetockenid;
// making object to make the data easy to access
let obj5 = {};
let send4Req = () => {
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
      obj5 = data;
      let innerlist = "";
      //  let i=0;

      data.products.map((value) => {
        innerlist = `  
    
       

       
       
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${value.title}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="${value.thumbnail}" alt="" width="450px">
      
      <p>${value.description}</p>
      <span>$${value.price}</span><br><br>
      <span class="badge text-bg-light">${value.category}</span>
      </div>
      <div class="modal-footer ">
       
        <button type="button" class="btn btn-primary ">Add to Cart</button>
      </div>
    </div>
  </div>
</div>



    `;
      });

      singleproduct.innerHTML = innerlist;
    });

  // fething for the user list
};
send4Req();
