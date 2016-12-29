import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './home.component';
import service from './home.service';
import albumItem from './albumItem/albumItem';
import searchFeature from './searchFeature/searchFeature';
import commentFeature from './commentFeature/commentFeature';

const homeMain = angular
  .module('homeMain', [uiRouter, albumItem, searchFeature, commentFeature])
  .component('home', component)
  .service('HomeService', service)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider.state('home', {
      url: '/',
      template: '<home></home>'

    });
  })
  .name;

export default homeMain;
