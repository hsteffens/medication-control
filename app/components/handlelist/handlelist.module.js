import { handleList } from './handlelist.directive';
import { HandleListController } from './handlelist.controller';

export default angular
  .module('my-app.components.handlelist', [])
  .directive('handlelist', handleList)
  .controller('handleListController', HandleListController)
  .name;