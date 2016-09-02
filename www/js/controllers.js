angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
  $scope.cards = [
    {name:"111111"},
    {name:"222222"}
  ];

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.cardSwiped = function(index) {
    var newCard = // new card data
    $scope.cards.push(newCard);
  };
})
