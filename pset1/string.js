/*Görev:
Kullanıcıdan bir cümle alın ve:

Kaç karakter olduğunu yazdırın
Kaç kelime olduğunu yazdırın
Cümleyi ters çevirip yazdırın
İpucu:
length, split(" "), reverse(), join("")*/


function string() {
    function detay(cumle)
     {
      const karakterSayisi = "Karakter sayısı: " + cumle.length;
      const kelimeSayisi = "Kelime sayısı: " + cumle.split(" ").length;
      const cumleninTersi = "Cumlenin tersi: " + cumle.split("").reverse().join("");
      return `${karakterSayisi}\n${kelimeSayisi}\n${cumleninTersi}`;
     }
        
       const readline = require("readline");

       const rl = readline.createInterface({
         input: process.stdin,
         output: process.stdout
       });
       
       rl.question("Cumle? ", (cevap) => {
         console.log(detay(cevap));
         rl.close();
       });
return;
}
string();