'use strict';

var boolean = function (value) {
  if (typeof value === 'string') {
    return /^(true|t|yes|y|1)$/i.test(value);
  }

  if (typeof value === 'number') {
    return value === 1;
  }

  if (typeof value === 'boolean') {
    return value;
  }

  return false;
};

module.exports = boolean;
