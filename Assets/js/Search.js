
// <div class="profile likes activeuserprofile" >
//   
//   </div>
//  fetch(req).then((resp=>resp.json())
  // data fetcching for user list
  document.addEventListener('DOMContentLoaded',()=>{
    console.log()
      localStorage.setItem('myuniquetockenid',JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs'));
  });
  let key4=localStorage.setItem.myuniquetockenid;
// making object to make the data easy to access

  
  
  //  console.log("enter in eve");
    let token=JSON.parse(localStorage.getItem('myuniquetockenid'));

    const url="https://dummyjson.com/products/1";
 
    let h=new Headers();

    h.append('Athentication',`Bearer ${token}`);
    
   let req= new Request(url,{
       method:'GET',
       mode:'cors',
       headers:{'app-id':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs'}
   
   
      
    });

  console.log(` this is request ${req}`)
  


  // <div class="profile likes activeuserprofile" >
  //   
  //   </div>
  //  fetch(req).then((resp=>resp.json())
    // data fetcching for user list
  

   
  function search(){
    var mainsearch = document.getElementById('button1').innerText;
 
   fetch("https://dummyjson.com/products/search?q=phone") //1
   .then((response) => response.json()) //2
   .then((products) => {
     products=mainsearch; //3

     
   });



   

  }

 