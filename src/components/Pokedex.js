// Não consegui fazer então copiei e coloei do gabarito aqui embaixo, o que eu tinha feito está no final da página.
import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      filteredType: 'all',
    };
  }

  filterPokemons(filteredType) {
    this.setState({ filteredType, pokemonIndex: 0 });
  }

  nextPokemon(numberOfPokemons) {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    }));
  }

  fetchFilteredPokemons() {
    const { pokemons } = this.props;
    const { filteredType } = this.state;

    return pokemons.filter(pokemon => {
      if (filteredType === 'all') return true;
      return pokemon.type === filteredType;
    });
  }

  fetchPokemonTypes() {
    const { pokemons } = this.props;

    return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemonTypes = this.fetchPokemonTypes();
    const pokemon = filteredPokemons[this.state.pokemonIndex];

    return (
      <div className="pokedex">
        <Pokemon pokemon={ pokemon } />
        <div className="pokedex-buttons-panel">
          <Button
            onClick={() => this.filterPokemons('all')}
            className="filter-button"
          >
            All
          </Button>
          {pokemonTypes.map(type => (
            <Button
              key={ type }
              onClick={() => this.filterPokemons(type)}
              className="filter-button"
            >
              { type }
            </Button>
          ))}
        </div>
        <Button
          className="pokedex-button"
          onClick={() => this.nextPokemon(filteredPokemons.length)}
          disabled={ filteredPokemons.length <= 1 }
        >
          Próximo pokémon
        </Button>
      </div>
    );
  }
}

export default Pokedex;


// O que eu tinha feito antes:
// import React from 'react';
// import Pokemon from './Pokemon';
// import Button from './Button';

// class Pokedex extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			pokemonIndex: 0,
// 			filteredType: 'all',
// 		};
// 		this.nextButton = this.nextButton.bind(this);
// 		this.filterPokemon = this.filterPokemon.bind(this);
// 	}

// 	nextButton({ length }) {
// 		this.setState((state) => {
// 			const { pokemonIndex } = this.state;
// 			if (pokemonIndex === length -1) {
// 				return ({ pokemonIndex: 0 })
// 			}
// 			return ({ pokemonIndex: state.pokemonIndex + 1 });
// 		}
// 		);
// 	}

// 	filterPokemon(type) {
// 		this.setState({ filteredType: type })
// 	}
	

// 	render() {
// 		const { pokemons, types } = this.props; 
// 		const { pokemonIndex, filteredType } = this.state;
// 		const filteredPokemons = pokemons.filter((pokemon) => this.filteredType === 'all' || pokemon.type.includes(filteredType));
// 		console.log(filteredType);

// 		return (
// 				<div className="pokedex">
// 					<Pokemon key={ filteredPokemons[pokemonIndex].id } pokemon={ filteredPokemons[pokemonIndex] } />

// 					<section>
// 						{types.map((type) => <Button 
// 							key={type}
// 							btnText={type}
// 							onClick={() => this.filterPokemon(type)} /> 
// 						)}
// 						<Button 
// 							btnText="all" 
// 							onClick={() => this.filterPokemon("all")}
// 							/>  
// 					</section>

// 					<section>
// 						<Button 
// 							btnText="Next Pokemon"
// 							onclick={()=> this.nextButton(filteredPokemons)}
// 							desabled={filteredPokemons.length <= 1} />
// 					</section>

// 				</div>
// 		);
// 	}
// }

// export default Pokedex;