import Exercice from "./container/Exercice";

export default function Exercice1() {
  // 1. Crée un state qui garde en mémoire la valeur du compteur.
  // 2. Implémente une fonction pour incrémenter la valeur du compteur.
  // 3. Implémente une fonction pour décrémenter la valeur du compteur.
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
          <button>-</button>
          <button>+</button>
          <p>Compteur : 0</p>
        </div>
      </div>
    </Exercice>
  );
}
