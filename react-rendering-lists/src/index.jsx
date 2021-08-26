import React from 'react';
import ReactDOM from 'react-dom';

function Pokemon(props) {
  const content = props.pokedex.map(names =>
  <li key={names.number}>
    <li>{names.name}</li>
  </li>
  );
  return (
    <ul>
      {content}
    </ul>
  );
}
const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

ReactDOM.render(
  <Pokemon pokedex={pokedex}/>,
  document.getElementById('root')
);
