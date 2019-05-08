export function DynamicFormController($scope) {
  $scope.templates = [{ 
      name: 'txt', url: 'components/dynamic-form/dynamic-form-text.html'
    },{ 
      name: 'slc', url: 'components/dynamic-form/dynamic-form-select.html'
    },{ 
      name: 'are', url: 'components/dynamic-form/dynamic-form-area.html'
    }
  ];

  $scope.getTemplate = function (type) {
    let position = $scope.templates.map(element => element.name).indexOf(type);
    return $scope.templates[position].url;
  }

  $scope.showRequiredError = function (component) {
    return $scope.dynamicForm[component] && 
          $scope.dynamicForm[component].$error.required && $scope.dynamicForm[component].$dirty
  }

}