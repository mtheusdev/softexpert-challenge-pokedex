import { useState } from 'react';

const useSprite = () => {
  const [sprite, setSprite] = useState(true);
  const changeSprite = () => {
    setSprite(!sprite);
  };
  return {
    sprite,
    changeSprite,
  };
};

export default useSprite;
