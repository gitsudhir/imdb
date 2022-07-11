function Movie(props) {
	console.log(`Movie: ${props}`);
	return (
		<div className="movie">{JSON.stringify(props.element)}</div>
	)
}

export default Movie;