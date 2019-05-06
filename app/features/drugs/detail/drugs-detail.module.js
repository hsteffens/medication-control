import { drugsDetail } from './drugs-detail.directive';
import { DrugsDetailController } from './drugs-detail.controller';

export default angular
  .module('my-app.features.drugs-detail', ['ngRoute'])
  .directive('drugsDetail', drugsDetail)
  .controller('drugsDetailController', DrugsDetailController)
  .name;