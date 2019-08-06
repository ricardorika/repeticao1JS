//var MyList = [1,2,3,4,5,6,7,8,9,10]
//MyList.push(7);
//MyList[10]=11;
//MyList.push("Artur");
//for (var i = 0; i < MyList.length; i++) {
//	console.log(MyList[i]);

var  MyList = [];

for (i = 0; i < 15; i++) { 

MyList.push(parseInt(prompt("Digite aqui um valor: ")))
}
console.log(MyList);

var max = MyList[0]
var min = MyList[0]

for (i = 0; i < MyList.length; i++) {
	
	if (MyList[i] > max) {
		max = MyList[i];
	}
	if (MyList[i] < min) {
		min = MyList[i];
	}	
}
document.write("O maior numero é "+ max +" e o menor é "+min)