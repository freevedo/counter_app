//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';
//import React from 'react';

class App extends Component {
  state = {
    counters : [
            { id : 1 , value : 4},
            { id : 2 , value : 0},
            { id : 3 , value : 0},
            { id : 4 , value : 0}
    ]
};
handleReset = () =>{
    const counters = this.state.counters.map(c =>{ 
        c.value = 0;
        return c;
    }) ;

    this.setState({ counters});
}
handleDelete = counterId => {
    console.log('Event handler on',counterId);
    const counters = this.state.counters.filter(c  => c.id !== counterId);
    this.setState({ counters});
}
handleIncrement = counter => {
    const counters = [...this.state.counters];//clone the counter with the spread operator ...
    const index = counters.indexOf(counter);
    counters[index] ={ ...counter};//clone the counter  at the index with the spread operator ...
    counters[index].value++;//increment the value
    this.setState({ counters }); // update the state with the new value
    console.log('test');
}
handleDecrement = counter => {
    const counters = [...this.state.counters];//clone the counter with the spread operator ...
    const index = counters.indexOf(counter);
    counters[index] ={ ...counter};//clone the counter  at the index with the spread operator ...
    counters[index].value--;//increment the value
    this.setState({ counters }); // update the state with the new value
    console.log('test2');
}
render(){
  return (
    <React.Fragment>
    <Navbar totalCounter = {this.state.counters.filter(c => c.value > 0).length}/> {/* filter to get only the counters with value greater than 0 */}
    <main className="container">
    <Counters
    counters = {this.state.counters}
    on_Reset = {this.handleReset}
    on_Delete = {this.handleDelete}
    on_Decrement = {this.handleDecrement}
    on_Increment = {this.handleIncrement}
    />
    </main>
    </React.Fragment>
  );
}
}
export default App;
