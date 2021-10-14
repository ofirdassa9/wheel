function changePage() {
    window.location.replace("index.html")
  }

  function getItems() {
    for (let i = 1; i <= 8; i++) {
        document.getElementById(i).value = localStorage.getItem(i);
    }
  }

function replaceItems() {
    if (typeof(Storage) !== "undefined") {
        for (let i = 1; i <= 8; i++) {
            localStorage.setItem(i, document.getElementById(i).value);
        }
      }
}