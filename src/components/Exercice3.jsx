import { useState } from "react";
import Exercice from "./container/Exercice";

export default function Exercice3() {
	const [affiche, setAffiche] = useState (false)

	const handleChange = () => {
		setAffiche(!affiche)
	}
	// 1. Crée un state pour suivre l'état de visibilité du texte.
	// 2. Implémente une fonction pour basculer a l'état contraire ! .
	// 3. Passe la fonction de toggle au bouton.
	// 4. Affiche ou masque le texte en fonction de l'état de visibilité.
	return (
		<Exercice>
			<h2>Exercice 3 : Toggle</h2>
			<p className="instructions">
				Modifie le composant Exercice3 pour basculer entre "Afficher" et
				"Masquer" un texte.
			</p>
			<div className="solution">
				<div>
					<button type="button" onClick={handleChange}>
						{affiche ? "Masquer" : "Afficher" }
					</button>
					{/* 5. Affiche conditionnellement le paragraphe en fonction de l'état */}
					<p> </p>
				</div>
			</div>
		</Exercice>
	)
}
