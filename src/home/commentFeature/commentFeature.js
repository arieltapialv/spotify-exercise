import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './commentFeature.component';
import service from './commentFeature.service';


const commentFeature = angular
  .module('commentFeature', [uiRouter])
  .component('commentFeature', component)
  .service('CommentFeatureService', service)
  .name;

export default commentFeature;
