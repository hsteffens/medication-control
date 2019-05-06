export function stocks() {
  let directive = {
    restrict: 'E',
    templateUrl: 'features/stocks/stocks.html',
    scope: {
    },
    controller: 'stocksController'
  };

  return directive;
}