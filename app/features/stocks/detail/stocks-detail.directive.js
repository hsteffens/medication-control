export function stocksDetail() {
  let directive = {
    restrict: 'E',
    templateUrl: 'features/stocks/detail/stocks-detail.html',
    scope: {
    },
    controller: 'stocksDetailController'
  };

  return directive;
}