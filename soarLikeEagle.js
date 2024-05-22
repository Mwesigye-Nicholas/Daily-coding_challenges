/*Create a function named soarLikeEagle that receives a string str and a number n.

The function will return a new string that repeats each character in str n times, but if the character is a vowel (a, e, i, o, u), it will repeat it n+1 times instead. If n is 0 or negative, return an empty string.

Examples:
soarLikeEagle("Hi", 2) should return "HHiii"
soarLikeEagle("Hello", 3) should return "HHHeeeelllllooo"
soarLikeEagle("Bye", 0) should return*/

function soarLikeEagle(str, n) {
    // Write code here
    let vowelArray = ['a', 'e', 'i', 'o', 'u'];

    let strLength = str.length - 1;

    let newString = '';

   if (n <= 0){
       return "";
   } else {
       for (let i = 0; i <= strLength; i++){
            const char = str[i].toLowerCase();
           let repeatCount = vowelArray.includes(char) ? n + 1 : n;
           newString += str[i].repeat(repeatCount);
     
   }
   }
    return newString;
}
console.log(soarLikeEagle("Like An Eagle", 2)) ;
