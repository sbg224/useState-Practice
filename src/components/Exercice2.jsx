import Exercice from "./container/Exercice";

export default function Exercice2() {
  return (
    <Exercice>
      <h2>Exercice 2 : Input contrôlé</h2>
      <p className="instructions">
        Modifie le composant Exercice2 pour affichez la valeur du champ de texte
        sous celui-ci.
      </p>
      <div className="solution">
        <div>
          <input type="text" />
          <p>"Valeur de l'input"</p>
        </div>
      </div>
    </Exercice>
  );
}
