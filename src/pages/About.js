import React from "react";
import Text from "../components/Text";

function About(props) {
	return (
		<div className='h-[90vh] flex flex-col justify-center items-center'>
			<Text
				title='Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.'
				body='De l’étape d’avant projet web au lancement effectif du site, nous sommes là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.  
         Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.'
			/>
		</div>
	);
}

export default About;
