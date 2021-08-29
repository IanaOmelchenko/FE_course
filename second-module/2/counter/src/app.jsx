import React, { useState } from 'react';
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialState = [
    {value:0,id:1, name: "Spoon" },
    {value:0,id:2, name: "Fork" },
    {value:0,id:3, name: "Plate" },
    {value:0,id:4, name: "Minimalist starter kit" },
    {value:0,id:5, name: "Useless stuff" },
];
const [counters, setCounters] = useState(initialState)
const handleDelete = (counterId) => {
    const newCounters = counters.filter(c=>c.id!==counterId);
    setCounters(newCounters);
}
const handleDecrement = (counterId) => {
        const decrementArray = counters.map(counter => {
          if(counterId === counter.id && counter.value>0){
              counter.value--;
          }
          return counter;
        })
        setCounters(decrementArray);
}

const handleIncrement = (counterId) => {
    const incrementArray = counters.map(counter => {
        if(counterId === counter.id){
            counter.value++;
        }
        return counter;
      })
      setCounters(incrementArray);
}
 
const handleReset = () => setCounters(initialState)
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>

        <NavBar totalItems = {counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onDelete={handleDelete}
          onIncrement = {handleIncrement}
          onDecrement = {handleDecrement}
          onReset = {handleReset}
          counters={counters}/>
      </main>
    </div>
  );
}

export default App;
