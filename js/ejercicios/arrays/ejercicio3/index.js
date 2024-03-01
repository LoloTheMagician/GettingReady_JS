function fizzBuzz(numMax) {
    const arrayNum = [];

    for (let index = 1; index <= numMax; index++) {

        if (index % 15 === 0) {
            arrayNum.push("FizzBuzz");
        } else if (index % 5 === 0) {
            arrayNum.push("Buzz");
        } else if (index % 3 === 0) {
            arrayNum.push("Fizz")
        }
        else {
            arrayNum.push(index);
        }
    }
    return arrayNum;
}

function numDiv(...divisibles) {
    return divisibles
}


console.log(fizzBuzz(15));