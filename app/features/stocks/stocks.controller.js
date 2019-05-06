export function StocksController($scope, drugsFactory, stocksFactory) {
  'ngInject';
  $scope.title="Stocks";
  $scope.headers = ['Quantity','Name', 'Measurement unit', 'Orientation'];
  $scope.metadata = {};
  $scope.metadata.handlers = [{
      type: 'lnk', 
      redirect: function () {
        return 'stocks/0' 
      },
      label: 'Create',
      disabled: false,
      class: 'btn-info'
    }, {
      type: 'lnk', 
      redirect: function () {
        return 'stocks/' + $scope.getSelectedItem();
      }, 
      label: 'Update',
      disabled: false,
      class: 'btn-primary'
    }, {
      type: 'btn', 
      action: function () {
        $scope.deleteItem();
      }, 
      label: 'Delete',
      disabled: false,
      class: 'btn-danger'
    }
  ];

  $scope.items = stocksFactory.stocks;
  $scope.getSelectedItem = function (){
    let position = $scope.items.map(element => element.selected).indexOf(true);
    return $scope.items[position] ? $scope.items[position].id.value : 0;
  }

  $scope.deleteItem = function (){
    stocksFactory.remove($scope.getSelectedItem());
  }
}