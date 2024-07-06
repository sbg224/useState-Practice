export default function Introduction() {
  return (
    <div className="exercice">
      <h1>Pratique du useState</h1>
      <h3>Rappel :</h3>
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
      <p>Pour plus d'informations, consulte le README.</p>
    </div>
  );
}
