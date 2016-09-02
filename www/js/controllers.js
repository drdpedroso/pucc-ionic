angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
  $scope.cards = [
    {name:"https://github.com/drdpedroso/ionic-ion-tinder-cards/blob/master/example/www/img/pic2.png?raw=true"},
    {name:"https://github.com/drdpedroso/ionic-ion-tinder-cards/blob/master/example/www/img/pic4.png?raw=true"}
  ];

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.cardSwiped = function(index) {
    var newCard = // new card data
    $scope.cards.push(newCard);
  };
})
