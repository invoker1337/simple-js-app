let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	function getAll() {
		return pokemonList;
	}

	function addListItem(pokemon) {
		let pokeList = document.querySelector('.pokemon-list');
		let listItem = document.createElement('li');
		let button = document.createElement('button');
		button.innerText = pokemon.name;
		button.classList.add('btn');
		button.setAttribute("data-target", "#exampleModal");
		button.setAttribute("data-toggle", "modal");
		//Event listener to make showDetails function when Pokemon button is clicked
		button.addEventListener('click', function(event) {
			showDetails(pokemon);
		});
		listItem.classList.add("group-list-item");
		listItem.appendChild(button);
		pokeList.appendChild(listItem);

	}
	//pulls pokemon list from json
	function loadList() {
		return fetch(apiUrl).then(function (response){
			return response.json();
		}).then(function(json) {
			json.results.forEach(function (item) {
				let pokemon = {
					name: item.name,
					detailsUrl: item.url
				};
				add(pokemon);
			})
		}).catch(function (e) {
			console.error(e);
		})
	}
	//pulls pokemon details from json
	function loadDetails(item) {
		let url = item.detailsUrl;
		return fetch(url).then(function(response) {
			return response.json();
		}).then(function (details) {
			item.imageUrl = details.sprites.front_default;
			item.height = details.height;
			item.weight = details.weight;
			item.types = details.types;
		}).catch(function (e) {
			console.error(e)
		});
	}

		function showDetails(pokemon) {
	    pokemonRepository.loadDetails(pokemon).then(function () {
	      showModal(pokemon);
	    });
	}




function showModal(pokemon) { //Modal function
	let modalBody = $(".modal-body");
	let modalTitle = $(".modal-title");
	let modalHeader = $(".modal-header");
	//clear modal of existing content
	modalTitle.empty();
	modalBody.empty();

	let theMap = pokemon.types;
	        let map = theMap.map(function(x){
	          return x.type.name;
	        });


	//create element for Pokemon name in modal
	let nameElement = $("<h1>" + pokemon.name + "</h1>")
	//create element for Pokemon image
  let imageElement = $('<img class="modal-img" style="width:50%">')
  imageElement.attr("src",pokemon.imageUrl);
  //create element for Pokemon height
  let heightElement = $('<p>' + "Height : " + pokemon.height + '</p>');
  //create element for Pokemon weight
  let weightElement = $('<p>' + "Weight : " + pokemon.weight + '</p>');
  //create element for Pokemon types
  let typeElement = $('<p>' + "Type : " + map + '</p>');


  modalTitle.append(nameElement);
  modalBody.append(imageElement);
  modalBody.append(heightElement);
  modalBody.append(weightElement);
  modalBody.append(typeElement);
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails,
		showDetails: showDetails,
		showModal: showModal
	};

})();


pokemonRepository.loadList().then(function() {
	pokemonRepository.getAll().forEach(function(pokemon) {
		pokemonRepository.addListItem(pokemon);
		});
});
