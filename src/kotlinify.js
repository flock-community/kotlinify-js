export const pipe = (value, ...fn) => fn.reduce((acc, cur) => cur(acc), value);

class Chain {
  constructor(value) {
    this.value = value;
  }

  /**
   * @returns {Chain}
   */
  let(callback, ...args) {
    return new Chain(callback(this.value, ...args));
  }

  /**
   * @returns {Chain}
   */
  also(callback, ...args) {
    callback(this.value, ...args);
    return this;
  }

  get(callback, ...args) {
    return callback(this.value, ...args);
  }
}

export const chain = value => new Chain(value);
