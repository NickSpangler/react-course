import React, { Component } from 'react'
import './Rando.css'

class Rando extends Component {
    constructor() {
        super()
        this.state = {num: 0}
    }

    changeNumber() {
            let random = Math.floor(Math.random() * 100)
            this.setState({num: random})
    }

    handleClick() {
        this.changeNumber()
    }

    render() {
        return (
            <div className='Rando'>
                <h1 className='Rando-h1'>Rando Component</h1>
                <h3 onClick={() => this.handleClick()}>{this.state.num}</h3>
            </div>
        )
    }
}
export default Rando;