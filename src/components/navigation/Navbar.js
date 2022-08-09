import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import DarkMode from "../../functions/Darkmode";

function Navbar({ activeDarMode }) {
	let activeClassName = "underline  decoration-1 underline-offset-2";
	let inactiveClassName =
		" decoration-2 hover:line-through  underline-offset-2";

	const darki = useContext(DarkMode);

	return (
		<nav className=' px-10 md:px-24 2xl:px-64  py-5 border-b border-gray-200 dark:bg-black'>
			<div className='flex justify-between items-center '>
				<div className='dark:text-white'>
					{" "}
					<NavLink to='/'>
						<span className='font-black text-lg'> Web</span>sitic{" "}
					</NavLink>
				</div>
				<div className='flex items-center dark:text-white  justify-between gap-12'>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClassName : inactiveClassName
						}
						to='/'>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClassName : inactiveClassName
						}
						to='/about'>
						About
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClassName : inactiveClassName
						}
						to='works'>
						Works
					</NavLink>
				</div>
				<label className='switch'>
					{JSON.parse({ ...localStorage }.darkmode) ? (
						<input defaultChecked onClick={activeDarMode} type='checkbox' />
					) : (
						<input onClick={activeDarMode} type='checkbox' />
					)}

					<span
						className={`slider round content-center ${
							darki ? 'before:content-["🌛"]' : 'before:content-["☀️"]'
						}`}></span>
				</label>
			</div>
		</nav>
	);
}

export default Navbar;
