document.getElementById("actionButton").addEventListener("click", () => {
	// Показываем видео фон
	const video = document.getElementById("backgroundVideo");
	video.classList.remove("hidden"); // Убираем класс, чтобы показать видео
  
	// Убираем фон изначального сайта
	document.body.style.background = "none";
  
	// Запускаем музыку
	const music = document.getElementById("backgroundMusic");
	music.volume = 1.0; // Максимальная громкость
	music.play();
  });
  