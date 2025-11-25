const buttons = document.querySelectorAll(".category-btn");
const cards = document.querySelectorAll(".project-item");
const searchBox = document.getElementById("searchBox");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    
    // 1. Highlight tombol aktif
    buttons.forEach(btn => {
      btn.classList.remove("bg-cyan-500", "text-black");
      btn.classList.add("bg-gray-800", "text-cyan-300");
    });

    button.classList.add("bg-cyan-500", "text-black");
    button.classList.remove("bg-gray-800", "text-cyan-300");
    
    // 2. Filter project sesuai category
    const category = button.getAttribute("data-category");
    cards.forEach(card => {
      if (category === "all" || card.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
    
    // 3. Reset search box
    searchBox.value = '';
  });
});

// 4. Search filter
searchBox.addEventListener("input", function() {
  let query = this.value.toLowerCase();
  cards.forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(query) ? "block" : "none";
  });
  // Hapus highlight tombol ketika search
  buttons.forEach(btn => {
    btn.classList.remove("bg-cyan-500", "text-black");
    btn.classList.add("bg-gray-800", "text-cyan-300");
  });
});