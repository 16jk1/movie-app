import React, { Component } from 'react';
import './movie.css';
import thehungergame from './thehungergame2.jpg';
class moviePoster extends Component {
    render(){
        return(
            <img src={thehungergame} />
        );
    }
}


export default moviePoster;