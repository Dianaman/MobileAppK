angular.module('starter.filters', [])
.filter('change', function(){
	return function(input, uppercase) {
		
	   	input = input || '';
	    var out = "";
	    for (var i = 0; i < input.length; i++) {
	      out = input.charAt(i) + out;
	    }
	    // conditional based on optional argument
	    if (uppercase) {
	      out = out.toUpperCase();
	    }
	    console.log(out);
    	return out+"joel";
  	};



  /*
	var i;
	for (i=0; i<change.length; i++){
		if(change[i]=='/'){
			change[i] = '-';
		}
	}
	return change;*/
})