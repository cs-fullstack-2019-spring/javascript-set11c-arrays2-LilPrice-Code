//Exercise 31

//var num = parseInt(prompt("Please enter a number between 0-4."));
//var numbers = [34, 73, 35, 96,86];
//alert(numbers[num]);

//Exercise 32

//var num1 = parseInt(prompt("Please enter a number between 0-4."));
//var useThisArray = new Array(3,5,4,9,1);
//console.log(useThisArray.length);
//for (var i = 0; i <= num1; i++) {
//    alert(useThisArray[i]);
//}

//Exercise 33

var userInput = prompt('Please type in a word.');
var words = new Array('Fun', 'Nowhere', 'Atom');
if (userInput == "q"){
    alert("User has Quit!");
}
else {
    words.push(userInput);
    console.log(words);
    while (words.length > 0){
        userInput = prompt('Please enter another word.');
        if (userInput == "q"){
            break;
        }

        else{
            words.length = words.length + 1;
        }

    }

}
