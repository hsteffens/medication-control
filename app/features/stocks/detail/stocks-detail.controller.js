export function StocksDetailController($scope, $routeParams, drugsFactory, stocksFactory) {
  'ngInject';

  function _getStock(){
    let position = stocksFactory.stocks.map(element => element.id.value).indexOf(parseInt($routeParams.id));
    return stocksFactory.stocks[position];
  }

  $scope.stock = _getStock();

  $scope.metadata =  {};
  $scope.metadata.dataInfo = _getDataInfoMetada();
  $scope.metadata.handlers = [{
      id: 'submit',
      type: 'lnk', 
      action: submit,
      redirect: function (){
        return 'stocks'
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
              model: $scope.stock ? $scope.stock.quantity.value : '', 
              label: 'Quantidade', 
              placeholder: 'Informe a quantidade do medicamento'
            },{
              type: 'slc', 
              model: $scope.stock ?  $scope.stock.drug.value.name.value: '', 
              label: 'Remedio', 
              placeholder: 'Informe o Remedio', 
              option: _getDrugs()
            }
          ];
  }

  function _getDrugs(){
    let drugNames = [];
    drugsFactory.drugs.forEach(drug => drugNames.push(drug.name.value));
    return drugNames;
  }

  function submit () {
    let quantity, drugName;

    $scope.metadata.dataInfo.forEach(element => {
      if (element.label === "Quantidade"){
        quantity = element.model;
      } else
      if (element.label === "Remedio"){
        drugName = element.model;
      } 
    });
    let position = drugsFactory.drugs.map(element => element.name.value).indexOf(drugName);

    let stock = stocksFactory.create().quantity(quantity).drug(drugsFactory.drugs[position]).build();
    if (parseInt($routeParams.id) > 0 ) {
      stocksFactory.remove($routeParams.id);
    }
  
    stocksFactory.add(stock);
  }
}