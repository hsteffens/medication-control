export function DrugsController($scope, drugsFactory, stocksFactory) {
  'ngInject';
  $scope.title="Drugs";
  $scope.headers = ['Name', 'Measurement unit', 'Orientation'];
  $scope.feedbackVisible = false;
  $scope.metadata =  {};
  $scope.items = drugsFactory.drugs;

  $scope.getSelectedItem = function (){
    let position = $scope.items.map(element => element.selected).indexOf(true);
    return $scope.items[position] ? $scope.items[position].id.value : 0;
  }



  $scope.deleteItem = function (){
    $scope.feedbackVisible = true;
    $scope.feedbackStyle= "alert alert-success";
    $scope.feedbackMessage = "Sucesso";
    stocksFactory.stocks.forEach(stock => _verifyConstraint(stock.drug.value.id.value, $scope.getSelectedItem()));
    if ($scope.feedbackMessage === "Sucesso") {
      drugsFactory.remove($scope.getSelectedItem());
    }
  }

  function _disabledAction(){
    return  $scope.getSelectedItem() < 1;
  }

  function _verifyConstraint(idUsedDrugInStock, idDrug) {
    if(idUsedDrugInStock == idDrug) {
      $scope.feedbackStyle= "alert alert-danger";
      $scope.feedbackMessage = "Medicamento vinculado a um item de estoque remove-lo antes do medicamento";
    }
  }

  $scope.refreshMetadata = function () {
    $scope.metadata.handlers = [{
        id: 'create',
        type: 'lnk', 
        redirect: function () {
          return 'drugs/0' 
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
          return 'drugs/' + $scope.getSelectedItem();
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

  $scope.refreshMetadata();
}