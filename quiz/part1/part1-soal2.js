

//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // you can only write your code here!
  let faktor11 = 0;
  let faktor1 = [];
  let faktor2 = [];
  let angkasebenar = 0;
  let faktorini = 0;
  let faktorpasti = 1;

  if (angka1 < angka2) {
    angkasebenar = angka2;
  } else {
    angkasebenar = angka1;
  }

  for (let i = 1; i <= angkasebenar; i++) {
    if (angka1 % i == 0) {
        faktor1.push(i);
    }
    if (angka2 % i == 0) {
        faktor2.push(i);
    }
  }
  for (let i = 0; i < faktor2.length; i++) {
    if (faktor2.includes(faktor1[i])) {
        if (faktor1[i] > faktorpasti) {
            faktorpasti = faktor1[i];
        }
    }
  }
  return faktorpasti;
}

// TEST CASES
console.log(fpb(12, 16)); // 4 
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
