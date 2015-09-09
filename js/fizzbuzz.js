function fizzBuzz(number, printNums) {
	if (typeof number == "number") {
		var printNum = document.getElementsByClassName(printNums);
		var list = document.createElement("ul");
		printNum[0].appendChild(list);

		for (var i = 0; i < number; i++) {
			var item = document.createElement("li");
			var isDivThree = (i%3 == 0),
					isDivFive = (i%5 == 0),
					NumNode = isDivThree ? "Fizz" : isDivFive ? "Buzz" : i;
			var NumNodeCreation = document.createTextNode(NumNode);

			list.appendChild(item);
			item.appendChild(NumNodeCreation);
		}
	} else {
		alert("Please use a number");
	}
}

window.onload = function() {
	"use strict";
	fizzBuzz(40, "container");

};
