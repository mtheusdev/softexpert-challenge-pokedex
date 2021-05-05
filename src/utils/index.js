const imgs = [
  'https://cdn2.bulbagarden.net/upload/f/f6/Lets_Go_Pikachu_Eevee_Misty.png',
  'https://static.wikia.nocookie.net/pokemonshow/images/c/cd/James_Anime.png/revision/latest?cb=20120104143018&path-prefix=pt-br',
  'https://i.pinimg.com/originals/8f/0c/42/8f0c42e4b5ffd76f3863950582070c1c.png',
  'https://static.wikia.nocookie.net/pokemonshow/images/c/c1/Jessie_anime.png/revision/latest?cb=20110310013936&path-prefix=pt-br',
];
/**
 * Should return an object with backgroudImage to PokemonPage
 * @param void
 * @returns object
 */
export const style = {
  backgroundImage: `url(${imgs[Math.floor(Math.random() * (4 - 0)) + 0]})`,
};

/**
 * Should return an object with arguments mapped from a pokemon to the card
 * @param detailsPokemon
 * @returns object
 */
export function makeParamsPokemonCard(detailsPokemon) {
  return {
    typePokemon: detailsPokemon.types[0].type.name,
    typesPokemon: detailsPokemon.types,
    numberPokemon: detailsPokemon.id,
    imagePokemon: detailsPokemon.sprites.other.dream_world.front_default
      ? detailsPokemon.sprites.other.dream_world.front_default
      : 'https://i.pinimg.com/originals/b1/bf/cc/b1bfcc576b8559d09efd318486f60a19.png',
    namePokemon: detailsPokemon.name,
    skills: detailsPokemon.abilities,
    baseStatus: detailsPokemon.stats,
    weight: detailsPokemon.weight,
    height: detailsPokemon.height,
    spriteFront: detailsPokemon.sprites.front_default,
    spriteBack: detailsPokemon.sprites.back_default,
  };
}
/**
 * Should return an object with arguments mapped from a pokemon to the page
 * @param pokemon
 * @returns object
 */
export function makeParamsToPokemonPage(pokemon) {
  const {
    skills,
    baseStatus,
    height,
    weight,
    typePokemon,
    typesPokemon,
    spriteFront,
    spriteBack,
    namePokemon,
    imagePokemon,
  } = pokemon;
  return {
    height,
    weight,
    spriteBack,
    spriteFront,
    namePokemon,
    imagePokemon,
    bgImage: `container-page ${typePokemon}-bg`,
    bgColor: `pokemon ${typePokemon}`,
    stringSkills: skills.map((skil) => skil.ability.name).join(', '),
    stringTypes: typesPokemon.map((type) => type.type.name).join(', '),
    stringStatus: baseStatus
      .filter((stat) => stat.effort !== 0)
      .map((stat) => stat.stat.name)
      .join(', '),
  };
}
