export function StocksFactory() {
  'ngInject';

  var stocks = [];

  return {
    stocks: stocks,
    create: creator,
    add: addStock,
    remove: removeStock
  };

  function creator() {
    let obj = {};
    let builder = {
      build       : build,
      quantity    : quantity,
      drug        : drug,
      selected    : selectedItem
    };

    return builder;

    function build() {
      obj.id = {
        value: stocks.length + 1,
        show: false
      };
      
      return obj;
    }

    function quantity(value) {
      obj.quantity = {
        value: value,
        show: true
      };
      return builder;
    }

    function drug(value) {
      obj.drug = {
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

  function addStock(stock) {
    stocks.push(stock);
  }

  function removeStock(id) {
    let position = stocks.map(e => e.id.value).indexOf(id);
    stocks.splice(position, 1);
  }

}
