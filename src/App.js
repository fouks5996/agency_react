import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import DarkMode from "./functions/Darkmode";
import About from "./pages/About";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Works from "./pages/Works";

function App() {
	const [dark, setDark] = useState(JSON.parse({ ...localStorage }.darkmode));

	useEffect(() => {
		localStorage.setItem("darkmode", dark);
	}, [dark, setDark]);

	useEffect(() => {
		if ({ ...localStorage }.darkmode === "true") {
			document.body.style.backgroundColor = "black";
			document.body.classList.add("dark");
		} else if ({ ...localStorage }.darkmode === "false") {
			document.body.style.backgroundColor = "white";
			document.body.classList.remove("dark");
		}
	}, [dark]);

	return (
		<DarkMode.Provider value={dark}>
			<div className='App'>
				<Navbar activeDarMode={() => setDark((dark) => !dark)} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/works' element={<Works />} />
					<Route path='/works/:workId' element={<Work />} />
				</Routes>
			</div>
		</DarkMode.Provider>
	);
}

export default App;
