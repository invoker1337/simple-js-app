let pokemonList = [
  { name: 'Balbasaur', height: ' 0.7 ', types: ['grass', 'poison']},
  { name: 'Graveler', height: ' 1.0 ', types: ['rock', 'ground']},
  { name: 'Slowbro', height: ' 1.6 ', types: ['psychic', 'water' ]}
];


for (let i = 0; i < pokemonList.length; i++) { //instead of writing down every pokemon by myself, i am using a "for loop" to write it multiple times
  if (pokemonList[i].height >= 1.1){

    document.write("<br>" + "Name: " + pokemonList[i].name + "// height:" + pokemonList[i].height + "<b>WOW thats a big one!</b>" + "// Type: " + pokemonList[i].types);
  } else {
    document.write("<br>" + "Name: " + pokemonList[i].name + "// height:" + pokemonList[i].height + "// Type: " + pokemonList[i].types);
  }

}
