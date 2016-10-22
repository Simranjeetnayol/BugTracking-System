app.config(function ($routeProvider) {
    $routeProvider .when("/tester", {
            templateUrl:'tester.html',
            controller:'testerCtrl'
        })
        .when("/developer", {
            templateUrl: 'developer.html',
            controller: 'developerCtrl'
        })
        .otherwise({
            redirectTo: "/"
        })
});
