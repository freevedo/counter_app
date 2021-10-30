import React, { Component } from 'react';
import Counter from './counter';


class Counters extends React.Component {
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
    render() { 
        return (
        <div>
            <button 
            onClick={this.handleReset}
            className="btn-primary btn-sm m-2">Reset</button>
            {this.state.counters.map(counter => 
            <Counter 
            key ={counter.id} 
            onDelete={this.handleDelete} 
            onIncrement ={this.handleIncrement}
            onDecrement = {this.handleDecrement}
            counter={counter}  
            />)}  {/* render lists */}
        </div>

);
    }
}
 
export default Counters;