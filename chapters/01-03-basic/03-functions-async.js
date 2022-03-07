import axios from 'axios';

export const gimmePikachu = async () => {
  try {
    const { data } = await axios.get(
      'https://pokeapi.co/api/v2/pokemon/pikachu'
    );
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
