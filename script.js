let operation;
let numberArray = [];
let concatenatedArray;
let firstNumber;
let secondNumber;
let result;
let isDecimal = false;

const numKey = document.querySelectorAll(".number");
const delKey = document.getElementById("del-btn");
const zeroKey = document.getElementById("zero");
const dotKey = document.getElementById("dot");



numKey.forEach(function (element) {
	element.addEventListener("click", function () {
		if (numKey.disabled) return;
		if (numberArray.length <= 18) {
			if (numberArray.includes(",")) {
				let char = this.innerText;
				numberArray.push(char);
				concatenatedArray = numberArray.join("");
				setMainScreen(concatenatedArray);
			}
			else{
				if (numberArray[0] == 0) {
					let char = this.innerText;
					numberArray.splice(0, 1, char);
					concatenatedArray = numberArray.join("");
					setMainScreen(concatenatedArray);
				}
				else{
					let char = this.innerText;
					numberArray.push(char);
					concatenatedArray = numberArray.join("");
					setMainScreen(concatenatedArray);
				}
			}
		}
	})
})



dotKey.addEventListener("click", function () {
	if (numberArray.length <= 18) {
		if (numberArray.includes(",")) {
		}
		else{
			if (numberArray.length == 0) {
				isDecimal = true;
				numberArray.push("0");
				numberArray.push(",");
				concatenatedArray = numberArray.join("");
				setMainScreen(concatenatedArray);
			}
			else{
				isDecimal = true;
				numberArray.push(",");
				concatenatedArray = numberArray.join("");
				setMainScreen(concatenatedArray);
			}
		}
	}
})



zeroKey.addEventListener("click", function () {
	if (numberArray.length <= 18) {
		if (numberArray.length >= 1) {
			let char = this.innerText;
			numberArray.push(char);
			concatenatedArray = numberArray.join("");
			setMainScreen(concatenatedArray);
		}
	}
})



delKey.addEventListener("click", function() {
	if (numberArray.length > 1) {
		numberArray.pop();
		concatenatedArray = numberArray.join("");
		setMainScreen(concatenatedArray)	
	}
	else{
		numberArray.pop();
		setMainScreen("0");
		return;
	}
})



document.getElementById("add").addEventListener("click", function () {
	if (firstNumber) {
		document.querySelector(".operation").innerText = (firstNumber + " +");
		setMainScreen(0);
		operation = 1;
		numberArray.length = 0;
		concatenatedArray = "";
		numKey.disabled = false;
		dotKey.disabled = false;
		zeroKey.disabled = false;
		delKey.disabled = false;
	}
	else{
	    if (numberArray.length > 0) {
	        document.querySelector(".operation").innerText = (concatenatedArray + " +");
	        setMainScreen("0");
	        numberArray.length = 0;
	        operation = 1;
	        if (isDecimal == false) {
	            firstNumber = parseInt(concatenatedArray);
	            concatenatedArray = "";
	        }
	        else {
	        	isDecimal = false;
	            concatenatedArray = concatenatedArray.replace(",", ".");
	            firstNumber = parseFloat(concatenatedArray);
	            concatenatedArray = "";
	        }
	    }
	}
});



document.getElementById("minus").addEventListener("click", function () {
	if (firstNumber) {
		document.querySelector(".operation").innerText = (firstNumber + " -");
		setMainScreen(0);
		operation = 2;
		numberArray.length = 0;
		concatenatedArray = "";
		numKey.disabled = false;
		dotKey.disabled = false;
		zeroKey.disabled = false;
		delKey.disabled = false;
	}
	else{
	    if (numberArray.length > 0) {
	        document.querySelector(".operation").innerText = (concatenatedArray + " -");
	        setMainScreen("0");
	        numberArray.length = 0;
	        operation = 2;
	        if (isDecimal == false) {
	            firstNumber = parseInt(concatenatedArray);
	            concatenatedArray = "";
	        }
	        else {
	        	isDecimal = false;
	            concatenatedArray = concatenatedArray.replace(",", ".");
	            firstNumber = parseFloat(concatenatedArray);
	            concatenatedArray = "";
	        }
	    }
	}
});



document.getElementById("multiplication").addEventListener("click", function () {
	if (firstNumber) {
		document.querySelector(".operation").innerText = (firstNumber + " x");
		setMainScreen(0);
		operation = 3;
		numberArray.length = 0;
		concatenatedArray = "";
		numKey.disabled = false;
		dotKey.disabled = false;
		zeroKey.disabled = false;
		delKey.disabled = false;
	}
	else{
	    if (numberArray.length > 0) {
	        document.querySelector(".operation").innerText = (concatenatedArray + " x");
	        setMainScreen("0");
	        numberArray.length = 0;
	        operation = 3;
	        if (isDecimal == false) {
	            firstNumber = parseInt(concatenatedArray);
	            concatenatedArray = "";
	        }
	        else {
	        	isDecimal = false;
	            concatenatedArray = concatenatedArray.replace(",", ".");
	            firstNumber = parseFloat(concatenatedArray);
	            concatenatedArray = "";
	        }
	    }
	}
});



document.getElementById("division").addEventListener("click", function () {
	if (firstNumber) {
		document.querySelector(".operation").innerText = (firstNumber + " ÷");
		setMainScreen(0);
		operation = 4;
		numberArray.length = 0;
		concatenatedArray = "";
		numKey.disabled = false;
		dotKey.disabled = false;
		zeroKey.disabled = false;
		delKey.disabled = false;
	}
	else{
	    if (numberArray.length > 0) {
	        document.querySelector(".operation").innerText = (concatenatedArray + " ÷");
	        setMainScreen("0");
	        numberArray.length = 0;
	        operation = 4;
	        if (isDecimal == false) {
	            firstNumber = parseInt(concatenatedArray);
	            concatenatedArray = "";
	        }
	        else {
	        	isDecimal = false;
	            concatenatedArray = concatenatedArray.replace(",", ".");
	            firstNumber = parseFloat(concatenatedArray);
	            concatenatedArray = "";
	        }
	    }
	}
});



document.getElementById("result-btn").addEventListener("click", function () {
	if (firstNumber) {
		if (numberArray.length >= 1) {

			if (isDecimal == false) {
				secondNumber = parseInt(concatenatedArray);
			}
			else{
				concatenatedArray = concatenatedArray.replace(",", ".");
				secondNumber = parseFloat(concatenatedArray);
			}

			switch (operation){
				case 1:
					numberArray.length = 0;
					concatenatedArray = "";
					firstNumber = add(firstNumber,secondNumber);
					setMainScreen(firstNumber);
					clearOperationScreen();
					let str = firstNumber.toString();
					numberArray = str.split("");
					numKey.disabled = true;
					dotKey.disabled = true;
					zeroKey.disabled = true;
					delKey.disabled = true;
					operation = 0;
					break;
				case 2:
					numberArray.length = 0;
					concatenatedArray = "";
					firstNumber = subtract(firstNumber,secondNumber);
					setMainScreen(firstNumber);
					clearOperationScreen();
					numKey.disabled = true;
					dotKey.disabled = true;
					zeroKey.disabled = true;
					delKey.disabled = true;
					operation = 0;
					break;

				case 3:
					numberArray.length = 0;
					concatenatedArray = "";
					firstNumber = multiply(firstNumber,secondNumber);
					setMainScreen(firstNumber);
					clearOperationScreen();
					numKey.disabled = true;
					dotKey.disabled = true;
					zeroKey.disabled = true;
					delKey.disabled = true;
					operation = 0;
					break;
				case 4:
					numberArray.length = 0;
					concatenatedArray = "";
					firstNumber = divide(firstNumber,secondNumber);
					setMainScreen(firstNumber);
					clearOperationScreen();
					numKey.disabled = true;
					dotKey.disabled = true;
					zeroKey.disabled = true;
					delKey.disabled = true;
					operation = 0;
					break;
			}
		}
	}
})



document.getElementById("reset-btn").addEventListener("click", function(){
	operation;
	numberArray = [];
	concatenatedArray;
	firstNumber;
	secondNumber;
	result;
	isDecimal = false;
	clearOperationScreen();
	clearMainScreen();
})


function setMainScreen(text) {
	document.querySelector(".main-screen").innerText = text;
}



function clearMainScreen(text) {
	document.querySelector(".main-screen").innerText = "0";
}


function setOperationScreen(text) {
	document.querySelector(".operation").innerText = text;
}


function clearOperationScreen(text) {
	document.querySelector(".operation").innerText = "";
}



function add(num1, num2) {
	result = num1 + num2;
	return result;
}



function subtract(num1, num2) {
	result = num1 - num2;
	return result;
}



function multiply(num1, num2) {
	result = num1 * num2;
	return result;
}



function divide(num1, num2) {
	result = num1 / num2;
	return result;
}