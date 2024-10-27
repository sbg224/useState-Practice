import Exercice from "./container/Exercice";

export default function Exercice5() {
	const list = [
		"Se laver",
		"Sortir les poubelles",
		"Avoir un élevage de poules",
	];

	// 1. Crée un state pour avoir en mémoire la liste d'éléments.
	// 2. Crée un state pour gérer la valeur de l'input .
	// 3. Ajoute un nouvel élément à la liste en utilisant la valeur de l'input.

	return (
		<Exercice>
			<h2>Exercice 5 : Liste dynamique</h2>
			<p className="instructions">
				Modifie le composant Exercice5 pour ajouter des éléments à une liste en
				utilisant un champ de texte et un bouton.
			</p>
			<div className="solution">
				<div>
					<input type="text" />
					<button type="button">Ajouter</button>
					<table>
						<thead>
							<tr>
								<th>A faire</th>
							</tr>
						</thead>
						<tbody>
							{list.map((item, index) => (
								<tr key={String(item).concat(index)}>
									<td>{item}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Exercice>
	);
}
