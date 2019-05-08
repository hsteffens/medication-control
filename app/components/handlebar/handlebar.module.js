import { handleBar } from './handlebar.directive';
import { HandlerController } from './handlerbar.controller';
import { HandlerBarDOMHandlerFactory } from './handlerbar-dom-handler'

export default angular
  .module('my-app.components.handlebar', [])
  .directive('handlebar', handleBar)
  .controller('handlerController', HandlerController)
  .factory('HandlerBarDOMHandler', HandlerBarDOMHandlerFactory)
  .name;