angular.module('todoListApp', [])
 .controller('mainCtrl',function($scope){
     $scope.helloWorld = function(){
       console.log("Hello world function");  
     };

    });