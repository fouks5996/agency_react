import React from "react";
import { Link } from "react-router-dom";

function GridData({ data }) {
	return (
		<div className='grid lg:grid-cols-2 grid-cols-1 gap-10 px-5 '>
			{data.map((work, index) => (
				<Link key={index} to={work.slug}>
					<div className='relative '>
						<p className='absolute top-5 left-5 text-white  text-4xl font-Bookmania  '>
							{" "}
							{work.title}{" "}
						</p>
						<img
							className='rounded object-cover min-h-[400px] max-w-[450px]'
							alt=''
							src={work.image}
						/>
					</div>
				</Link>
			))}
		</div>
	);
}

export default GridData;
