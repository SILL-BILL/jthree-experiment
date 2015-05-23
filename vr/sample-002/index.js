jThree(function(j3){

	$("#loading").remove();

	j3.Stats();

    j3.MobileVR();
	
},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );