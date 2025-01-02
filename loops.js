function fibonacciSequence(limit) {
    if (limit <= 0) {
      return [];
    }
  
    const sequence = [0, 1];
  
    for (let i = 2; ; i++) {
      const nextFib = sequence[i - 1] + sequence[i - 2];
  
      if (nextFib > limit) {
        break;
      }
  
      sequence.push(nextFib);
    }
  
    return sequence;
  }
  
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= num; i = i + 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
  }
  
  const fibSequence = fibonacciSequence(100);
  console.log("Fibonacci sequence up to 100:", fibSequence);
  
  const primeFibNumbers = [];
  for (const num of fibSequence) {
    if (isPrime(num)) {
      primeFibNumbers.push(num);
    }
  }
  
  console.log("Prime numbers within the Fibonacci sequence:", primeFibNumbers);
  
  let counter = 0;
  let sumOfEvenFib = 0;
  
  while (counter < fibSequence.length) {
      if (fibSequence[counter] % 2 === 0 && fibSequence[counter] !== 0) {
          sumOfEvenFib += fibSequence[counter];
      }
      counter++;
  }
  
  console.log("The sum of even fibonacci numbers is:", sumOfEvenFib)
  
  let j = 0;
  do {
      console.log(`The value at index ${j} is ${fibSequence[j]}`);
      j++;
  } while (j < 5)