angular.module('starter.routes', [])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // Rotas são criadas aqui:

  .state('home', {
    url: '/home',
    templateUrl: '../templates/home.html',
    controller: 'HomeCtrl'
  })


  // rota default
  $urlRouterProvider.otherwise('/home');

});