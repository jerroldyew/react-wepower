import React, { Component } from 'react';

class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}
	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(list => this.setState({ list }))
			.catch(console.log)
	}
	render() {
		const { list } = this.state;
		return (
			<div>
				<div class="jumbotron">
					<h1 class="display-4">wePower CloudJam</h1>
					<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>

				</div>
				<div class="container">
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
								<h2>No List Items Found</h2>
							</div>
						)
					}
					<br></br>
				</div>
			</div>
		);
	}
}

export default Product;