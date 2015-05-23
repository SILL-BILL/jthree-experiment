jThree(function(j3){

	$("#loading").remove();

	j3("#mesh1").animate( { rotateY: "+=500" }, 500000 );
	j3("#mesh2").animate( { rotateY: "+=500" }, 500000 );

	j3.Stats();
    j3.MobileVR();
	
},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );