export function DrugsFactory() {
  'ngInject';

  var drugs = [];

  return {
    drugs: drugs,
    create: creator,
    add: addDrug,
    remove: removeDrug
  };

  function creator() {
    let obj = {};
    let builder = {
      build               : build,
      name                : name,
      measurementUnit     : measurementUnit,
      orientation         : orientation,
      selected            : selectedItem
    };

    return builder;

    function build() {
      obj.id = {
        value: _getId(),
        show: false
      };
      
      return obj;
    }

    function _getId() {
      let id;
      if (drugs.length == 0) {
        id = 1;
      } else {
        id = drugs[drugs.length - 1].id.value + 1;
      }
      return id;
    }

    function name(value) {
      obj.name = {
        value: value,
        show: true
      };
      return builder;
    }

    function measurementUnit(value) {
      obj.measurementUnit = {
        value: value,
        show: true
      };
      return builder;
    }

    function orientation(value) {
      obj.orientation = {
        value: value,
        show: true
      };
      return builder;
    }

    function selectedItem(value) {
      obj.selected = value;
      return builder;
    }
  }

  function addDrug(drug) {
    drugs.push(drug);
  }

  function removeDrug(id) {
    let position = drugs.map(e => e.id.value).indexOf(parseInt(id));
    drugs.splice(position, 1);
  }

}
