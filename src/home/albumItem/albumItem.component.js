import template from './albumItem.template.html';
import controller from './albumItem.controller.js';

const component = {
  controller,
  template,
  bindings: {
    albumData: '<',
    showComment:'&'
  }
};

export default component;
