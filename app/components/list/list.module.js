import { list } from './list.directive';
import { listController } from './list.controller';

export default angular
  .module('my-app.components.list', [])
  .directive('list', list)
  .controller('listController', listController)
  .name;