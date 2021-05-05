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
    stringSkills: skills.map((item) => item.ability.name).join(', '),
    stringTypes: typesPokemon.map((item) => item.type.name).join(', '),
    stringStatus: baseStatus
      .filter((item) => item.effort !== 0)
      .map((item) => item.stat.name)
      .join(', '),
  };
}
