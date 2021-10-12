let pokemonList = [
  { name: 'Balbasaur', height: ' 0.7 ', types: ['grass', 'poison']},
  { name: 'Graveler', height: ' 1.0 ', types: ['rock', 'ground']},
  { name: 'Slowbro', height: ' 1.6 ', types: ['psychic', 'water' ]}
];

for (let i = 0; i < pokemonList.length; i++) {
  document.write("Name: " + pokemonList[i].name + " / height:" + pokemonList[i].height + " / Types: " + pokemonList[i].types);
}
