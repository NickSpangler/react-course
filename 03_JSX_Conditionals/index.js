function getNum() {
	return Math.floor(Math.random() * 13) + 1;
}
// class NumPicker extends React.Component {
// 	render() {
// 		const num = getNum();
// 		let msg;
// 		if (num === 13) {
// 			msg =
// 				<div>
// 					<h2>CONGRATS YOU WIN!</h2>
// 					<img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
// 				</div>
// 		} else {
// 			msg = <p>Sorry You Lose!</p>
// 		}
// 		return (
// 			<div>
// 				<h1>Your number is: {num} </h1>
// 				{msg}
// 			</div>
// 		);
// 	}
// }

class NumPicker extends React.Component {
	render() {
		const num = getNum()
		return (
			<div>
				<h1>Your number is {num}</h1>
				<p>{num === 13 ? '13 is a great number!' : 'Aww, sorry, you chose a shitty number'}</p>
			</div>
		)
	}
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));