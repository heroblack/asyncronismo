class Pokemon {
  constructor(base) {
    this.base = base;
  }

  async search(id) {
    const response = await fetch(`${this.base}${id}`);
    const pokemon = await response.json();
    return pokemon;
  }
}

export default Pokemon;
