function minicalc() 
{ function hesapla(a, b, islem)
     { let sonuc; switch (islem) 
        {case "+":
            sonuc = a + b; 
            break; 
        case "-": 
            sonuc = a - b; 
            break; 
        case "*": 
            sonuc = a * b; 
            break; 
        case "/": 
            if (b != 0) 
                { sonuc = a / b; } 
            else 
            { console.log("Bir sayı sıfıra bölünemez."); 
                return; } 
                break; 
                default: 
                console.log("Bu işlem geçerli değil."); 
                return; }
                return sonuc; } 
                const readline = require("readline"); 
                const r1 = readline.createInterface({input: process.stdin, output: process.stdout}); 
                r1.question("Birinci sayıyı girin: ", function (a)
                 {r1.question("İkinci sayıyı girin: ", 
                function (b) 
                 {r1.question("Yapmak istediğiniz işlemi girin (+, -, *, /): ", 
                function (islem) 
                 {console.log("Cevap:", hesapla(parseFloat(a), parseFloat(b), islem)); 
                    r1.close();
                 }); }); }); }; 
                 
                 minicalc();