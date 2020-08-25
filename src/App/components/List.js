import React, { Component } from 'react';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}
	componentDidMount() {
		fetch(process.env.REACT_APP_PLIST_API)
			.then(res => res.json())
			.then(list => this.setState({ list }))
			.catch(console.log)
	}
	render() {
		const { list } = this.state;
		return (
			<div>
				{/* Check to see if any items are found*/}
				{list.length ? (
					<div class="row">
						{list.map((item) => {
							return (
								<div class="col-sm-4 p-2">
									<div class="card">
										<div class="card-body">
											<h5 class="card-title">{item.name}</h5>
											<p class="card-text">{item.company.catchPhrase}</p>
											<a href={`/product/${item.id}`} class="btn btn-primary">Details</a>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				) : (
						<div>
							<h2>No Products Available</h2>
						</div>
					)
				}
				<br></br>
			</div>
		);
	}
}

export default List;