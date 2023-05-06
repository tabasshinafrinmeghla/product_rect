import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// const products =[
//   {name:'laptop', price : 150000},
//   {name:'Phone', price : 50000},
//   {name:'Watch', price : 1500},
//   {name:'tablet', price : 1500},
  
// ]
// const books=[
//   {name:'math',price:300},
//   {name:'ban',price:200},
//   {name:'eng',price:100},
//   {name:'bio',price:400},
//   {name:'phy',price:700},
//   {name:'chy',price:600},
//   {name:'riligious',price:250},
//   {name:'drowing',price:340},
// ]



function App() {
  return (
    <div className="App">
      {/* {
        products.map(products=> <Product name={products.name} price={products.price}></Product>)
      }

      {
        books.map(books=> <Product name={books.name} price={books.price}></Product>)
      }
      <Product name="laptop" price="100000"></Product>
      <Product name="phone" price="50000"></Product> */
      
      }

      <Counter></Counter>
    </div>
   );
}




function Counter(){
  const [count, setCount] = useState(0);
  console.log(count);

  const increaseCount = () =>setCount(count + 1);
  
  

  // simple vabe korte =>..........
  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  // console.log(abc);
  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick={increaseCount} >Increase</button>
    </div>
  )
}



function Product(props){
  return(
    <div className='Product'>
      {/* <h3>Name:{props.name} </h3>
      <p>Price: {props.price} </p> */
      
      
      
      }
    </div>
  )
}





export default App;
