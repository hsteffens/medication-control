export function HandlerController($scope) {
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

}