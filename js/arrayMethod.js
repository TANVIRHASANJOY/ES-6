const products =[ 
 { id:1, name :"iphone", color:"gold", price:3200, brand:"apple"},
      { id:2, name :"samsung",color:"gold",  price:2200, brand:"samsung"},
        { id:3, name :"xaiomi",color:"black",  price:1000, brand:"xaiomi"},
            { id:4, name :"iphone",color:"black",  price:3000, brand:"apple"},
            { id:5, name :"samsung",color:"black",  price:1000, brand:"samsung"},



];
// foreach
products.forEach(product=>{
 if( product.price===3000){
console.log(product)
 }
})
// filter
const element=products.filter(p=>p.color==="gold")
console.log(element)

// find
const getPhone=products.find(p=>p.name==="iphone")
console.log(getPhone)


