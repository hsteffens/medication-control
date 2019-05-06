import stocks from './stocks/stocks.module';
import drugs from './drugs/drugs.module';

export default angular
  .module('my-app.features', [
    stocks,
    drugs
  ])
  .run(function () {
    'ngInject';

    console.log('Features modules loaded.');
  })
  .name;