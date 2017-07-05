class AllItems extends React.Component {

	constructor(props) {
		super(props);
		this.state = { items: [] };
	}

	componentDidMount () {
		console.log('Component Mounted');
		$.getJSON('/api/v1/items.json', (response) => {this.setState({ items: response }) });
	}

	render() {
		let itemList = [];
		let item;
		for (var i = 0 ; i < this.state.items.length ; i++ ) {
			item = (
				<div key={this.state.items[i].id} >
					<h3> {this.state.items[i].name} </h3>
					<p> {this.state.items[i].description } </p>
				</div>
			);
			itemList.push(item);
		}
		return(
			<div>
				{itemList}
			</div>
		);
	}
}