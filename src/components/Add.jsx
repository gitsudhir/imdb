import { useState } from 'react';

export default function Add(props) {
	const [name, setName] = useState("");
	const [details, setDetails] = useState("");
	const [releaseDate, setReleaseDate] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [genre, setGenres] = useState("Action");

	function onSubmit(event) {
		event.preventDefault();
		console.log({ name, details, releaseDate, imageUrl, genre });
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label>
					changed Name:
					<input type="text" name="name" value={name} placeholder="Movie Name " required
						onChange={(e) => setName(e.target.value)} />
				</label>
				<br />

				<label>
					details:
					<input type="text" name="details" value={details} placeholder="Details here" required
						onChange={(e) => setDetails(e.target.value)} />
				</label>
				<br />
				<label>
					Release Date:
					<input type="date" name="release_date" value={releaseDate} placeholder="Release Date" required
						onChange={(e) => setReleaseDate(e.target.value)} />
				</label>
				<br />
				<label>
					Image Url:
					<input type="text" name="setImageUrl" value={imageUrl} placeholder="Paste image url" required
						onChange={(e) => setImageUrl(e.target.value)} />
				</label>
				<br />
				<label>
					Genre:
					<select value={genre} onChange={(e) => setGenres(e.target.value)}>
						<option value='Action'>Action</option>
						<option value='Adventure'>Adventure</option>
						<option value='Animation'>Animation</option>
						<option value='Biography'>Biography</option>
						<option value='Comedy'>Comedy</option>
						<option value='Crime'>Crime</option>
						<option value='Drama'>Drama</option>
						<option value='Horror'>Horror</option>
						<option value='Music'>Music</option>
						<option value='Mystery'>Mystery</option>
						<option value='Romance'>Romance</option>
						<option value='Thriller'>Thriller</option>
						<option value='War'>War</option>
					</select>
				</label>
				<br />

				<br />

				<input type="submit" value="Submit" />
			</form>
		</div>
	)
}
