//  Q1.  write a js program and take a varibale which is string and add with a number and print the result.

let name = "Rahul";
let num = 25;
console.log( name + num);       // this is called concadination.


// Q2.   Use typeof operator and try to find the type of resule of Q1.

console.log("Result is "+typeof(name + num)+ " type");

//  Q3. create a const object and add a item with it's value.

const disc = {
    name : "Rahul",
    roll : "054",
    
}
disc['Student'] = false;

console.log(disc)

//  Q4. write a js program to make a disctonary of 5 words.

const words =
{
    WORD :	"MEANING",
	Broigus : 	"Angry or irritated",
	By_Catch : 	"A catch of fish that cannot be put to commercial use.",
	Blert :	"A cowardly person, someone who is weak.",
	Comp :	"Providing products or services free of charge as a token of appreciation, a favor.",
}

console.log(words.WORD);
console.log(words['WORD']);