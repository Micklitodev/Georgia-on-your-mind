const reviewBtn = document.getElementById("newReview");

reviewBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const rating = document.getElementById("rating").value;
  const content= document.getElementById("reviewContent").value;


  await fetch("/api/review", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rating: rating,
      content: content,
    }),
  }).then((res) => {
    console.log(res);
    if (res.status == 200) {
      window.location.href = `/reviews`;
    }
  });
});