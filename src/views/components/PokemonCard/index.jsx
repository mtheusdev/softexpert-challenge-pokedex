import('./pokemon-card.style.scss')

const PokemonCard = ({imagePokemon, numberPokemon, namePokemon, typePokemon}) => {
  const classes = `card-container ${typePokemon}`
  return (
    <div className={classes}>
      <div className="box-image">
        <div className="circle">
          <button>
              <img src={imagePokemon} alt={namePokemon}/>
          </button>
        </div>
      </div>
      <div className="box-number-pokemon">
        <span>{numberPokemon}</span>
      </div>
      <span className="name-pokemon">{namePokemon}</span>
      <span className="type-pokemon">Type: {typePokemon}</span>
    </div>
  )
}

export default PokemonCard