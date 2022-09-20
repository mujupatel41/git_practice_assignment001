function Prime(number){
	let count_number = 0;
	for(let i = 0;i<number;i++){
		if(number%i==0){
			count_number++;
		}
	}
	if(count_number === 2){
		return true;
	}return false;
	
}
let ansr = Prime(13);
if(ans === true){
	console.log("Prime");
}else{
	console.log("Not Prime");
}