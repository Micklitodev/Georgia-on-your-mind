const delbtn = document.querySelectorAll(".delbtn");

for (let del of delbtn) {
  del.addEventListener("click", async (e) => {
    e.preventDefault();

    const rev_id = e.target.id;
    console.log(rev_id);

    const url = window.location.href;
    const data = url.split("/");
    const park_id = data[data.length - 1];

    await fetch("/api/deletereview", {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rev_id: rev_id,
      }),
    }).then((res) => {
      console.log(res);
      if (res.status == 200) {
        window.location.href = `/park/${park_id}`;
      }
    });
  });
}
