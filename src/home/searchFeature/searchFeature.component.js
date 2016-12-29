import controller from './searchFeature.controller';
import template from './searchFeature.template.html';

const component = {
  controller,
  template,
  bindings: {
    onSearch: '&'
  }
};

export default component;
