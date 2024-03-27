let getpost = (userid) => {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://jsonplaceholder.typicode.com/posts?userId=" + userid
  );
  request.responseType = "json";
  request.send();
  request.onload = () => {
    if (request.status >= 200 && request.status < 300) {
      let posts = request.response;
      document.getElementById("posts").innerHTML = "";
      for (post of posts) {
        document.getElementById("posts").innerHTML += ` <div id="post">
            <h3>${post.title}</h3>
            <h4>
            ${post.body}
            </h4>
          </div>`;
      }
    }
  };
};
let getpostuser = () => {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.responseType = "json";
  request.send();
  request.onload = () => {
    if (request.status >= 200 && request.status < 300) {
      let users = request.response;

      for (user of users) {
        document.getElementById(
          "users"
        ).innerHTML += `<div id="user" onclick="userclick(${user.id})">
            <h3>${user.name}</h3>
            <h3>${user.email}</h3>
          </div>`;
      }
    }
  };
};
getpostuser();
function userclick(id) {
  getpost(id);
}
