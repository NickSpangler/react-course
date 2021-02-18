class Hello extends React.Component {
    render() {
        return (
            <div>
            <h1>HELLO!</h1>
            <h2>Why, Hello!</h2>
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'))