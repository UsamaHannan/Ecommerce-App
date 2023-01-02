//username: 'kminchelle',
// password: '0lelplR',

function AccessData() {
  var name1;
  var psw;
  name1 = document.getElementById("name").value;

  psw = document.getElementById("psw").value;

  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: `${name1}`,
      password: `${psw}`,
      // expiresInMins: 60, // optional
    }),
  })
    .then((resp) => {
      return resp.json();
    })
    .then((elements) => {
      console.log(elements);
      alert(" successfully login");

      localStorage.setItem("token", JSON.stringify(elements));
      window.location.href = "Dashboard.html";
    })
    .catch((error) => {
      alert("error: " + error.message);
    });
}
