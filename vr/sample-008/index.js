jThree(function(j3){

	$( "#loading" ).remove();

	j3.Trackball();
//	j3.MobileVR();
//	j3.Stereo();
	j3.Stats();

},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );
