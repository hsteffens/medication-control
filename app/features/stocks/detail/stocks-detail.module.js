import { stocksDetail } from './stocks-detail.directive';
import { StocksDetailController } from './stocks-detail.controller';

export default angular
  .module('my-app.features.stocks-detail', ['ngRoute'])
  .directive('stocksDetail', stocksDetail)
  .controller('stocksDetailController', StocksDetailController)
  .name;