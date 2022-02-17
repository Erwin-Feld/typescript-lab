
/**
 * 
 * @param value {string}
 * @returns true if value len bigger 3 and value contains only letters
 */
function conditionOne(value: string) {
  if (value.length >= 3 && !/[^a-zA-Z]/.test(value)) {
    return true;
  } else {
    return false;
  }
}

function palindromChecker(value: string) {

  let palindromeArray = [];

  if (conditionOne(value)) {

    /* string to array with letters as items */
    let letters = value.toLowerCase().split("");





    /* even or odd len check*/
    if(letters.length % 2 === 0) {

    } else {
      /* odd */
    }

  } else {
    console.log("not poossible");
  }
}

function isAllreadyPalindrome(letters: string[], palinCheck: any[]){
  for (let i = 0; letters.length <= letters.length / 2; i++) {
    if(i === 0) {
      if(letters[i] === letters[letters.length-1] ){
        palinCheck.push(true)

      } else {
        palinCheck.push(false)
        break
      }
    } else {
      
    }
  }
}


function evenPalindromeCheck(letters: string[]) {
  for (let i = 0; letters.length <= letters.length / 2; i++) {}
}

function palindromEven(letters: string[]) {
  
  for (let i = 0; i <= letters.length / 2; i++) {
    /* if its a palindrome */


  }
 
}
