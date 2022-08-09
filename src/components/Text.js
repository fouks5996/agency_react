import React from "react";

function Text({ title, body }) {
	return (
		<>
			<h1 className='font-Bookmania text-4xl text-center w-2/3 mb-5 dark:text-white'>
				{title}
			</h1>
			<p className='text-center w-2/3 dark:text-white'> {body}</p>
		</>
	);
}

export default Text;
