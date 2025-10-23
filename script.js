// Ambil elemen input dan semua lagu
const searchInput = document.getElementById("search");
const tracks = document.querySelectorAll(".track");

// Jalankan fungsi setiap kali user mengetik
searchInput.addEventListener("input", function() {
  const keyword = this.value.toLowerCase();

  tracks.forEach(track => {
    const title = track.querySelector("h3").textContent.toLowerCase();
    if (title.includes(keyword)) {
      track.style.display = "block";
    } else {
      track.style.display = "none";
    }
  });
});
