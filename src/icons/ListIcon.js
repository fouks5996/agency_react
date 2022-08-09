import React from "react";

function ListIcon(props) {
	return (
		<div className='flex items-center gap-2 py-3 px-4 rounded-full bg-slate-200'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth={2}>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M4 6h16M4 10h16M4 14h16M4 18h16'
				/>
			</svg>
			<p> List view</p>
		</div>
	);
}

export default ListIcon;
