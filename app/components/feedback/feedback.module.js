import { feedback } from './feedback.directive';

export default angular
  .module('my-app.components.feedback', [])
  .directive('feedback', feedback)
  .name;