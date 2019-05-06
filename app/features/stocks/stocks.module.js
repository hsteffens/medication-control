import stocksDetail from './detail/stocks-detail.module';

import { stocks } from './stocks.directive';
import { StocksController } from './stocks.controller';
import { StocksFactory } from './stocks.factory';
import { DrugsFactory } from '../drugs/drugs.factory';

export default angular
  .module('my-app.features.stocks', [stocksDetail])
  .directive('stocks', stocks)
  .controller('stocksController', StocksController)
  .factory('stocksFactory', StocksFactory)
  .factory('drugsFactory', DrugsFactory)
  .name;