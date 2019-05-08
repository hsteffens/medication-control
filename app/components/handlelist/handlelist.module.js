import { handleList } from './handlelist.directive';
import { HandleListController } from './handlelist.controller';

import { HandleListBehaviorFactory } from './handlerlist-behavior.factory';

export default angular
  .module('my-app.components.handlelist', [])
  .directive('handlelist', handleList)
  .controller('handleListController', HandleListController)
  .factory('handleListBehaviorFactory', HandleListBehaviorFactory)
  .name;