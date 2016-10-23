( function () {
 
  angular.module('CounterApp', [])
  .controller('CounterController', CounterController);

  CounterController.$inject = ['$scope', '$timeout'];

  function CounterController($scope, $timeout) {

  	$scope.counter = 0;

  	$scope.showNumberOfWatchers = function () {

  		console.log("# of Watchers " +$scope.$$watchersCount);
  		return "Watchers are watching you";
  	}

  	$scope.incrementOnce = function() {
  		$timeout(function () {
  			$scope.counter ++;
  			console.log("Counter incremented !");	
  		}, 500)
  	}

  	// $scope.incrementOnce = function () {
  	// 	setTimeout(function () {
  	// 	  $scope.$apply(function() {
  		  
  	// 		$scope.counter ++;
  	// 		console.log("Counter incremented !");		
  	// 		})
  	// 	}, 2000);
  		
  	// }

  	// $scope.incrementOnce = function () {
  	// 	setTimeout(function () {
  	// 		$scope.counter ++;
  	// 		$scope.$digest();
  	// 	}, 2000);


 	// $scope.$watch('counter', function(newValue, oldValue) {
  			
  // 	  console.log("old Value: ", oldValue);
  // 	  console.log("new Value: ", newValue);

  // 	}) 

  };

})()