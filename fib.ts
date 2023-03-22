/**
 * Fibonacci sequence
 */
function* fib() {
  let current = 1;
  let a = 1;
  let b = 1;

  while (true) {
    current = b;

    yield current;

    b = a + b;
    a = current;
  }
}

const sequence = fib();

console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
