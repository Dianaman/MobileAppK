angular.module('starter.directives', [])

.directive('dianaCreate', function(){
  return {
    transclude: true,
    
    templateUrl: 'templates/template.html'
  }
})
.directive('showServer', function(RestfullService, Idiomas){
  return {
    transclude: true,
    templateUrl: 'templates/serverphp.html',
    link: function(element, attr){
      var lang_id = RestfullService.getServer(Idiomas.es, "hgriugbh", "fhnjmn");
      console.log("Me devolvio lang_id");
    }
  }
})

.directive('crearServer', function(RestfullService, Idiomas){
	return {
		transclude: true,
		link: function(){
			console.log("Entro en la directiva");
			var create_Serv = RestfullService.setServer(Idiomas.es, "Cristian", "vf5d1b");
		}
	}
})

.directive('removeServer', function(RestfullService, Idiomas){
  return {
    transclude: true,
    link: function(){
      console.log("Entro en la directiva");
      var remove_Serv = RestfullService.remServer(Idiomas.pv, "Cristian", "vf5d1b");
    }
  }
})

.directive('modifyServer', function(RestfullService, Idiomas){
  return {
    transclude: true,
    link: function(){
      console.log("Entro en la directiva");

      var modify_Serv = RestfullService.modServer(Idiomas.es, "Cristian", "vf5d1b");
    }
  }
})