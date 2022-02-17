

const arr = [1,14, 58,-202]

const small =Math.min(...arr)
console.log(small)

// const bigg = arr.indexOf(Math.max(...arr))

// arr.splice(small,1)

// arr.splice(bigg,1)



// console.log(arr)


function addMe(array: number[]){
  if(array !== null && array.length>1) {

    
    const small_index = array.indexOf(Math.min(...array))

    const bigg_index = array.indexOf(Math.max(...array))
    
    if(small_index < array.length-1) {
        array.splice(small_index,1)
    } else {
        array.pop()
    }
    
    if(bigg_index < array.length-1) {
        array.splice(bigg_index,1)
    } else {
        array.pop()
    }
    
    let added = 0
    
    for(let number of array) {
    
        added +=number
    
    }
    
    console.log(added)
    return added
  } else {
      console.log(0)
      return 0
  }

}

// addMe([1])