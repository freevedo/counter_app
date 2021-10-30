import React, { Component } from 'react';
import Counter from './counter';


class Counters extends React.Component {
    
    render() { 
        return (
        <div>
            <button 
            onClick={this.props.on_Reset}
            className="btn-primary btn-sm m-2">Reset</button>
            {this.props.counters.map(counter => 
            <Counter 
            key ={counter.id} 
            onDelete={this.props.on_Delete} 
            onIncrement ={this.props.on_Increment}
            onDecrement = {this.props.on_Decrement}
            counter={counter}  
            />)}  {/* render lists */}
        </div>

);
    }
}
 
export default Counters;