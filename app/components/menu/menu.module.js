import { menu } from './menu.directive';
import { menuRouteConfig } from './menu.route';
require("angular-route")

export default angular
  .module('my-app.components.menu', [
    'ngRoute'
  ])
  .directive('menu', menu)
  .config(menuRouteConfig)
  .name;