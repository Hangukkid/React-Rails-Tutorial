class NewItems extends React.Component {

	constructor(props) {
		super(props);
		this.state = { name: '',
					   description: ''
					 };
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
	}

	handleNameChange (e) {
		this.setState({ name: e.target.value });
	}

	handleDescriptionChange (e) {
		this.setState({ description: e.target.value });
	}

	handleSubmit(e) {
		console.log('The name value is ' + this.state.name + 'the description value is ' + this.state.description);
		e.preventDefault();
	}

	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder='Enter the Name of the Item' />
					<input type="text" value={this.state.description} onChange={this.handleDescriptionChange} placeholder='Enter a Description' />
					<input type="submit" value="Submit"/>
				</form>
			</div>
		);
	}
}