angular.module('myApp',[])
    .controller('myController',function($scope) {
       $scope.name = "Raj";
       $scope.age = 22;
    })
    .directive('helloWorld', function() {
        return {
            template:'<input type="text" ng-model="nameToBeDisplayed"/>',
            scope: {
                nameToBeDisplayed: '<'
            },
            controller: function($scope) {
                // $scope.age = 22;
                console.log($scope.age);
            },
            link: function(scope,element,attributes) {
                console.log(scope,element,attributes);
            }
        }
    });