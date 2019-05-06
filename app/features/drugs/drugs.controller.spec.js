describe('Drugs Controller', () => {
  beforeEach(angular.mock.module('my-app.features.drugs'));

  var  $rootScope, $compile, $element, drugsFactory;

  beforeEach(inject(function(_$rootScope_,  _$compile_, $templateCache, _drugsFactory_){
    $rootScope = _$rootScope_;
    $compile = _$compile_;

    drugsFactory = _drugsFactory_;

    expect(drugsFactory).toBeTruthy();

    $templateCache.put('features/drugs/drugs.html', '<handlelist metadata="metadata" title="title" headers="headers" items="items"></handlelist>');

    var $scope = $rootScope.$new();
    $element = $compile('<drugs></drugs>')($scope);

    expect($element).toBeDefined('$element');
    expect($element.controller).toBeDefined('$element.controller');

    $scope.$apply();
    applyChanges();
  }));


  it('verify selected item', function() {
    let drug = drugsFactory.create().name('Paracetamol').measurementUnit('ml').orientation('Duas vez por dia').build();
    drugsFactory.add(drug);
    drug = drugsFactory.create().name('Diclofenaco').measurementUnit('ml').orientation('Uma vez por dia').selected(true).build();
    drugsFactory.add(drug);
    expect(getScope().getSelectedItem()).toEqual(2);
  });

  it('remove selected item', function() {
    let drug = drugsFactory.create().name('Paracetamol').measurementUnit('ml').orientation('Duas vez por dia').selected(true).build();
    drugsFactory.add(drug);
    drug = drugsFactory.create().name('Diclofenaco').measurementUnit('ml').orientation('Uma vez por dia').build();
    drugsFactory.add(drug);
    expect(getScope().items.length).toEqual(2);
    expect(getScope().getSelectedItem()).toEqual(1);

    getScope().deleteItem();
    expect(getScope().items.length).toEqual(1);
    expect(getScope().items[0].name.value).toEqual('Diclofenaco');
  });


  function getScope() {
    return $element.isolateScope()
  }

  function applyChanges() {
    getScope().$apply()
  }
})
