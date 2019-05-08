export function HandleListController($scope, handleListBehaviorFactory) {
  'ngInject';

  $scope.handleListBehavior = handleListBehaviorFactory.create($scope);
}