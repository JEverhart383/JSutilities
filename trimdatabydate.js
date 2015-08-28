function trimData(data, startDate, endDate){

	var trimmedData = []; 

			//adjust start and end dates for 2 week window 
			startDate = new Date(startDate); 
			startDate = new Date(startDate - 1209600000); 

			endDate = new Date(endDate); 
			endDate = new Date(endDate + 1209600000); 

		for (var i = 0; i < data.length; i++){
				if (new Date(data[i].date) >= startDate && new Date(data[i].date) <= endDate){
					trimmedData.push(data[i]); 
				}
			}
	return trimmedData;
}
