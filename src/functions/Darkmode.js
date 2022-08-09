import { createContext } from "react";

const data = Object.entries(localStorage).map((item) => item[0] === "darkmode");
const medias = window.matchMedia("(prefers-color-scheme: dark)");

if (localStorage.length === 0) {
	localStorage.setItem("darkmode", medias.matches);
	localStorage.setItem("list", false);
} else if (data.every((element) => element === false)) {
	localStorage.setItem("darkmode", medias.matches);
	localStorage.setItem("list", false);
}

const DarkMode = createContext(JSON.parse({ ...localStorage }.darkmode));

export default DarkMode;
