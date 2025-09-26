// Sayfa yüklenince "not-loaded" classını kaldır → animasyonlar başlasın
window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000); // 1 saniye bekleme (isteğe göre ayarlayabilirsin)
});
