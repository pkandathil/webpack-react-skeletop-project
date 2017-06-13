import _ from 'lodash';
import './index.scss';
function component () {
  var moment = require('moment');
  console.log(moment().format());
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());