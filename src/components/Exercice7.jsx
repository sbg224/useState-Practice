import Exercice from "./container/Exercice";

export default function Exercice7() {
	// 1. Crée un state pour gérer les valeurs des champs du formulaire (nom, prénom, email)
	// 2. Crée un state pour gérer les valeurs soumises
	// 3. Crée une fonction pour mettre à jour les valeurs du formulaire à chaque changement dans les champs
	// 4. Crée une fonction pour gérer la soumission du formulaire

	return (
		<Exercice>
			<h2>Exercice 7 : Formulaire multi-champs</h2>
			<p className="instructions">
				Modifie le composant Exercice7 pour faire un formulaire avec plusieurs
				champs de texte contrôlés (nom, prénom, email) et affichez les valeurs
				soumises en dessous du formulaire.
			</p>
			<div className="solution">
				<div>
					<input type="text" name="nom" placeholder="Nom" />
					<input type="text" name="prenom" placeholder="Prénom" />
					<input type="email" name="email" placeholder="Email" />
					<button type="button">Save</button>
				</div>
				<p>Nom : </p>
				<p>Prénom : </p>
				<p>Email : </p>
			</div>
		</Exercice>
	);
}
