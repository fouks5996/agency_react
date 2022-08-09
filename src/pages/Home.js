import React from "react";
import hand from "../images/hand.png";
import star from "../images/star.png";

function Home(props) {
	return (
		<div className=' h-[90vh] flex items-center 2xl:px-24 lg:px-16 px-12 md:mt-[-20px]'>
			<div className='flex  lg:flex-row flex-col items-end relative'>
				<h1 className='font-Bookmania 2xl:text-9xl text-8xl max-w-4xl dark:text-white'>
					Confiez vos{" "}
					<span className='bg-green dark:bg-green rounded pl-6 mr-2'>
						{" "}
						rêves{" "}
					</span>{" "}
					à des experts du Web
				</h1>
				<p className='dark:text-white text-2xl mt-10 max-w-xl font-extralight'>
					Grâce à notre savoir-faire, notre expérience et notre écoute, nous
					accompagnons nos clients dans la création de site internet: étude, UX,
					conception, design, développement, SEO. Notre agence web est capable
					de répondre à tous vos besoins et d'élaborer une véritable stratégie
					digitale.
				</p>
				<img
					className='absolute 2xl:top-[20px] 2xl:w-48 2xl:right-[10px] lg:top-[-100px] lg:right-[70px]  top-[320px] '
					alt='hand'
					src={hand}
				/>
				<img
					className='absolute 2xl:top-20 2xl:w-48 2xl:right-64 lg:top-[-100px] lg:right-[210px] top-[200px] '
					alt='star'
					src={star}
				/>
			</div>
		</div>
	);
}

export default Home;
