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
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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





  function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }





 function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }




  function showDetails(pokemon) {
	    pokemonRepository.loadDetails(pokemon).then(function () {
	      showModal(pokemon);
	    });
	}


	let modalContainer = document.querySelector('#modal-container');

function showModal(pokemon) { //Modal function

	modalContainer.innerHTML = '';

  let modal = document.createElement('div');
  modal.classList.add('modal');

	let closeButtonElement = document.createElement('button'); //Close button element
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
	closeButtonElement.addEventListener('click', hideModal);

  let modalPokemonName = document.createElement('h1'); //Display pokemon name
   modalPokemonName.innerText = pokemon.name;

  let modalPokemonImg = document.createElement('img'); //Display pokemon img
  modalPokemonImg.src = pokemon.imageUrl;


  let modalPokemonHeight = document.createElement('p'); //Display pokemon height
   modalPokemonHeight.innerText = 'Height: ' + pokemon.height;

  let modalPokemonWeight = document.createElement('p'); //Display pokemon weight
   modalPokemonWeight.innerText = 'Weight: ' + pokemon.weight;

  modal.appendChild(closeButtonElement);
  modal.appendChild(modalPokemonName);
  modal.appendChild(modalPokemonImg);
  modal.appendChild(modalPokemonHeight);
  modal.appendChild(modalPokemonWeight);

  modalContainer.appendChild(modal);
	modalContainer.classList.add('is-visible');
	}

	function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');
	}

	window.addEventListener('keydown', (e) => { //Allows Esc key to hide modal
	  let modalContainer = document.querySelector('#modal-container');
	  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
	    hideModal();
	  }
	});

  modalContainer.addEventListener('click', (e) => { //Allows clicking outside modal to close modal
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails,
		showDetails: showDetails
	};

})();


pokemonRepository.loadList().then(function() {
	pokemonRepository.getAll().forEach(function(pokemon) {
		pokemonRepository.addListItem(pokemon);
		});
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
