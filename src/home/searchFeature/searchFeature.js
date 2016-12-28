import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './searchFeature.component';
import service from '../albumItem/albumItem.service';


const searchFeature = angular
  .module('searchFeature', [uiRouter])
  .component('searchFeature', component)
  .service('AlbumItemService', service)
  .name;

export default searchFeature;
