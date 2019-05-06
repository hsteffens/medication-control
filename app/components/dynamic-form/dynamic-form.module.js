import { dynamicForm } from './dynamic-form.directive';
import { DynamicFormController } from './dynamic-form.controller';
export default angular
  .module('my-app.components.dynamicForm', [])
  .directive('dynamicForm', dynamicForm)
  .controller('dynamicFormController', DynamicFormController)
  .name;