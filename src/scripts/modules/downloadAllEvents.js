export default () => {
  const downloadAllBtn = document.getElementById("download-all");
  downloadAllBtn.addEventListener("click", (ev) => {
    let rows = [
      ["Subject", "Start Date", "End Date", "All Day Event", "Description"],
    ];

    [...document.getElementsByClassName("result-item")].forEach((event) => {
      if (event.querySelector(".event-title")) {
        rows.push([
          event.querySelector(".event-title").innerText,
          event.dataset.startDate,
          event.dataset.endDate,
          "true",
          event.querySelector(".event-description").innerText,
        ]);
      }
    });

    const csv =
      "data:text/csv;charset=utf-8," +
      rows.map((row) => row.map(JSON.stringify).join(",")).join("\n");

    const csvEncoded = encodeURI(csv);
    window.open(csvEncoded);
  });
};
