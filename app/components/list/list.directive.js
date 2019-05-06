import '../../scss/app/list.scss'

export function list(){
  let directive = {
    restrict: 'E',
    templateUrl: 'components/list/list.html',
    scope: {
      title: '=',
      headers: '=',
      items: '='
    },
    controller: 'listController'
  };

  return directive;
}