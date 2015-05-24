jThree( function( j3 ) {

	$( "#loading" ).remove();

	j3("#mesh0").animate( { rotateY: "+=5" }, 500000 );

	j3.MobileVR();
	j3.Stereo();
//	j3.Stats();

},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );
