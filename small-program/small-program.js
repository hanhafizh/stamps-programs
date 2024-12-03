// Buat array angka dari 1 sampai 100
let numbers = Array.from({ length: 100 }, (_, i) => i + 1);

// Balikkan urutan array
numbers.reverse();

// Fungsi pembantu untuk memeriksa apakah sebuah angka adalah bilangan prima
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Proses dan cetak array
let result = numbers
  .map((num) => {
    if (isPrime(num)) return ""; // Skip prime numbers
    if (num % 3 === 0 && num % 5 === 0) return "FooBar";
    if (num % 3 === 0) return "Foo";
    if (num % 5 === 0) return "Bar";
    return num;
  })
  .filter((item) => item !== "")
  .join(", "); // Remove empty entries and join

console.log(result);
