export function drugsDetail() {
  let directive = {
    restrict: 'E',
    templateUrl: 'features/drugs/detail/drugs-detail.html',
    scope: {
    },
    controller: 'drugsDetailController'
  };

  return directive;
}