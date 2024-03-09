const products = [
    {name:'laptop',price:32000,brand:'lenovo',color:'silver'},
    {name:'phone',price:324000,brand:'iphone',color:'gray'},
    {name:'watch',price:3000,brand:'casio',color:'golden'},
    {name:'sunglass',price:300,brand:'lenovo',color:'black'},
    {name:'camera',price:5000,brand:'canon',color:'silver'},
    {name:'printer',price:2300,brand:'cavas',color:'white'},
]
const keys = Object.keys(products[0])
const value = Object.values(products[0])
console.log(keys)
// console.log(value)

const brands = products.map(product =>product.brand)
console.log(brands)

products.forEach(product => {
    console.log(product)
    console.log(product.color)
});

const cheap = products.filter(product => product.price<= 20000)

    
console.log(cheap)

const newProduct =  {name:'printer',price:2300,brand:'cavas',color:'white'};
const newProducts = [...products,newProduct]

