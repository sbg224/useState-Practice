import { useState } from "react";
import Exercice from "./container/Exercice";

export default function Exercice1() {
	// 1. Crée un state qui garde en mémoire la valeur du compteur.
	const [count, setCount] = useState(0)

	// 3. Implémente une fonction pour décrémenter la valeur du compteur.
	const handleChangeMoins = (e)=>{
		e.preventDefault()
		setCount(count -1)
		// return count;
	}

	// 2. Implémente une fonction pour incrémenter la valeur du compteur.
	const handleChangePlus = (e) =>{
		e.preventDefault()
		setCount(count +1)
		// return count;
	}
	// 4. Passe les fonctions d'incrémentation et de décrémentation aux boutons correspondants.
	return (
		<Exercice>
			<h2>Exercice 1 : Compteur simple</h2>
			<p className="instructions">
				Modifie le composant Exercice1 pour faire fonctionner le compteur et ses
				deux boutons.
			</p>
			<div className="solution">
				<div>
					<button type="button" onClick={handleChangeMoins}>-</button>
					<button type="button" onClick={handleChangePlus}>+</button>
					<p>Compteur : {count}</p>
				</div>
			</div>
		</Exercice>
	);
}
