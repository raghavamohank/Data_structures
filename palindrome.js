var letter = [];

var word = "racecar";
var rword = "";

// put letters of word into stack
for(var i =0;i< word.length;i++){
    letter.push(word[i]);
}

// pop of the stack in reverse order
for(var i=0;i<word.length;i++) {
    rword  += letter.pop();
}

if(rword === word) {
    console.log(word + " is a palindrome");
}
else{
    console.log(word +" is not a palindrome");
}