var Current_step ='x';
var Game_over= false;
function step(row,column){
	console.log(Current_step);

	if (document.getElementById('r'+ row + 'c' + column).innerHTML == '' && Game_over== false){
		document.getElementById('r'+ row + 'c' + column).innerHTML = Current_step;

		check(row,column);
		if (Current_step == 'x') {
			Current_step ='o';
		}else {
			Current_step = 'x';
		}

	}else{
		return;
	}

}
function check_row(row){
	var result=true;
	for (var i=0;i<4;i++){
		result = result && (document.getElementById('r' + row +'c' + i).innerHTML == Current_step);
	}
	return result;
}

function check_column(column){
	var result=true;
	for (var i=0;i<4;i++){
		result = result && (document.getElementById('r'+ i + 'c' + column).innerHTML == Current_step);
	}
	return result;
}

function check_diagonal(){
	var result=true;
	for (var i=0;i<4;i++){
		result = result && (document.getElementById('r'+ i + 'c' + i).innerHTML == Current_step);
	}
	return result;
}

function check_diagonal_2(){
	var result=true;
	for (var i=0;i<4;i++){
		var j=3-i;
		result = result && (document.getElementById('r'+ i + 'c' + j).innerHTML == Current_step);
	}
	return result;
}
function makeCounter() {
  var currentCount = 0;
  return function() {
    currentCount++;
    return currentCount;
  };
}
var x_counter = makeCounter();
var o_counter = makeCounter();
 

function check(row,column){
	
	if (check_row(row) || check_column(column) || check_diagonal() || check_diagonal_2()){

		alert('Сушите весла.Game over.  ' + Current_step.toUpperCase() +' '+ 'winner.'); 

		if(Current_step=='x'){ 
			document.getElementById('x_').innerHTML=x_counter();
		 }else{ 
		   document.getElementById('o_').innerHTML=o_counter();
		}
        Game_over= true;
	}
}
function lets_start(){
	for (var i=0; i<4; i++){
		for( var j=0; j<4; j++){
			document.getElementById('r'+ i + 'c' + j).innerHTML = '';
     
		}

	}
	Game_over= false;

}