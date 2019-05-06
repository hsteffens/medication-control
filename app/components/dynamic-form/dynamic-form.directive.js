import '../../scss/app/dynamic-form.scss';

export function dynamicForm(){
  let directive = {
    restrict: 'E',
    templateUrl: 'components/dynamic-form/dynamic-form.html',
    scope: {
      metadata: '='
    },
    controller: 'dynamicFormController'
  };

  return directive;
}