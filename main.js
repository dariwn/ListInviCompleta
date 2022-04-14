document.getElementById("loading").style.display = "none";
document.getElementById("dwload").style.display = "none";
let body = "";

function getAllRequest() {
  document.getElementById("obtinfo").style.display = "none";
  document.getElementById("loading").style.display = "block";
  axios
    .get("https://confirmacion-asistencia-boda.herokuapp.com/api/confirmacion")
    .then(function (response) {
      info = response.data.body;
      // console.log(info);
      const HTMLResponse = document.querySelector("#app");

      for (var i = 0; i < info.length; i++) {
        body += `<tr><td>${info[i].ApellidosFamilia}</td><td>${info[i].AsisAdultos}</td><td>${info[i].AsisNiños}</td></tr>`;
      }
      document.getElementById("app").innerHTML = body;
      document.getElementById("loading").style.display = "none";
      document.getElementById("dwload").style.display = "block";
    })
    .catch(function (error) {
      document.getElementById("loading").style.display = "none";
      console.log(error);
    })
    .then(function () {});
}

function Download() {
  document.getElementById("dwload").style.display = "none";
  window.print();
  document.getElementById("dwload").style.display = "block";
}
