// Saat lagu diputar, tampilkan pesan di console
const audios = document.querySelectorAll("audio");

audios.forEach(audio => {
  audio.addEventListener("play", () => {
    console.log("Memutar: " + audio.previousElementSibling.textContent);
  });
});
