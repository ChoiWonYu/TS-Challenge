type Words = {
  [key: string]: string;
};
class Word {
  constructor(public term: string, public def: string) {}
}
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  get(term: string) {
    return this.words[term];
  }
  add(word: Word) {
    if (!this.get(word.term)) {
      this.words[word.term] = word.def;
    } else {
      throw Error(`There is ${word.term} already!`);
    }
  }
  delete(term: string) {
    if (!this.get(term)) {
      throw Error("There is no term");
    } else {
      delete this.words[term];
    }
  }
  update(term: string, newDef: string) {
    if (!this.get(term)) {
      throw Error("There is no term");
    } else {
      this.words[term] = newDef;
    }
  }
  showAll() {
    Object.keys(this.words).map((key) =>
      console.log(`${key} : ${this.words[key]}\n`)
    );
  }
  count() {
    return Object.keys(this.words).length;
  }
}

let D = new Dict();
const kimchi = new Word("kimchi", "KFood");
const bulgogi = new Word("bulgogi", "Kmeet");
const coffee = new Word("coffee", "drink");
const phone = new Word("phone", "just");

D.add(kimchi);
D.add(bulgogi);
D.add(coffee);
D.add(phone);

D.delete("kimchi");
D.update("phone", "bestFriend");

D.showAll();

console.log(D.count());
