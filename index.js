const linkDiv = document.getElementById("links");

document.addEventListener("DOMContentLoaded", addLinkElement);

function addLinkElement() {
  fetch("./links.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (const iterator of data) {
        const link = document.createElement("a");
        link.className = "btn";
        link.href = iterator.link;
        link.textContent = iterator.title;
        linkDiv.appendChild(link);
      }
    });
}
