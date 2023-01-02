   /*let name1=localStorage.getItem('name')?localStorage.getItem('name'):''
        console.log(name1);
        if(name1=='')
        {
          alert('U need to login first');
          window.location.href="Sign In.html";
        }*/
        function Logout()
        {
          localStorage.removeItem('name');
          localStorage.removeItem('psw');
          window.location.href="Sign In.html";
        }