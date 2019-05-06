export function drugs() {
  let directive = {
    restrict: 'E',
    templateUrl: 'features/drugs/drugs.html',
    scope: {
    },
    controller: 'drugsController'
  };

  return directive;
}