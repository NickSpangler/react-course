function getNum() {
	return Math.floor(Math.random() * 3) + 1;
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
		let msg = num === 3 ? 'Bonus message!' : null
		return (
			<div>
				<h1>Your number is {num}</h1>
				{msg}
				<p>{num === 3 ? '13 is a great number!' : 'Aww, sorry, you chose a shitty number'}</p>
				{num === 3 && <img src='https://pbs.twimg.com/profile_images/573109091071094784/jV_Xs1Fh.jpeg' />}
			</div>
		)
	}
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));