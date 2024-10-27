import Exercice from "./container/Exercice";

export default function Exercice6() {
	return (
		<Exercice>
			<h2>Exercice 6 : Compteur avec limite</h2>
			<p className="instructions">
				Modifie le composant Exercice6 pour faire un compteur qui peut augmenter
				jusqu'à une valeur maximale définie par l'utilisateur.
			</p>
			<div className="solution">
				<div>
					<input type="number" placeholder="Limite max" />
					<p>Compteur : 0 </p>
					<button type="button"> Augmenter </button>
				</div>
			</div>
		</Exercice>
	);
}
