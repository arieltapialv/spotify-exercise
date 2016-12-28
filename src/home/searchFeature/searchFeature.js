import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './searchFeature.component';
import service from './searchFeature.service';


const searchFeature = angular
  .module('searchFeature', [uiRouter])
  .component('searchFeature', component)
  .service('SearchFeatureService', service)
  .name;

export default searchFeature;
