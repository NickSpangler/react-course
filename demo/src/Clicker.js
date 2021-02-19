import React, { Component } from 'react'

class Clicker extends Component {
    state = {num: Math.floor(Math.random() * 10)}

    changeNumber = e => {
        this.setState({num: Math.floor(Math.random() * 10)})
    }
    render() {
        // const buttonOrmsg = this.state.num === 7 ? (
        //     <p>Lucky Number 7!</p>
        // ) : (
        //     <button onClick={this.changeNumber}>Change Number</button>
        // )
        return(
            <div>
                <h1>Clicker Component</h1>
                <h3>{this.state.num}</h3>
                {this.state.num === 7 ? (<p>Lucky Number 7!</p>) : (<button onClick={this.changeNumber}>Change Number</button>)}
            </div>
        )
    }
}

export default Clicker