const haystack = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
];

function findNeedle(haystack: string[]) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
  // your code here
}



// console.log(str.match(/.{1,2}/g));

function solution(str: string) {
  if(str.length === 0) {
    const empty: any[] = []
    console.log(empty)
   return empty
  }

  else if (str.length % 2 === 0) {
    // console.log(str.match(/.{1,2}/g))
    return str.match(/.{1,2}/g);
  } else if (str.length % 2 !== 0 && str.length !== 0) {
    let oddArray = str.match(/.{1,2}/g);
    if (oddArray) {
      let fix = oddArray[oddArray.length - 1] + "_";
      oddArray.pop();
      oddArray.push(fix);
      return oddArray;
    }
  }

 
}

(solution(""))





