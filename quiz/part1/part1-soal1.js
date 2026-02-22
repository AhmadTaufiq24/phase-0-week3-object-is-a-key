// Soal 1
//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
  // you can only write your code here!
  if (angka <= 1) {
    return false;
  } else if (angka === 2) {
    return true;
  } else if (angka % 2 === 0) {
    return false;
  }

  const limit = Math.sqrt(angka);
  for (let i = 3; i <= limit; i += 2) {
    if (angka % i === 0) {
      return false;
    }
  }
  return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true 
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false 
console.log(angkaPrima(23)); // true 
console.log(angkaPrima(33)); // false 
