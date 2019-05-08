export function DrugsDetailController($scope, $routeParams, drugsFactory) {
  'ngInject';

  function _getDrug(){
    let position = drugsFactory.drugs.map(element => element.id.value).indexOf(parseInt($routeParams.id));
    return drugsFactory.drugs[position];
  }

  $scope.drug = _getDrug();
  $scope.measurementUnits = ['ml', 'cl', 'dl', 'l', 'dal', 'hl', 'kl'];


  $scope.metadata =  {};
  $scope.metadata.dataInfo = _getDataInfoMetada();
  $scope.metadata.handlers = [{
    id: 'submit',
    type: 'lnk', 
    action: submit,
    redirect: function (){
      return 'drugs'
    },
    label: 'Submit',
    disabled: function (){
      return false;
    },
    class: 'btn-primary'
  }, {
    id: 'clear',
    type: 'btn', 
    action: function () {
      $scope.metadata.dataInfo = _getDataInfoMetada();
    }, 
    label: 'Clear',
    disabled: function (){
      return false;
    },
    class: 'btn-light'
  }
];

  function _getDataInfoMetada() {
    return [{
              type: 'txt', 
              model: $scope.drug ? $scope.drug.name.value : '', 
              label: 'Nome', 
              placeholder: 'Informe o nome do medicamento'
            },{
              type: 'slc', 
              model: $scope.drug ?  $scope.drug.measurementUnit.value: $scope.measurementUnits[0], 
              label: 'Unidade de medida', 
              placeholder: 'Informe a unidade de medida', 
              option: $scope.measurementUnits
            },{
              type: 'are', 
              model: $scope.drug ?  $scope.drug.orientation.value: '', 
              label: 'Orientação', 
              placeholder: 'Informe a orientação'
            } 
          ];
  }

  function submit () {
    let name, measurementUnit, orientation ;

    $scope.metadata.dataInfo.forEach(element => {
      if (element.label === "Nome"){
        name = element.model;
      } else
      if (element.label === "Unidade de medida"){
        measurementUnit = element.model;
      } else
      if (element.label === "Orientação"){
        orientation = element.model;
      }
    });

    let drug = drugsFactory.create().name(name).measurementUnit(measurementUnit).orientation(orientation).build();
    if (parseInt($routeParams.id) > 0 ) {
      drugsFactory.remove($routeParams.id);
    }
  
    drugsFactory.add(drug);
  }

}