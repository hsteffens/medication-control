import drugsDetail from './detail/drugs-detail.module';

import { drugs } from './drugs.directive';
import { DrugsController } from './drugs.controller';
import { DrugsFactory } from './drugs.factory';

export default angular
  .module('my-app.features.drugs', [drugsDetail])
  .directive('drugs', drugs)
  .controller('drugsController', DrugsController)
  .factory('drugsFactory', DrugsFactory)
  .name;