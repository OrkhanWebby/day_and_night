const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

button.addEventListener("click", change);
const dayNight = document.querySelector(".day-night");

function change() {
	if (document.body.className === "day") {
		moon.style.display = "block";
		sun.style.display = "none";
		dayNight.style.color = "white";
		document.body.classList.remove("day");
		document.body.classList.add("night");
		button.style.color = "white";
	} else {
		moon.style.display = "none";
		sun.style.display = "block";
		dayNight.style.color = "black";
		document.body.classList.remove("night");
		document.body.classList.add("day");
		button.style.color = "black";
	}
}
