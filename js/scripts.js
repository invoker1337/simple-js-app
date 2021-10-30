/* definitions:
Primitive data are no objects and has no methods of its own. There are 6 Primitive Datatypes:
1  Strings: an array of characters for example text/words in programming languages (is wrapped in " "  or ' ')
2. Numbers: like 37 or -14.5
3. booleans: true or false
4. null: no value
5. undefined: a declared variable but hasnt been given a value
6. Symbol: a unique value thats not equal to any other value

Complex Data Types:
1. Objects: unordered list of data, are made up of 'key-value' pair, which are called 'property'
2. Arrays: ordered lists of data, inside boxes []
*/



// IIFE: The first code line implies: new pokemonRepository variable to hold what IIFE will return, and assign the IIFE to that variable. Start of wrap of pokemonList array in an IIFE this function is closed with })();   //

let pokemonRepository = (function () {

  let pokemonList = [     //declaring variables to store values, in this case the variable 'name' is 'pokemonList'. A variable is like a labeled box, and the value is like the thing thats being stored inside the box. Values can be changed at any point in time. Other ways to declare variables are 'const' and 'var'
    { name: 'Balbasaur', height: ' 0.7 ', types: ['grass', 'poison']},  //the 'name';'height';'types' are 'Keys' whereas 'Balbasur'; '0,7' ; and 'grass,poison' are the values associated with them. "height:0.7" is a key-value pair, also called property.
    { name: 'Graveler', height: ' 1.0 ', types: ['rock', 'ground']},  // [rock, ground] are arrays. An array is like an object where each value has a number as a key, designating its place in the list. Those numbers are reffered to as 'array index' and they start from 0. 'rock' has an array index of 0 and ground 1.
    { name: 'Slowbro', height: ' 1.6 ', types: ['psychic', 'water' ]}
  ];

  function getAll () {
      return pokemonList;
  }

  function add(pokemon) {
      pokemonList.push(pokemon);
  }

  function addListItem (pokemon) {
      let pokemonList = document.querySelector('.pokemon-list');
      let listPokemon = document.createElement('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('button-class')
      listPokemon.appendChild(button);
      pokemonList.appendChild(listPokemon);
      button.addEventListener('click', function() {
          showDetails(pokemon)
      });
  }

  function showDetails(pokemon) {
      console.log (pokemon);
  }

  return {
      getAll: getAll,
      add: add,
      addListItem: addListItem
  };

  } )();

  pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
  });







/* DOM manipulation basics:

let mainTitle = document.querySelector('h1');
mainTitle.innerText= "Pokedex";

let container = document.querySelector('.container');   //when selecting a 'class' make sure to add the dot .


let button = document.createElement('button');
button.innerText='click this thang';
container.appendChild(button);
*/





/* this is the forEachfunction

pokemonList.forEach(function(pokemon){                     //forEach loop iterates over each item in the pokemonList so that i do not have to write them all down individually.
  if (pokemon.height >= 1.1){                              // if condition checks if the height is above a certain value to perform a specific action, in this case 'document.write...'

    document.write("<br>" + "name: " + pokemon.name + " height:" + pokemon.height + "<b> WOW THATS A BIG ONE </b>" + " types:" + pokemon.types);
  } else {
    document.write("<br>" + "name: " + pokemon.name + " height:" + pokemon.height + " types:" + pokemon.types);


  }

});

end of for forEachfunction */
