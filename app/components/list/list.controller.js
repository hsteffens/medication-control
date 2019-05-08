export function listController($scope) {
  'ngInject';

  $scope.loadValues = function (item) {
    return processColumn([], item);
  }

  function processColumn(columns, item){
    Object.values(angular.copy(item)).forEach(element => {
      if (element.show) {
        if (element.value instanceof Object) {
          return processColumn(columns, element.value);
        } else {
          columns.push(element.value);
        }
      }
    });

    return columns;
  }

  $scope.onChange = function (selectedItem) {
    $scope.items.forEach(item => item.selected = false);
    selectedItem.selected = !selectedItem.selected;

    $scope.$emit('onStateChange', true);
  }
  
}