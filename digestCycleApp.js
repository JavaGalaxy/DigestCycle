( function () {
 
  angular.module('CounterApp', [])
  .controller('CounterController', CounterController);

  CounterController.$inject = ['$scope'];

  function CounterController($scope) {

  	$scope.counter = 0;

  	$scope.showNumberOfWatchers = function () {

  		console.log("# of Watchers " +$scope.$$watchersCount);
  		return "Watchers are watching you";
  	}

  	$scope.countOnce = function () {
  		$scope.counter ++;
  		
  	}

  	$scope.$watch('counter', function(newValue, oldValue) {
  			
  	  console.log("old Value: ", oldValue);
  	  console.log("new Value: ", newValue);

  	})

  };

})()