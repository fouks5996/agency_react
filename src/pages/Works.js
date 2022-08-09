import React, { useEffect, useState } from "react";
import GridData from "../components/GridData";
import ListData from "../components/ListData";
import Text from "../components/Text";
import { data } from "../data/worksData";
import GridIcon from "../icons/GridIcon";
import ListIcon from "../icons/ListIcon";

function Works() {
	const [show, setShow] = useState(JSON.parse({ ...localStorage }.list));

	useEffect(() => {
		localStorage.setItem("list", show);
	}, [show, setShow]);

	return (
		<div className='mt-20 flex  flex-col justify-start items-center'>
			<Text title='Au fil des années, nous avons pu accompagner les meilleurs.' />
			<div className='mb-20'>
				<p className='cursor-pointer' onClick={() => setShow((show) => !show)}>
					{show ? <ListIcon /> : <GridIcon />}
				</p>
			</div>
			{show ? <GridData data={data} /> : <ListData data={data} />}
		</div>
	);
}

export default Works;
