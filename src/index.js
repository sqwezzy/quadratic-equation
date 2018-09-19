module.exports = function solveEquation(equation) {
	var values = [];
	findCofficients(equation);
	var a = strToInt(coff[0]);
	var b = strToInt(coff[1]);
	var c = strToInt(coff[2]);
	values = workEquation(a, b, c);
	values.sort(compareNumeric);
	return values;
}

function workEquation(a,b,c){
	var values = [];
	var D = b*b-4*a*c;
	if(D > 0){
		var x1= ((-b) + Math.sqrt(D))/(2*a);
		var x2= ((-b) - Math.sqrt(D))/(2*a);
	}
	values[0] = Math.round(x1);
	values[1] = Math.round(x2);
	return values;
}

function strToInt(number){
	var newNumber = '';
	for(var i = 0; i < number.length; i++){
		if(number[i] != ' '){
			newNumber += number[i];
			
		}
		else{
			continue;
		}
	}
	newNumber = parseInt(newNumber, 10);
	return newNumber;

}

function findCofficients(str){
	coff = [];
	var i;
	var a = '';
	var b = '';
	var c = '';
	for(i = 0; i < str.length; i++){
		if(str[i] != '*'){
			a += str[i];
		}
		else{
			break;
		}
	}
	var j = i + 5;
	var temp = str.indexOf('*', i+1);
	for(j; j < temp; j++){
		b += str[j];
	}
	var f = temp + 3;
	for(f; f < str.length; f++){
		c += str[f];
	}
	coff[0] = a;
	coff[1] = b;
	coff[2] = c;
	return coff;
}

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}