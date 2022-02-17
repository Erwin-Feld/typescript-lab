/* 
In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.
*/

/* 
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

*/


const str = "1 2 3 4 5";

for(let i of str){
    console.log(i)
}

const array = str.split(" ")
console.log(array)


function highAndLow(numbers: string){




const array = numbers.split(" ")
    array.filter

    
    const numberArray = array.map(e => parseInt(e))



    const small_index = numberArray.indexOf(Math.min(...numberArray))

    const bigg_index = numberArray.indexOf(Math.max(...numberArray))

    return array[bigg_index] + " " + array[small_index]

  }


  console.log(highAndLow(("1 2 -3 4 5")))



  function highAndLowTwo(numbers: string){
    let numberss = numbers.split(' ').map(Number);
    console.log(numbers)
  }


  highAndLowTwo("1 2 -3 4 5")