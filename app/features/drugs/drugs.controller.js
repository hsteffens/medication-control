export function DrugsController($scope, drugsFactory) {
  'ngInject';
  $scope.title="Drugs";
  $scope.headers = ['Name', 'Measurement unit', 'Orientation'];
  $scope.metadata =  {};
  $scope.metadata.handlers = [{
      type: 'lnk', 
      redirect: function () {
        return 'drugs/0' 
      },
      label: 'Create',
      disabled: false,
      class: 'btn-info'
    }, {
      type: 'lnk', 
      redirect: function () {
        return 'drugs/' + $scope.getSelectedItem();
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

  $scope.items = drugsFactory.drugs;
  $scope.getSelectedItem = function (){
    let position = $scope.items.map(element => element.selected).indexOf(true);
    return $scope.items[position] ? $scope.items[position].id.value : 0;
  }

  $scope.deleteItem = function (){
    drugsFactory.remove($scope.getSelectedItem());
  }
}