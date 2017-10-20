var app = angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("server", {
            url: "/server:id",
            templateUrl: "./App/View/secondCar.html",
            controller: "myController"
        });
    $urlRouterProvider.otherwise("/server");
});