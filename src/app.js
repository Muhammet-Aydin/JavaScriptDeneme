console.log("merhaba dunya.")

//yorum satırı 

//js type safe degildir.basta ne tanımalysan oyle degeceksin.

let dolarDun = 9.20

dolarDun="Ankara"
dolarDun="9.80"


{
    let dolarDun=9.10
 // var dolarDun=9.20   //global degısken  gıbı calısır.
}



console.log(dolarDun)//undifıned der cunku derlendıgınde var ıle tanımlananları okur.dosyanın basına ceker orda tanımlar.scope bagımsız.

let dolarBugun = 9.40//varı hayatından cıkar  artık let ıle degısken tanımlayacagız.

const euroDun=11.2
//euroDun=11.5
console.log(euroDun)

//array 
//camelCasıng
//PascalCasıng



let konutKredileri2 = ["konut kredisi",12,true,'a']

let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamut Konut Kredisi","özel"]



console.log("<ul>")
for (let i= 0; i < konutKredileri2.length; i++)
 {
    console.log("<li>"+konutKredileri2[i]+"</li>")   
 }    
console.log("</ul>")





    /*{<ul>
        <li>Konut Kredisi</li>
        <li>Emlak Konut Kredisi</li>
        <li>Komu Konut Kredisi</li>
        </ul>
     }*/


     console.log(konutKredileri2)
        console.log(konutKredileri)





   

 




