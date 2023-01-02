// varaible declaration
let sidebarmain = document.querySelector("#sidebar-main");
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
let sidebarkey = localStorage.setItem.myuniquetockenid;
// making object to make the data easy to access
let sidebarcontent = {};
let sidebarReq = () => {
  //  console.log("enter in eve");
  let token = JSON.parse(localStorage.getItem("myuniquetockenid"));

  const url = "https://dummyjson.com/products/categories";

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
      sidebarcontent = data;
      let innerlist = "";

      sidebarcontent.map((value) => {
        innerlist += `  <li class="list-group-item d-flex justify-content-between align-items-center"><a onclick ="categories()" href="">
      ${value}</a>
      <span class="badge bg-primary rounded-pill">2</span>
    </li>
   
    `;
      });

      sidebarmain.innerHTML = innerlist;
    });

  // fething for the user list
};
sidebarReq();

function categories() {
  fetch("https://dummyjson.com/products/category/smartphones")
    .then((res) => res.json())
    .then((data) => {
      obj6 = data;
      let innerlist = "";
      //  let i=0;

      obj6.products.map((value) => {
        innerlist += `

 `;
      });
    });
}
