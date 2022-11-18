interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  get(key: string) {
    if (this.storage[key]) return this.storage[key];
    return undefined;
  }
  set(key: string, value: T) {
    if (this.get(key)) {
      throw Error("Key Duplication!");
    } else {
      this.storage[key] = value;
    }
  }
  update(key: string, newValue: T) {
    if (this.get(key)) {
      this.storage[key] = newValue;
    } else {
      throw Error("Wrong Key!");
    }
  }
  remove(key: string) {
    if (this.get(key)) {
      const delValue = this.storage[key];
      delete this.storage[key];
      return delValue;
    } else {
      throw Error("Wrong key!");
    }
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.set("token", "asdfasdfknlsdafklsf");
console.log(stringStorage.get("token"));
stringStorage.update("token", "bbadadssa");
console.log(stringStorage.get("token"));
