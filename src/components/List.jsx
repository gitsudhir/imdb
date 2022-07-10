import { useEffect, useState } from "react";
import axios from 'axios';
function List() {
	let [data, setData] = useState(null);


	useEffect(() => {
		async function fetchData() {

			var config = {
				method: 'get',
				url: 'https://backendapiurl.herokuapp.com/api',
			};

			axios(config)
				.then(function (response) {
					console.log(JSON.stringify(response.data));
					setData(response.data);
				})
				.catch(function (error) {
					console.log(error);
				});

		}
		fetchData();
	}, []);
	return (
		<div>List of movies

			{data && JSON.stringify(data)}
		</div>
	)
}

export default List;