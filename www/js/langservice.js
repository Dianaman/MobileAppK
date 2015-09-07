angular.module('local.services', [])

.factory('DatosLocalService', function(){
	var idiomas = [
		{
			 code: 1,
			 m: 'Ehhhh!! Todo bien guachin?',
			 m_e: 'No lokooo, la cagaste!!',
		},
		{
			 code: 2,
			 m: 'Welcome to the jungle',
			 m_e: 'Something really bad is going on here!'
		},
		{
			 code: 3
			 m: 'Beep',
			 m_e: 'Beeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...'
		}
	];
	return {
		get: function(langId){
			return idiomas[langId].m;
		}
	};
})
