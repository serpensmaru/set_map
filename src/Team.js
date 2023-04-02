export class Character {
}

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (character instanceof Character) {
      this.members.add(character);
    }
    return this.members;
  }

  addAll(...characters) {
    for (const one of characters) {
      if (one instanceof Character) {
        this.members.add(one);
      }
    }
    return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }
}
