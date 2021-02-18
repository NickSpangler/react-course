const getMood = () => {
    const moods = ['COOL', 'HAPPY', 'RADICAL', 'A BADASS', 'RADICAL', 'POLARIZING', 'SUNNY']
    return moods[Math.floor(Math.random() * moods.length)]

}



class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>Nick Spangler is {50*2}% and {getMood()}</h1>
                <img src="https://pbs.twimg.com/profile_images/573109091071094784/jV_Xs1Fh.jpeg" />
            </div>
        )
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))