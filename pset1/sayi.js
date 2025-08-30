/*
Görev:
1–100 arasında rastgele sayı tutun; kullanıcı doğru bilene kadar “daha küçük/büyük” yönlendirmesi yapın.

İpucu:
Math kütüphanesi, while döngüsü
*/ 
const prompt = require("prompt-sync")();
let sayi = Math.floor(100 * Math.random() + 1);
let tahmin = prompt("1-100 arasında bir sayı tahmin edin:");

while(parseInt(tahmin) != sayi) {
    if(parseInt(tahmin) < sayi) {
        tahmin = prompt("Daha büyük bir sayı: ");
    } else if (parseInt(tahmin) > sayi) {
        tahmin = prompt("Daha küçük bir sayı: ");
    }
}

console.log("Doğru tahmin: " + sayi);