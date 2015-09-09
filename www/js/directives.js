angular.module('starter.directives', [])

.directive('dianaCreate', function(){
  return {
    transclude: true,
    
    templateUrl: 'templates/template.html'
  }
})

.directive('showServer', function(RestfullService, DatosLocalService){
  return {
    transclude: true,
    templateUrl: 'templates/serverphp.html',
    link: function(element, attr){
      var lang_id = RestfullService.getServer(1, "hgriugbh");
      console.log("Me devolvio lang_id");
      //ar msg = DatosLocalService.get(lang_id, lang_msg);
      /*element.css(
        'color: green'
      )*/

      //ideoma_code = RestfullService.getIdeomaCode --> 2, ingles
      //que_mensaje_code = RestfullService.getRespuestaDelMetodo -> code:b
      // DatosLocalService.traemeMensaje(ideomaCode,que_mensaje_code)
    }
  }
})

.directive('crearServer', function(RestfullService){
	return {
		transclude: true,
		link: function(){
			console.log("Entro en la directiva");
			var create_Serv = RestfullService.setServer(1, "Cristian", "vf5d1b");
		}
	}
})