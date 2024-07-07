# Utilisation du Hook useState en React

## Introduction

Les composants ont souvent besoin de modifier ce qui est affiché à l’écran en réponse à une interaction. Par exemple, saisir du texte dans un formulaire devrait mettre à jour le champ de saisie, cliquer sur « suivant » dans un carrousel d’images devrait changer l’image affichée, cliquer sur « acheter » ajoute un produit au panier d’achats. Les composants ont besoin de « se souvenir » de certaines choses : la valeur saisie, l’image active, le panier d’achats. En React, ce type de mémoire spécifique au composant est appelé état.

Vous pouvez ajouter un état à un composant avec un Hook useState. Les Hooks sont des fonctions spéciales qui permettent à vos composants d’utiliser des fonctionnalités de React (l’état en est une). Le Hook useState vous permet de déclarer une variable d’état. Il prend l’état initial en argument et renvoie une paire de valeurs : l’état actuel et une fonction qui vous permet de le modifier.


```jsx
const [index, setIndex] = useState (0) ;
const [showMore, setShowMore] = useState (false) ;
```

## Importation

Pour utiliser `useState`, importez-le depuis la bibliothèque React :

```jsx
import { useState } from 'react';
```

## Utilisation Basique

Le hook `useState` renvoie un tableau avec deux éléments :
1. La valeur actuelle de l'état.
2. Une fonction pour mettre à jour cette valeur.

### Exemple

Voici un exemple de compteur simple utilisant `useState` :

```jsx
import { useState } from 'react';

function Counter() {
  // Déclare une variable d'état appelée "count" et initialisée à 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}

export default Counter;
```

### Explication

1. `const [count, setCount] = useState(0);`
   - `count` est la variable d'état actuelle.
   - `setCount` est la fonction utilisée pour mettre à jour `count`.
   - `0` est la valeur initiale de `count`.

2. `onClick={() => setCount(count + 1)}`
   - À chaque clic sur le bouton, `setCount` est appelé avec la nouvelle valeur de `count`, qui est `count + 1`.

## Utilisation avec des objets

Vous pouvez utiliser `useState` avec des objets pour gérer plusieurs valeurs d'état liées.

### Exemple

Voici un exemple de formulaire avec plusieurs champs contrôlés :

```jsx
import { useState } from 'react';

function Form() {
  const [formValues, setFormValues] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <input 
        type="text" 
        name="name" 
        value={formValues.name} 
        onChange={handleChange} 
        placeholder="Nom"
      />
      <input 
        type="email" 
        name="email" 
        value={formValues.email} 
        onChange={handleChange} 
        placeholder="Email"
      />
      <p>Nom : {formValues.name}</p>
      <p>Email : {formValues.email}</p>
    </div>
  );
}

export default Form;
```

### Explication

1. `const [formValues, setFormValues] = useState({ name: '', email: '' });`
   - `formValues` est un objet contenant les valeurs actuelles des champs du formulaire.
   - `setFormValues` est la fonction utilisée pour mettre à jour `formValues`.

2. `handleChange`
   - `handleChange` met à jour l'objet `formValues` en fonction de l'entrée de l'utilisateur.

## Mise à jour de l'état basé sur l'état précédent

Parfois, vous avez besoin de mettre à jour l'état en utilisant sa valeur précédente. Pour ce faire, vous pouvez passer une fonction à `setState`.

### Exemple

Voici un exemple de compteur utilisant la valeur précédente de l'état :

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}

export default Counter;
```

### Explication

   `setCount(prevCount => prevCount + 1)`
   - Utilise une fonction qui prend la valeur précédente de l'état (`prevCount`) et renvoie la nouvelle valeur de l'état (`prevCount + 1`).


### Utilisation avec un état booléen

Pour un exemple utilisant un état booléen, comme un interrupteur :

```jsx
import { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>Le commutateur est {isOn ? 'Allumé' : 'Éteint'}</p>
      <button onClick={() => setIsOn(prevIsOn => !prevIsOn)}>
        Basculer
      </button>
    </div>
  );
}

export default Toggle;
```

Ici, `setIsOn(prevIsOn => !prevIsOn)` inverse simplement la valeur actuelle de `isOn` à chaque clic sur le bouton en utilisant la fonction de mise à jour de l'état avec `!prevIsOn`.
