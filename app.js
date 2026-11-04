document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("search-btn");
    
    button.addEventListener("click", () => {
      fetch("superhereos.php")
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error("Error:", error));
    });
});