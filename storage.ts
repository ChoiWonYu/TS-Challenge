interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  getItem(key: string) {
    if (this.storage[key]) return this.storage[key];
    return undefined;
  }
  setItem(key: string, value: T) {
    if (this.getItem(key)) {
      throw Error("Key Duplication!");
    } else {
      this.storage[key] = value;
    }
  }
  update(key: string, newValue: T) {
    if (this.getItem(key)) {
      this.storage[key] = newValue;
    } else {
      throw Error("Wrong Key!");
    }
  }
  remove(key: string) {
    if (this.getItem(key)) {
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
stringStorage.setItem("token", "asdfasdfknlsdafklsf");
console.log(stringStorage.getItem("token"));
stringStorage.update("token", "bbadadssa");
console.log(stringStorage.getItem("token"));

interface GGeolocationPosition {
  coords: string;
  timestamp: number;
}

interface GGeolocationPositionError {
  code: number;
  message: string;
}
interface Ioptions {
  maximumAge?: number;
  timeout?: number;
  enableHighAccuracy?: boolean;
}

class GeolocationAPI {
  private Position: GGeolocationPosition = {
    coords: "coordsObj",
    timestamp: 0,
  };
  private Err: GGeolocationPositionError = { code: 0, message: "default" };
  private options: Ioptions = {
    maximumAge: 0,
    timeout: Infinity,
    enableHighAccuracy: false,
  };
  private defaultId = 1;

  getCurrentPosition(
    successFn: Function,
    errorFn?: Function,
    optionsObj?: Ioptions
  ): void {
    if (errorFn === undefined && optionsObj === undefined) {
      successFn(this.Position);
    } else if (errorFn && optionsObj === undefined) {
      successFn(this.Position);
      errorFn(this.Err);
    } else if (errorFn && optionsObj) {
      successFn(this.Position);
      errorFn(this.Err);
      //use options
    }
  }

  watchPosition(
    success: Function,
    error?: Function,
    options?: Ioptions
  ): number {
    if (error === undefined && options === undefined) {
      success(this.Position);
      return this.defaultId;
    } else if (error && options === undefined) {
      success(this.Position);
      error(this.Err);
      return this.defaultId;
    } else if (error && options) {
      success(this.Position);
      error(this.Err);
      //use options
      return this.defaultId;
    }
    return this.defaultId;
  }
  geolocationclearWatch(id: number): void {
    //unregister location by using id
  }
}
