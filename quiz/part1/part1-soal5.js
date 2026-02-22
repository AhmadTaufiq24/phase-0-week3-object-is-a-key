
//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  let katanext = '';
  for (let i = 0; i < kata.length; i++) {
    let huruf = kata[i];
    let kode = huruf.charCodeAt(0);

    if (huruf === 'z') {
      katanext += 'a';
    } else {
      katanext += String.fromCharCode(kode + 1);
    }
  }
  return katanext;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
