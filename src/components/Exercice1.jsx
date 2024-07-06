import Exercice from "./container/Exercice";

export default function Exercice1() {
  return (
    <Exercice>
      <h2>Exercice 1 : Compteur simple</h2>
      <p className="instructions">
        Modifie le composant Exercice1 pour faire fonctionner le compteur et ses
        deux boutons.
      </p>
      <div className="solution">
        <p>Compteur : 0</p>
        <div>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </Exercice>
  );
}
