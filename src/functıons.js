//sepete ekleme işlemi

// console.log("Sepete Eklendi.")

// console.log("Sepete Eklendi.")

// console.log("Sepete Eklendi.")

//bu ıslem degişirse hepsini duzeltmek gerekir bunu onlemek ıcın functıon kullanılır.

function AppToCart(quantıty,productName="elma") {//defoult eger bir deger gonderılmezse elma olarak gider.
    console.log("Sepete Eklendi.ürün: "+productName+" adet:" + quantıty )//defoult olarak eklennce sona yazılır.
}

//sepete ekle cıkar temizle bunu gibi işlemler 

//AppToCart()//calıstı tıp guvenlı olmadıgı ıcın calısır undefıned null ıle karıstırmamak gerekir.ben aslında yokum.
//bellekte ona daır biey gondermedık.tıp guvenlı lerde kod derlenmez bile 
//AppToCart("karpuz")
//AppToCart("elma")
//AppToCart("yumurta",10)
//AppToCart(15)//yıne bir sıkıntı olmaz tıp tanımı yapmadık.
AppToCart(10,"bardak")

//error func olusturma


//klasık func yapmıs gıbı olduk.

let sayHello = ()=>{

console.log("Hello World")

}
    
sayHello()


let sayHello2= function() {
    console.log("Hello World2")
}

sayHello2()


function addToChart2(productName,quantıty,unıtPrice)
{
//sepete eklerken hiçbir zaman bu seklde tercıh etmemelıyız.

    
}
addToChart2("elma",10,5)
addToChart2("limon",41,5)
addToChart2("armut",14,5)
//sırayı kaybederiz.
//bu tip durumlar ıcın obe olustururz.




let product1={productName:"elma",unıtPrice:10,quantıty:5}

function AddToCart3(product) {
    console.log("ürün: "+product.productName)
    console.log("Miktar: "+product.quantıty)
    console.log("fiyat: "+product.unıtPrice)
}
//product1 product ısmıyle ele alınır.

AddToCart3(product1)


let product2={productName:"elma",unıtPrice:10,
quantıty:5}

let product3={productName:"armut",unıtPrice:15,
quantıty:15}

let product4={productName:"karpuz",unıtPrice:15,
quantıty:45}

product2=product3
product3.productName="Karpuz"

console.log(product3.productName)

function addToCart4(x) 
{
    console.log(products)
}

let products=[
   {productName:"elma",unıtPrice:10,unıtStock:5},
   {productName:"armut",unıtPrice:10,unıtStock:5},
   {productName:"karpuz",unıtPrice:10,unıtStock:5},
   {productName:"cilek",unıtPrice:10,unıtStock:5}
]

addToCart4(products)



function Topla(s1,s2) {
    console.log(s1+s2)
    
}
Topla(5,10)


function Topla2(s1,s2,s3) {
    console.log(s1+s2+s3)
    
}
Topla2(5,10,3)

//function Topla3(...numbers) {
   // console.log(numbers)
//}

//Topla3(4,10,1)

function add(bişey,...numbers) {//rest
    let total=0;
    for (let i = 0; i < numbers.length; i++)
    {
      total=total+numbers[i]     
    }
    console.log(total)
    console.log(bişey)
  }

add(4,45,500)


let numbers=[10,20,40,1,450]
//console.log(...numbers)
console.log(Math.max(...numbers))

//distractiring
//component mantıgı?

let [İçAnadolu,marmara,karadeniz,[İçanadolusehirleri]] =
[
    {name:"İç Anadolu",populatıon:"20M"},
    {name:"marmara",populatıon:"30M"},
    {name:"karadeniz",populatıon:"10M"},
    [
      ["ankara","konya"],
      ["İstanbul","Bursa"],
      ["sinop","rize"]
    ]


]

console.log(İçAnadolu.name)
console.log(marmara.populatıon)
console.log(karadeniz.name)
console.log(İçanadolusehirleri)

let newproductName,newunıtPrice,newunıtStock=({productName:newproductName,unıtPrice:newunıtPrice,unıtStock:newunıtStock}={productName:"elma",unıtPrice:10,unıtStock:5})

console.log(newproductName)
console.log(newunıtPrice)
console.log(newunıtStock)