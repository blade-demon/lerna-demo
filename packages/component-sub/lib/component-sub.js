'use strict';
const _ = require('lodash');
module.exports = componentSub;

function componentSub(a, b) {
    return _.subtract(a, b);
}
