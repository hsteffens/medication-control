export function StocksController($scope, stocksFactory) {
  'ngInject';
  $scope.title="Stocks";
  $scope.headers = ['Quantity','Name', 'Measurement unit', 'Orientation'];
  $scope.metadata = {};

  $scope.items = stocksFactory.stocks;
  $scope.getSelectedItem = function (){
    let position = $scope.items.map(element => element.selected).indexOf(true);
    return $scope.items[position] ? $scope.items[position].id.value : 0;
  }

  $scope.deleteItem = function (){
    stocksFactory.remove($scope.getSelectedItem());
  }

  $scope.refreshMetadata = function () {
    $scope.metadata.handlers = [{
        id: 'create',
        type: 'lnk', 
        redirect: function () {
          return 'stocks/0' 
        },
        label: 'Create',
        disabled: function (){
          return false;
        },
        class: 'btn-info'
      }, {
        id: 'update',
        type: 'lnk', 
        redirect: function () {
          return 'stocks/' + $scope.getSelectedItem();
        }, 
        label: 'Update',
        disabled: _disabledAction,
        class: 'btn-primary'
      }, {
        id: 'delete',
        type: 'btn', 
        action: function () {
          $scope.deleteItem();
        }, 
        label: 'Delete',
        disabled: _disabledAction,
        class: 'btn-danger'
      }
    ];
  }

  function _disabledAction(){
    return  $scope.getSelectedItem() < 1;
  }

  $scope.refreshMetadata();
}