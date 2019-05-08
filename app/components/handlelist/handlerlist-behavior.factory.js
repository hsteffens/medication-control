export function HandleListBehaviorFactory() {
  'ngInject';

  return {
    create: creator
  };
  

  function creator(scope) {
    scope.$on('onStateChange', function (event, state) {
      scope.$parent.refreshMetadata();
      scope.metadata.events.onChangeState();
    });
  }
}