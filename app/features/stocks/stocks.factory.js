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
        value: _getId(),
        show: false
      };
      
      return obj;
    }

    function _getId() {
      let id;
      if (stocks.length == 0) {
        id = 1;
      } else {
        id = stocks[stocks.length - 1].id.value + 1;
      }
      return id;
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
    let position = stocks.map(e => e.id.value).indexOf(parseInt(id));
    stocks.splice(position, 1);
  }

}
