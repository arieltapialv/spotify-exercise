import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './albumItem.component';
import service from './albumItem.service';


const albumItem = angular
  .module('albumItem', [uiRouter])
  .service('albumItemService', service)
  .component('albumItem', component)
  .name;

export default albumItem;
