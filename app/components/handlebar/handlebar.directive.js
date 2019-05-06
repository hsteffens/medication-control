import '../../scss/app/handlebar.scss'

export function handleBar(){
  let directive = {
    restrict: 'E',
    templateUrl: 'components/handlebar/handlebar.html',
    scope: {
      metadata: '='
    },
    controller: 'handlerController'
  };

  return directive;

}