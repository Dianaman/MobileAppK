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
      
      var colUsuario = [];


      if( localStorageService.get("usuarios") == null){
         colUsuario.push(usuarios);
      }else
      { 
        colUsuario.push(localStorageService.get("usuarios"));
        colUsuario.push(usuarios);

      }

      localStorageService.set('usuarios', colUsuario);

    },
    delete: function(idUsuario){
      var userPw = idUsuario + '-pw';
      var userSexo = idUsuario + '-sexo';
      var userEdad = idUsuario + '-edad';    
      var userFecha = idUsuario + '-fecha';     

      console.log('Llego a borrar');

      return localStorageService.remove(userPw),
        localStorageService.remove(userSexo),
        localStorageService.remove(userEdad),
        localStorageService.remove(userFecha);

    },
    update: function(idUsuario, valor){
      console.log('Llego a actualizar');
      if(isNaN(valor)){
        var variable = idUsuario + '-edad';
      }
      else if(valor == "Femenino" || valor == "Masculino"){
        var variable = idUsuario + '-sexo';        
      }
      else {
        var variable = idUsuario + '-pw';
      }
      return localStorageService.set(variable, valor);
    },
    read: function(idUsuario){
      //localStorageService.get(idUsuario);
     return localStorageService.get(idUsuario);
    }
  }
})
