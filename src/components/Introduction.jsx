export default function Introduction() {
	return (
		<div className="exercice">
			<h1>Pratique du Hook useState</h1>
			<p>
				Les composants ont souvent besoin de modifier ce qui est affiché à
				l’écran en réponse à une interaction. Par exemple, saisir du texte dans
				un formulaire devrait mettre à jour le champ de saisie, cliquer sur «
				suivant » dans un carrousel d’images devrait changer l’image affichée,
				cliquer sur « acheter » ajoute un produit au panier d’achats. Les
				composants ont besoin de « se souvenir » de certaines choses : la valeur
				saisie, l’image active, le panier d’achats. En React, ce type de mémoire
				spécifique au composant est appelé état.
			</p>
			<p>
				Vous pouvez ajouter un état à un composant avec un Hook useState. Les
				Hooks sont des fonctions spéciales qui permettent à vos composants
				d’utiliser des fonctionnalités de React (l’état en est une). Le Hook
				useState vous permet de déclarer une variable d’état. Il prend l’état
				initial en argument et renvoie une paire de valeurs : l’état actuel et
				une fonction qui vous permet de le modifier.
			</p>
			<div className="code-container">
				<div className="cm-line">
					<span className="pink">
						const [<span className="violet">count, setCount</span>] ={" "}
					</span>
					<span className="green">useState</span>{" "}
					<span className="pink">
						(<span className="violet">0</span>)
					</span>{" "}
					;
				</div>
			</div>
			<ul>
				<li>
					<span className="violet">count</span> est la variable d'état actuelle.
				</li>
				<li>
					<span className="violet">setCount</span> est la fonction utilisée pour
					mettre à jour count.
				</li>
				<li>
					0 est la valeur initiale de <span className="violet">count</span>.
				</li>
			</ul>
			<p>Pour plus d'informations, consulte le README ou la <a href="https://fr.react.dev/reference/react/useState">Doc de React !</a> 😉</p>
		</div>
	);
}
