import Exercice from "./container/Exercice";
import StopWatch from "./container/StopWatch";

export default function Exercice8() {
	// 1. Crée un state pour gérer le nombre de secondes écoulées.
	// 2. Crée un state pour gérer l'état du chronomètre (démarré ou arrêté).
	// 3. Implémente une fonction pour démarrer le chronomètre. Cette fonction devrait utiliser setInterval pour incrémenter le nombre de secondes chaque seconde.
	// 4. Implémente une fonction pour arrêter le chronomètre. Cette fonction devrait utiliser clearInterval pour arrêter l'incrémentation.
	// 5. Implémente une fonction pour réinitialiser le chronomètre. Cette fonction devrait remettre le nombre de secondes à zéro et arrêter le chronomètre si nécessaire.
	// 6. Passe le nombre de secondes écoulées au composant StopWatch pour l'affichage.
	// 7. Associe les fonctions de démarrage, d'arrêt et de réinitialisation aux boutons correspondants.

	return (
		<Exercice>
			<h2>Exercice 8 : Chronomètre</h2>
			<p className="instructions">
				Modifie le composant Exercice8 pour créer un chronomètre avec les
				boutons "Start", "Stop" et "Reset"
			</p>
			<div className="solution">
				<div>
					<StopWatch value={""} />
					<button type="button">Start</button>
					<button type="button">Stop</button>
					<button type="button">Reset</button>
				</div>
			</div>
		</Exercice>
	);
}
