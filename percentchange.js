function calcPercentChange(oldValue, newValue){

	var percentChange = ((newValue - oldValue)/ oldValue) * 100; 

	percentChange = Math.round(percentChange); 

	return percentChange; 
}
