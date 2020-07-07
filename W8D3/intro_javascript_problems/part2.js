function fizzBuzz(array) {
    const fizzArr = [];
    for (let i = 0; i < array.length; i++){
        if((array[i] % 3 === 0 || array[i] % 5 === 0) && !(array[i] % 3 === 0 && array[i] % 5 === 0)){
            fizzArr.push(array[i]);
        }
    }

    return fizzArr;
}

function isPrime(num){
    if (num < 2){
        return false;
    }

    for(let i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        }
    }

    return true;
}

function sumOfNPrimes(n){
    let nthPrime = 0;
    let i = 2;
    while (0 !== n) {
        if (isPrime(i)){
            nthPrime = i;
            i+=1;
            n -= 1;
        }
    }

    return nthPrime;
}
