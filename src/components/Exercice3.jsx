import Exercice from "./container/Exercice";

export default function Exercice3() {
  return (
    <Exercice>
      <h2>Exercice 3 : Toggle</h2>
      <p className="instructions">
        Modifie le composant Exercice3 pour basculer entre "Afficher" et
        "Masquer" un texte.
      </p>
      <div className="solution">
        <div>
          <button>Afficher/Masquer</button>
          <p>Texte à afficher/masquer</p>
        </div>
      </div>
    </Exercice>
  );
}
