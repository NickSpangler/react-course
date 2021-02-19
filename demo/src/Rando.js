import React, { Component } from 'react'
import './Rando.css'

class Rando extends Component {
    constructor() {
        super()
        this.state = {num: 0}
        this.changeNumber()
    }

    changeNumber() {
        setInterval(() => {
            let random = Math.floor(Math.random() * 10)
            this.setState({num: random})
        }, 1000)
    }

    render() {
        return (
            <div className='Rando'>
                <h1 className='Rando-h1'>Rando Component</h1>
                <h3>{this.state.num}</h3>
            </div>
        )
    }
}
export default Rando;