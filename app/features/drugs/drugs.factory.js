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
        value: drugs.length + 1,
        show: false
      };
      
      return obj;
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
    let position = drugs.map(e => e.id.value).indexOf(id);
    drugs.splice(position, 1);
  }

}
