import controller from './commentFeature.controller';
import template from './commentFeature.template.html';

const component = {
  controller,
  template,
  bindings: {
    albumId: '<'
  }
};

export default component;
