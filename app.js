document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("search-btn");
    const input = document.getElementById("search-input");
    const result = document.getElementById("result")

    function search(){
        const query = input.value.trim();
        const url = "superheroes.php?query=" + encodeURIComponent(query);
    
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("Network error");
        return response.text();
      })
      .then(data => {
        result.innerHTML = data;
      })
      .catch(error => {
        result.innerHTML = '<p class="not-found">Something went wrong.</p>';
        console.error(error);
      });
    }
  
    button.addEventListener("click",search); 
    input.addEventListener("keydown", e => {
        if (e.key === "Enter") search();
      });
    });
      