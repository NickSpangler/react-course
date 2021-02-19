import React, { Component } from 'react'
import '../stylesheets/Pokecard.css'
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

// let threeDigitId = (id) => (id <= 999 ? `00${id}`.slice(-3) : id)
let threeDigitId = (id) => {
    let string = id.toString()
    while (string.length < 3) string = '0' + string
    return string
}
class Pokecard extends Component {

    render() {
        const imgSrc= `${POKE_API}${threeDigitId(this.props.id)}.png`
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-name'>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/>
                <div className='Pokecard-data'>Type: {this.props.type}</div>
                <div className='Pokecard-data'>Exp: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;