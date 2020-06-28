import React, { Component } from 'react';
import './aboutus.css';

class Aboutus extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div class="body">
                <h1>About Us</h1>
                <div>
                    What we do:
                    <p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor </p>
                </div>
                <hr />
                <div>
                    Helping people discover themselves
                    <p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor </p>
                </div>
                <hr />
                <div>
                    Removing the stigma
                    <p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor </p>
                </div>
                <hr />
                <div>
                    Raising awareness
                    <p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor </p>
                </div>
            </div>
        );
    }
}

export default Aboutus;