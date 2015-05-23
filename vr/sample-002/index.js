jThree(function(j3){

	$("#loading").remove();

	j3.Stats();

    j3.MobileVR();
    j3.Stereo();
    j3.MMD.sync("audio");

	$("audio")[0].volume = .5;
	
},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );