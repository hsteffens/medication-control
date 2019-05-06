export function handleList(){
  let directive = {
    restrict: 'E',
    templateUrl: 'components/handlelist/handlelist.html',
    scope: {
      metadata: '=',
      title: '=',
      headers: '=',
      items: '='
    },
    controller: 'handleListController'
  };

  return directive;
}