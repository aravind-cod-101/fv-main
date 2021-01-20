import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

class Info extends Component {
	render() {
		return (
			<div className="Info container">
				<Grid className="Info-Grid">
					<div className="pull-left text-muted">
						&copy;2018 Mass Impressions. Designed by Tran Mau Tri Tam, clone by Denish</div>
					<div className="pull-right text-muted">
						<ul>
							<li><i className="fab fa-facebook-f"></i></li>
							<li><i className="fab fa-twitter"></i></li>
							<li><i className="fab fa-instagram"></i></li>
						</ul>
					</div>
				</Grid>
			</div>
		);
	}
}

export default Info;