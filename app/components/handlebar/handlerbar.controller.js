export function HandlerController($scope, $element, HandlerBarDOMHandler) {
  $scope.templates = [{ 
      name: 'btn', url: 'components/handlebar/handlerbar-button.html'
    },{ 
      name: 'lnk', url: 'components/handlebar/handlerbar-link.html'
    }
  ];

  $scope.getTemplate = function (type) {
    let position = $scope.templates.map(element => element.name).indexOf(type);
    return $scope.templates[position].url;
  }

  $scope.metadata.events = {
    onChangeState: function () {
      setTimeout(()=> {
        $scope.DOMHandler = new HandlerBarDOMHandler($element, $scope);
      }, 500);
    }
  };

  $scope.metadata.events.onChangeState();

}