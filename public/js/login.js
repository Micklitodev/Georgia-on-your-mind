// console.log("hittheloginpage");

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  await fetch("/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userName,
      password: password,
    }),
  }).then((res) => {
    console.log(res);
    if (res.status == 200) {
      window.location.href = "/";
    }
  });
});