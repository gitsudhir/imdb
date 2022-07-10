function Movie(props) {
	console.log(`Movie: ${props}`);
	return (
		<div className="movie">{props.element.table_name}</div>
	)
}

export default Movie;