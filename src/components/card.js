import React from "react";

export default function Card(props) {
	const location = props.data.location.toUpperCase();
	return (
		<div className="">
			<div className="d-flex exp--card">
				<div className="col exp--img">
					<img src={props.data.imageUrl} alt={props.data.title + " Image"} />
				</div>
				<div className="col-8  exp--copy">
					{props.data.location && (
						<div className="top">
							<div className="location">
								<span className="fas fa-map-marker-alt"></span>
								<span className="location--name">{location}</span>
							</div>
							<div className="map">
								<a href={props.data.googleMapsUrl} target="_blank">
									View on Google Maps
								</a>
							</div>
						</div>
					)}
					<div className="title">
						<h2>{props.data.title}</h2>
					</div>
					<div className="time">
						<h3>{props.data.startDate}</h3>
						{props.data.endDate && <h3>&nbsp;- {props.data.endDate}</h3>}
					</div>
					<div className="description">
						<p>{props.data.description}</p>
					</div>
				</div>
			</div>

			<hr />
		</div>
	);
}
