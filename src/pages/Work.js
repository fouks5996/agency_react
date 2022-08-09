import React from "react";
import { useParams } from "react-router-dom";
import Text from "../components/Text";
import { data } from "../data/worksData";
import BackToTop from "../functions/BackToTop";

function Work(props) {
	const { workId } = useParams();
	const findWork = data.find((work) => work.slug === workId);
	BackToTop();

	return (
		<div className='mt-20 relative flex flex-col justify-center items-center px-5'>
			<button
				onClick={() => window.history.back()}
				className='dark:text-white absolute bg-green dark:bg-violet-500 py-2 px-5 top-0 rounded-xl lg:left-[180px] left-[70px]'>
				{" "}
				Back{" "}
			</button>
			<Text title={findWork.title} body={findWork.description} />
			<img
				className='max-h-[500px] rounded mt-16'
				alt='wallpaper'
				src={findWork.image}
			/>
		</div>
	);
}

export default Work;
