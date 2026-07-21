const ROOT = "";

fetch(ROOT + "/footer.html")
    .then(r => r.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html;
    });