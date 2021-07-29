/**
 * @returns {this}
 */
Object.prototype.let = function(callback, ...args) {
  return callback(this, ...args);
};

/**
 * @returns {this}
 */
Object.prototype.also = function(callback, ...args) {
  callback(this);
  return this;
};
