import('./pokemon-card.style.scss')

const PokemonCard = props => {
  return (
    <div className="card-container grass">
      <div className="box-image">
        <div className="circle">
        </div>
        <button>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt=""/>
        </button>
      </div>
      <div className="box-number-pokemon">
        <span>#025</span>
      </div>
      <span className="name-pokemon">Bulbasaur</span>
      <span className="type-pokemon">Type: Grass</span>
    </div>
  )
}

export default PokemonCard