/* ==========================================
   1. THEME TOGGLE LOGIC
   ========================================== */
const themeToggleButton = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;
const sunIcon = "&#x2600;"; // ☀️
const moonIcon = "&#x1F319;"; // 🌙

function applyTheme(theme) {
	const isDark = theme === "dark";
	htmlElement.classList.toggle("dark", isDark);

	if (themeToggleButton) {
		themeToggleButton.innerHTML = isDark ? sunIcon : moonIcon;
	}

	// Update the Android/iOS status bar color
	const metaThemeColor = document.querySelector('meta[name="theme-color"]');
	if (metaThemeColor) {
		metaThemeColor.setAttribute("content", isDark ? "#1a1a1a" : "#f8f8f8");
	}

	try {
		localStorage.setItem("theme", theme);
	} catch (e) {
		console.warn("Could not save theme preference.", e);
	}
}

function initializeTheme() {
	let currentTheme = "dark";
	try {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			currentTheme = savedTheme;
		} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
			currentTheme = "light";
		}
	} catch (e) {
		console.warn("Theme init error:", e);
	}
	applyTheme(currentTheme);
}

if (themeToggleButton) {
	themeToggleButton.addEventListener("click", () => {
		const isDark = htmlElement.classList.contains("dark");
		applyTheme(isDark ? "light" : "dark");
	});
}

window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", (e) => {
		if (!localStorage.getItem("theme")) {
			applyTheme(e.matches ? "dark" : "light");
		}
	});

initializeTheme();

/* ==========================================
   2. SLIDESHOW LOGIC
   ========================================== */
const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides-container");
const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");
const slideTriggers = document.querySelectorAll(".slide-nav-trigger");
let currentSlideIndex = 0;
let slideIntervalId = null;
const SLIDE_INTERVAL_DELAY = 5000;

function showSlide(index) {
	if (slides.length === 0) return;
	currentSlideIndex = ((index % slides.length) + slides.length) % slides.length;
	slides.forEach((slide) => slide.classList.remove("active"));
	slides[currentSlideIndex].classList.add("active");
}

function showSlideById(targetId) {
	const index = Array.from(slides).findIndex((s) => s.id === targetId);
	if (index !== -1) showSlide(index);
}

function nextSlide() {
	showSlide(currentSlideIndex + 1);
}
function prevSlide() {
	showSlide(currentSlideIndex - 1);
}

function startSlideShow() {
	stopSlideShow();
	if (slides.length > 1)
		slideIntervalId = setInterval(nextSlide, SLIDE_INTERVAL_DELAY);
}

function stopSlideShow() {
	if (slideIntervalId) {
		clearInterval(slideIntervalId);
		slideIntervalId = null;
	}
}

if (nextButton)
	nextButton.addEventListener("click", () => {
		stopSlideShow();
		nextSlide();
		startSlideShow();
	});
if (prevButton)
	prevButton.addEventListener("click", () => {
		stopSlideShow();
		prevSlide();
		startSlideShow();
	});

slideTriggers.forEach((trigger) => {
	trigger.addEventListener("click", (e) => {
		e.preventDefault();
		const targetId = trigger.getAttribute("data-target-slide");
		if (targetId) {
			stopSlideShow();
			showSlideById(targetId);
			startSlideShow();
		}
	});
});

if (slidesContainer) {
	slidesContainer.addEventListener("mouseenter", stopSlideShow);
	slidesContainer.addEventListener("mouseleave", startSlideShow);
}

/* ==========================================
   3. LANGUAGE / TRANSLATION LOGIC
   ========================================== */
let currentLang = localStorage.getItem("preferredLang") || "en";

const langConfig = {
	en: { icon: "assets/home/icons8-torii-94.png", label: "日本語へ" },
	ja: { icon: "assets/home/icons8-us-capitol-94.png", label: "English" },
};

async function updateLanguage(lang) {
	try {
		const response = await fetch(`./assets/lang/${lang}.json`);
		const data = await response.json();

		// Site Title & Nav
		document.title = data.common.site_title;
		document.querySelectorAll("[data-i18n-nav]").forEach((el) => {
			const key = el.getAttribute("data-i18n-nav");
			if (data.nav[key]) el.ariaLabel = data.nav[key];
			if (data.common[key]) el.ariaLabel = data.common[key];
		});

		// Home Slide
		const home = document.getElementById("slide-home");
		home.querySelector("h1").textContent = data.home_slide.title;
		home.querySelector("p").textContent = data.home_slide.description;
		const hBtns = home.querySelectorAll(".cta-button");
		hBtns[0].textContent = data.home_slide.btn_digital;
		hBtns[1].textContent = data.home_slide.btn_gallery;

		// Latest Issue
		const latest = document.getElementById("slide-latest");
		latest.querySelector("h2").textContent = data.latest_slide.heading;
		latest.querySelector("p").textContent = data.latest_slide.issue_name;
		latest.querySelector(".cta-button").textContent =
			data.latest_slide.cta_button;

		// Haiku
		const haiku = document.getElementById("slide-haiku");
		haiku.querySelector("h2").textContent = data.haiku_slide.heading;
		haiku.querySelector("p").textContent = data.haiku_slide.description;
		haiku.querySelector(".cta-button").textContent =
			data.haiku_slide.cta_button;

		// Contact
		const contact = document.getElementById("slide-contact");
		contact.querySelector("h2").textContent = data.contact_slide.heading;
		contact.querySelector("p").innerHTML =
			`${data.contact_slide.description} <a href="#">${data.contact_slide.link_text}</a> ${data.contact_slide.description_suffix}`;
		contact.querySelector(".cta-button").textContent =
			data.contact_slide.cta_button;

		// About (Fixed for Italics & Install Button)
		const about = document.getElementById("slide-about");
		about.querySelector("h2").textContent = data.about_slide.heading;
		about.querySelector("p").innerHTML = data.about_slide.description;
		about.querySelector("h3").textContent = data.about_slide.credits_heading;
		const installBtn = document.getElementById("install-button");
		if (installBtn) installBtn.textContent = data.about_slide.install_button;

		// UI Updates
		document.getElementById("lang-icon").src = langConfig[lang].icon;
		document.getElementById("lang-toggle").ariaLabel = langConfig[lang].label;

		currentLang = lang;
		localStorage.setItem("preferredLang", lang);
	} catch (err) {
		console.error("Lang load error:", err);
	}
}

document.getElementById("lang-toggle").addEventListener("click", () => {
	updateLanguage(currentLang === "en" ? "ja" : "en");
});

/* ==========================================
   4. SNOWFLAKE LOGIC (Canvas)
   ========================================== */
const snowFall = (() => {
	let canvas,
		ctx,
		width,
		height,
		flakes = [],
		isRunning = false,
		animationFrameId = null;
	const FPS = 60,
		FLAKE_COUNT = 2;

	class Flake {
		constructor() {
			this.x = Math.random() * width;
			this.y = -10;
			this.size = Math.random() * 2 + 0.5;
			this.speed = Math.random() * 1 + 0.5;
			this.velX = Math.random() * 0.5 - 0.25;
		}
		update() {
			this.y += this.speed;
			this.x += this.velX;
		}
		draw() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
			ctx.fill();
		}
	}

	function loop() {
		if (!isRunning) return;
		ctx.clearRect(0, 0, width, height);
		if (flakes.length < 100) flakes.push(new Flake());
		flakes.forEach((f, i) => {
			f.update();
			f.draw();
			if (f.y > height) flakes.splice(i, 1);
		});
		animationFrameId = requestAnimationFrame(loop);
	}

	return {
		init: () => {
			canvas = document.getElementById("snowfall");
			if (!canvas) return false;
			ctx = canvas.getContext("2d");
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
			return true;
		},
		start: () => {
			isRunning = true;
			canvas.style.display = "block";
			loop();
		},
		stop: () => {
			isRunning = false;
			canvas.style.display = "none";
			cancelAnimationFrame(animationFrameId);
		},
	};
})();

/* ==========================================
   5. INSTALL & INITIALIZATION
   ========================================== */
let deferredPrompt;
const installBtn = document.getElementById("install-button");

window.addEventListener("beforeinstallprompt", (e) => {
	e.preventDefault();
	deferredPrompt = e;
	if (installBtn) installBtn.style.display = "block";
});

if (installBtn) {
	installBtn.addEventListener("click", async () => {
		if (deferredPrompt) {
			deferredPrompt.prompt();
			deferredPrompt = null;
			installBtn.style.display = "none";
		}
	});
}

document.addEventListener("DOMContentLoaded", () => {
	updateLanguage(currentLang);
	startSlideShow();
	if (snowFall.init()) {
		const snowSaved = localStorage.getItem("snowEnabled") !== "false";
		if (snowSaved) snowFall.start();
	}
});
