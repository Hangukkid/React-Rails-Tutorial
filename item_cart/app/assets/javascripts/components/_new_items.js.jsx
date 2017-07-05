class NewItems extends React.Component {

	handleClick() {
		let name = this.refs.name.value;
		let description = this.refs.description.value;

		console.log('The name value is ' + name + 'the description value is ' + description);
	}

	render() {
		return(
			<div>
				<input ref='name' placeholder='Enter the Name of the Item' />
				<input ref='description' placeholder='Enter a Description' />
				<button onClick={this.handleClick}> Submit </button>
			</div>
		);
	}
}