let Cart=[
    
        {id:1,productName:"Telefon",quantity:3,unitPrice:4000},
        {id:2,productName:"Kalem",quantity:9,unitPrice:1000},
        {id:3,productName:"Bardak",quantity:2,unitPrice:2000},
        {id:4,productName:"Fare",quantity:5,unitPrice:3000},
        {id:5,productName:"Armut",quantity:2,unitPrice:4000},
        {id:6,productName:"Patates",quantity:1,unitPrice:6000},    
]

Cart.map(product=>{
    console.log(product.productName +" : "+ product.unitPrice*product.quantity)
})
let quantıtyover2 = Cart.filter(product=>
product.quantity>2
)

console.log(quantıtyover2)


let Total=Cart.reduce((acc,product)=>acc+product.unitPrice,0)

console.log(Total)


function AddToCart(sepet) {
    sepet.push({id:7,productName:"ruhsat",quantity:1,unitPrice:1000})
}

AddToCart(Cart)

console.log(Cart)

let sayı=10;

function sayıTopla(number) {
    number +=1
    
}

sayıTopla(sayı)
console.log(sayı)


