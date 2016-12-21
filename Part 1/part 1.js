//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...

function AnRBKstudent(name, age, education, nationality) {
	var obj = {
		name:name,
		age:age,
		education:education,
		nationality:nationality
	}
	students.push(obj);
	return obj;
}

var students=[];

function showFriend(obj) {
	return obj.name+" "+obj.age+" "+obj.education;
}


function avergeStudents(arr) {
	var temp=0;
	for (var i = 0 ; i <= arr.length - 1 ; i++) {
		temp+=arr[i]['age'];
	}
	return temp/arr.length;
}
/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
*/
// write your code here ...

function square(num) {
	return num*num;
}

function rangeSquared(a, b) {
	if(b == undefined){
		if(a%2 === 0){
			return square(a);
		}
	}
	var result=[];
	for(a; a<=b ; a++){
		if(a%2 === 0){
			result.push(square(a));
		}
	}
	return result;
}


/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....

function leader(arr) {
	var result=[];
	for(var i = 0; i<arr.length-1 ; i++){
		if(arr[i]>arr[i+1]){
			result.push(arr[i]);
		}
	}
	if(arr[arr.length-2]<arr[arr.length-1]){
		result.push(arr[arr.length-1]);
	}
	return result
}