angular.module('todoListApp', [])
 .controller('mainCtrl',function($scope){
     $scope.helloWorld = function(){
       console.log("Hello world function");  
     };
    $scope.todos = [
    
      {"name":"clean the house"},
      {"name":"code"},
      {"name":"groceries"},
      {"name":"pay bills"},
      {"name":"have fun"},

    ]

    });