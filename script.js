// Assignment A
const addTheWordCool = function (array) {
    array.push("cool")
    return array
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "amazing"]));

//Assignment B

const amountOfElementsInArray = (array) => {
    return array.length
}
console.log(amountOfElementsInArray(['apples', 'pears', 'lemons']));

//Assignment C

const selectBelgiumFromBenelux = (array) => {
    return array[0];
}

console.log(selectBelgiumFromBenelux(["Belgium", "Netherlands", "Luxembourg"]));
// result: "Belgium"

//Assignment D

const lastElementInArray = (array) => {
    const length = array.length
    return array[length - 1]
}

console.log(lastElementInArray(["Hare", "Guinea pig", "Chicken", "Turtle"]));

//Assignment E

const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (array) {
    return array.slice(1)
}
const impeachTrumpSplice = function (array) {
    array.splice(0, 1)
    return array
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//Assignment F

const stringsTogether = (array) => {
    return array.join(" ")
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'fun', ';-}']))
//result: "Winc Academy is fun ;-}"

//Assignment G

const combineArrays = function (array1, array2) {
    console.log(array1.concat(array2));
}

combineArrays([1, 2, 3], [4, 5, 6])
// resultaat: [1,2,3,4,5,6]
