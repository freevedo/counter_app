import React, { Component } from 'react';

class Counter extends React.Component {

    // state = {
    //     value : this.props.counter.value ,
        
    //     tags : ['tag1','tag2', 'tag3'] // array
    // };
    //  handleIncrement = () => {
    //      this.setState({ value : this.state.value  + 1});
    //  }
    //  handleDecrement = () => {
    //      this.setState({ value : this.state.value - 1});
    //  }
    render() { 
        return(
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick={() => this.props.onIncrement(this.props.counter)} // now we pass as an error function the counter to modify his value
                className="btn btn-secondary btn-sm" 
                style= { { marginRight : "10px"}}>Increment</button>
                <button
                onClick={ () => this.props.onDecrement(this.props.counter)}
                className= "btn btn-secondary btn-sm">Decrement</button>
                {/* <ul>
                    {this.state.tags.map( tag => <li>{tag}</li>)} 
                </ul> */}
                {/* render lists */}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        )
    }

     getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    
     formatCount(){ //object destruction
        const {value} = this.props.counter;
        return value === 0  ?  'Zero' : value;
    }
}


 




export default Counter;