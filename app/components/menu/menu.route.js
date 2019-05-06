export function menuRouteConfig($routeProvider) {
  $routeProvider
    .when("/drugs", {
      template:"<drugs></drugs>"
    })
    .when("/drugs/:id", {
      template:"<drugs-detail></drugs-detail>"
    })
    .when("/stocks", {
      template:"<stocks></stocks>"
    })
    .when("/stocks/:id", {
      template:"<stocks-detail></stocks-detail>"
    })
    .otherwise({redirectTo: '/stocks'});
}