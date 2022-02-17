/* 
Convert number to reversed array of digits
Given a random non-negative number, 
you have to return the digits of this number within an array in reverse order.
*/



function doMe(zahl: number){
    const toString = String(zahl)

    let numberContainer = []

    const stringArray = toString.split("")

    for(let i of stringArray) {
        let toNumber = parseInt(i)
        numberContainer.push(toNumber)
    }
    // console.log(numberContainer)


    return numberContainer.reverse()

}


doMe(8988989)



function doMeMe(n: number){
    const toString = String(n)

    let numberContainer = []

    const stringArray = toString.split("")

    for(let i of stringArray) {
        let toNumber = parseInt(i)
        numberContainer.push(toNumber)
    }
    // console.log(numberContainer)


    return numberContainer.reverse()

}