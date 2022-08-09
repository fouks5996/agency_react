import React from "react";
import { Link } from "react-router-dom";

function ListData({ data }) {
	return (
		<div className='flex flex-col px-10 lg:px-0'>
			{data.map((work, index) => (
				<Link key={index} to={work.slug}>
					<div className='flex items-start gap-3 mb-10 pb-3 border-b border-gray'>
						<img
							className='rounded object-cover min-h-[70px] max-w-[70px]'
							alt=''
							src={work.image}
						/>
						<p className=' text-xl dark:text-white font-Bookmania max-w-2xl  '>
							{work.title}
						</p>
					</div>
				</Link>
			))}
		</div>
	);
}

export default ListData;
