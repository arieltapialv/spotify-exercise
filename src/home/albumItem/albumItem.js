import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './albumItem.component';
import service from './albumItem.service';


const albumItem = angular
  .module('albumItem', [uiRouter])
  .component('albumItem', component)
  .service('albumItemService', service)
  .name;

export default albumItem;
