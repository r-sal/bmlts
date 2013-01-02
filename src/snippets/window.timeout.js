(function loop(){
	console.warn('----------------------------------------------');
	console.warn('1. testing color X');

	
	console.warn('2. about to timeout');
	setTimeout(function(){
		console.warn('-executing loop()');		
		loop();
	}, 9000);
	
	console.warn('after loop()');
})(); 