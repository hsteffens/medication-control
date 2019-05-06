import { handleBar } from './handlebar.directive';
import { HandlerController } from './handlerbar.controller';

export default angular
  .module('my-app.components.handlebar', [])
  .directive('handlebar', handleBar)
  .controller('handlerController', HandlerController)
  .name;