describe('Stocks Controller', () => {
  beforeEach(angular.mock.module('my-app.features.stocks'));

  var  $rootScope, $compile, $element, stocksFactory, drugsFactory;

  beforeEach(inject(function(_$rootScope_,  _$compile_, $templateCache, _stocksFactory_, _drugsFactory_){
    $rootScope = _$rootScope_;
    $compile = _$compile_;

    stocksFactory = _stocksFactory_;
    drugsFactory = _drugsFactory_;

    expect(stocksFactory).toBeTruthy();
    expect(drugsFactory).toBeTruthy();

    $templateCache.put('features/stocks/stocks.html', '<handlelist metadata="metadata" title="title" headers="headers" items="items"></handlelist>');

    var $scope = $rootScope.$new();
    $element = $compile('<stocks></stocks>')($scope);

    expect($element).toBeDefined('$element');
    expect($element.controller).toBeDefined('$element.controller');

    $scope.$apply();
    applyChanges();
  }));


  it('verify selected item', function() {
    let drug = drugsFactory.create().name('Paracetamol').measurementUnit('ml').orientation('Duas vez por dia').build();
    drugsFactory.add(drug);
    let stock = stocksFactory.create().quantity(12).drug(drug).build();
    stocksFactory.add(stock);
    stock = stocksFactory.create().quantity(15).drug(drug).selected(true).build();
    stocksFactory.add(stock);
    expect(getScope().getSelectedItem()).toEqual(2);
  });

  it('remove selected item', function() {
    let drug = drugsFactory.create().name('Paracetamol').measurementUnit('ml').orientation('Duas vez por dia').build();
    drugsFactory.add(drug);
    let stock = stocksFactory.create().quantity(12).drug(drug).build();
    stocksFactory.add(stock);
    stock = stocksFactory.create().quantity(15).drug(drug).selected(true).build();
    stocksFactory.add(stock);
    expect(getScope().items.length).toEqual(2);
    expect(getScope().getSelectedItem()).toEqual(2);

    getScope().deleteItem();
    expect(getScope().items.length).toEqual(1);
    expect(getScope().items[0].quantity.value).toEqual(12);
  });


  function getScope() {
    return $element.isolateScope()
  }

  function applyChanges() {
    getScope().$apply()
  }
})
