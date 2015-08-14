angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('AuthCtrl', function($scope, AuthService) { 
  $scope.datos = {
    email: "", 
    password: ""
  }; 

  $scope.login = function(){
    AuthService.autorizar($scope.datos.email, $scope.datos.password)
  };
})

.controller('LoginNewCtrl', function($scope, UsuariosService, localStorageService) {
   $scope.datos = {
    email: "", 
    password: "",
    sexo: "",
    edad: ""
  }; 

  $scope.dato = "";
  
  $scope.crearUsuario = function(){
    UsuariosService.crear($scope.datos.email, $scope.datos.password, $scope.datos.sexo, $scope.datos.edad)
  };
  $scope.borrar = function(){
    UsuariosService.delete($scope.datos.email, $scope.datos.password, $scope.datos.sexo, $scope.datos.edad);
  };
  $scope.update = function(){
    UsuariosService.update('grhr@o.com-edad', '68');
  };
  $scope.read = function(){
    $scope.dato = UsuariosService.read($scope.datos.email);
    //UsuariosService.read('grhr@o.com-sexo');
    //UsuariosService.read('grhr@o.com-edad');
  };
})

.directive('dianaCreate', function(){
  return {
    transclude: true,
    
    templateUrl: 'templates/template.html'
  }
})