/* 

String Challenge
Have the function StringChallenge(str) 
take the str parameter being passed and determine if it is possible
to create a palindromic string of minimum length 3 characters by removing 1 or 2 characters. 

For example: if str is "abjchba" then you can remove the characters jc to produce "abhba" 
which is a palindrome. 

For this example your program should return the two characters 
that were removed with no delimiter and in the order they appear in the string, so jc.
 If 1 or 2 characters cannot be removed to produce a palindrome, then return the string not possible.
If the input string is already a palindrome, your program should return the string palindrome.
Your program should always remove the characters that appear earlier in the string.
In the example above, you can also remove ch to form a palindrome but jc appears first, so the correct answer is jc.
The input will only contain lowercase alphabetic characters. 
Your program should always attempt to create the longest palindromic substring by removing 1 or 2 characters 
(see second sample test case as an example). The 2 characters you
remove do not have to be adjacent in the string.

Examples
Input: "mmop"
Output: not possible
Input: "kjjjhjjj"
Output: k


function StringChallenge(str) {
  // code goes here 
  return str;
}

*/

/**
 * gets string uses regex to determine if chars in string are all letters a-z
 * @param word
 */
// function testMe(word: string) {
//   if (!/[^a-zA-Z]/.test(word)) {
//     console.log(word);
//   }
// }

/* if even */
function iterMe(value: string) {
  let newValue = value.split("");

  for (let i = 0; i < value.length / 2; i++) {
    // console.log(char)
    // const char = value.charAt(i);
    if (i === 0) {
      /* splice */
      if (value[i] !== value[value.length - 1]) {
          console.log("do splice equal")
        newValue.splice(i,1)
        /* add if last item do this  */
       newValue.pop()
        // newValue.slice(value.length-1)
        console.log(newValue)
        
      
      }
    } else {
      /* splice */
      if (value[i] !== value[value.length - (i + 1)]) {
        console.log("do splice odd")


        newValue.splice(i,1)
        newValue.splice(value.length - (i + 1))
        // modifiedValue.splice(i)
        // modifiedValue.splice(value.length - (i + 1))

      }
    }

   
  }

}

let arrayme = "hollla".split("");

console.log(arrayme.length)

arrayme.splice(arrayme.length-1,1)

console.log(arrayme)



iterMe("hoos")

function stringChallenge(value: string) {

  /* checks if string  len is min 3 chars and contians only letters */
  if (value.length >= 3 && !/[^a-zA-Z]/.test(value)) {
    if (value.length % 2 === 0) {
      const inputValue = value.toLowerCase();
      console.log(inputValue);
      console.log("even");
    } else {
      const inputValue = value.toLowerCase();
      console.log(inputValue);
      console.log("odd");

      /* ungerade */
    }
  } else {
    console.log("not poossible");
  }
  // code goes here
  return value;
}

// stringChallenge("halloPeters");
