angular.module('starter', ['ionic', 'starter.controllers', 'ionic.contrib.ui.tinderCards'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

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
