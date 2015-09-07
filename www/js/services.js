angular.module('starter.services', ['LocalStorageModule'])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data

  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    status: 'online',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    status: 'offline',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    status: 'online',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    status: 'online',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    status: 'offline',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('AuthService', function(){
  return {
    autorizar: function(email, password){
      console.log('llego a autorizar');
      if(email == 'diana@hotmail.com' && 
        password == '123')
      {
        console.log(email);
      }
      else 
      {
        console.log('ERROR');
      }
    }
  }
})

.factory('UsuariosService', function(localStorageService){
  var usuarios = [{
    id: 0,
    email: 'eee@c.com',
    password: 'ee55',
    sexo: 'Masculino',
    edad: 19,
    fecha: '19-08-1876',
  }];

  return {
    crear: function(email, password, sexo, edad, fecha){

      var arrFecha = fecha.split("");
      for(var i=0; i<fecha.length; i++){
        if(arrFecha[i]=='/'){
         arrFecha[i] = '-';
        }
       } 
      fecha = arrFecha.join("");

      ultimo_id_usuarios = localStorageService.get('ultimo_id_usuarios');
      if( ultimo_id_usuarios == null){
        ultimo_id_usuarios = 0;
      }
      else {
        ultimo_id_usuarios = ultimo_id_usuarios +1;
      }
      localStorageService.set('ultimo_id_usuarios', ultimo_id_usuarios);
      
      var usuarios={
        id: ultimo_id_usuarios,
        email: email,
        password: password,
        sexo: sexo,
        edad: edad,
        fecha: fecha
      };

      /*for (var i=0; i<usuarios.length; i++){
        if(usuarios[i].email == email){
          usuarios[i].password = password;
          usuarios[i].sexo = sexo;
          usuarios[i].edad = edad;
          usuarios[i].fecha = fecha;
          console.log("Encontro id");
          var indice = i;
          break;
        }
        
      }
      if(i==usuarios.length){
        usuarios[i].id = i;
        usuarios[i].password = password;
        usuarios[i].sexo = sexo;
        usuarios[i].edad = edad;
        usuarios[i].fecha = fecha;
        console.log("Creo id");
        var indice = i-1;
      }*/

      console.log(i, email, password, sexo, edad, fecha);

      //return localStorageService.set('usuarios'+indice, usuarios[i]);
      //localStorageService.set('usuarios', usuarios);
      console.log(localStorageService.get("usuarios"));
      
      


      if( localStorageService.get("usuarios") == null){
         var colUsuario = [];

         colUsuario.push(usuarios);
      }
      else
      { 
        var colUsuario = localStorageService.get("usuarios");

        colUsuario.push(usuarios);
      }

      localStorageService.set('usuarios', colUsuario);

    },
    delete: function(idUsuario){
      

      for(var i=0; i<localStorageService.get("usuarios").length; i++){
        var usuarios = localStorageService.get("usuarios");
        if(idUsuario == usuarios[i].email) {
          //localStorageService.remove(usuarios[i].email);
          console.log("Usuario " + usuarios[i].email + " borrado"); 
          usuarios.splice(i, 1);
          localStorageService.set("usuarios", usuarios);
        
        }
      }
    },
    update: function(email, password, sexo, edad, fecha){
      var usuarios = localStorageService.get("usuarios");
      
      for(var i=0; i<localStorageService.get("usuarios").length; i++){
        

        if(email == usuarios[i].email){
          if(password != ''){
            usuarios[i].password = password;
          }
          if(sexo != ''){
            usuarios[i].sexo = sexo;
          }
          if(edad != ''){
            usuarios[i].edad = edad;
          }
          if(fecha != ''){
            var arrFecha = fecha.split("");
            for(var l=0; l<fecha.length; l++){
              if(arrFecha[l]=='/'){
               arrFecha[l] = '-';
              }
            } 
            usuarios[i].fecha = arrFecha.join("");
          }
          console.log("Usuario "+usuarios[i].email+ " actualizado");
          usuarios.splice(i, 1, usuarios[i]);
          localStorageService.set("usuarios", usuarios);
          break;
        }
      }
      if(i==localStorageService.get("usuarios").length){
        console.log("No se encontro el usuario");
      }

    },
    read: function(idUsuario){
      //localStorageService.get(idUsuario);
      //console.log(localStorageService.get("usuarios").length);
      var usuarios = localStorageService.get("usuarios")
      console.log();

     for (var i=0; i<localStorageService.get("usuarios").length; i++){
      
      if(idUsuario == usuarios[i].email){
        console.log(usuarios[i].id, 
          usuarios[i].email, 
          usuarios[i].password, 
          usuarios[i].sexo, 
          usuarios[i].edad, 
          usuarios[i].fecha);
        break;
      }
     }

     if (i==localStorageService.get("usuarios").length){
      console.log("No se encontro el usuario");
     }

    }
  }
})

.factory('RestfullService', function($http){
  return {
    post: function(usuario, contra){
      var ruta = "signup";
      $http.post("http://localhost/WebAppK/servicio_restfull.php", 
        {"usuario": usuario, "contra": contra, "ruta": ruta})
      .then(function(response) {
        console.log(response);
        document.getElementById("serverid").innerHTML = response.data["msg"] + ' ' + response.data["user"];
      });
    }
    idioma: function(){
      var langUrl = "http://localhost/WebAppK/server_language.php";
      var lang = 2;
      var code = 'b';
      
    }
  }
})