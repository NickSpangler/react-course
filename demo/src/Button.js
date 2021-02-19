import React, { Component } from 'react'

class Button extends Component {
    constructor() {
        super()
        this.state = {
            clicked: false
        }
    }

    handleClick = () => {
        this.setState(
            {
                clicked: !this.state.clicked
            }
        )
    }

    render() {
        let title = this.state.clicked ? (`I have been clicked!`) : (`I have not been clicked...`)
        const buttonText = this.state.clicked ? (`Unclick Me`) : (`Click Me`)
        return (
            <div>
                <h1>{title}</h1>
                <button onClick={this.handleClick}>{buttonText}</button>
            </div>
        )
    }
}
export default Button;