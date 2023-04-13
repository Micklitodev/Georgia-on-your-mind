const updatebtn = document.querySelectorAll(".updatebtn");

for (let update of updatebtn) {
  update.addEventListener("click", async (e) => {
    e.preventDefault();

    update.style.cssText = "display: none";
    resolveData(e.target.id);
  });
}

const resolveData = (eventID) => {
  const url = window.location.href;
  const data = url.split("/");
  const park_id = data[data.length - 1];

  const updateBtn = document.getElementById(eventID);
  const parent = updateBtn.parentNode;
  const form = parent.querySelector(".updateform");
  form.style.display = "block";

  const newBtn = form.querySelector(".inputUpdateFields");

  newBtn.addEventListener("click", async () => {
    const rating = form.querySelector("#updatepostsub").value;
    const content = form.querySelector("#updatepostdescr").value;
    const review_id = eventID;

    await fetch("/api/updaterev", {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: rating,
        content: content,
        rev_id: review_id,
      }),
    }).then((res) => {
      console.log(res);
      if (res.status == 200) {
        window.location.href = `/park/${park_id}`;
      }
    });
  });
};
