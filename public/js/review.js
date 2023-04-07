const reviewBtn = document.getElementById("newReview");


reviewBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const rating = document.getElementById("rating").value;
  const content= document.getElementById("reviewContent").value;
  const url = window.location.href;
  const data = url.split("/");
  const park_id = data[data.length-1];


  await fetch("/api/newreview", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rating: rating,
      content: content,
      park_id:park_id
    }),
  }).then((res) => {
    console.log(res);
    if (res.status == 200) {
      window.location.href = `/park/${park_id}`;
    }
  });
});