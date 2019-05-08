export function feedback(){
  let directive = {
    restrict: 'E',
    templateUrl: 'components/feedback/feedback.html',
    scope: {
      class: '=',
      message: '=',
      visible: '='
    }
  };

  return directive;

}