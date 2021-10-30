import React, { Component } from 'react';
import Counter from './counter';


class Counters extends React.Component {
    render() { 
        const { on_Reset, on_Delete , on_Increment , on_Decrement} = this.props; // object destructing pick the references from props

        return (
        <div>
            <button 
            onClick={on_Reset}
            className="btn-primary btn-sm m-2">Reset</button>
            {this.props.counters.map(counter => 
            <Counter 
            key ={counter.id} 
            onDelete={on_Delete} 
            onIncrement ={on_Increment}
            onDecrement = {on_Decrement}
            counter={counter}  
            />)}  {/* render lists */}
        </div>

);
    }
}
 
export default Counters;