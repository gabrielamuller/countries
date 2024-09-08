/**
* Single country view.
*/

import React, { useEffect, useState } from "react"
import axios from "axios"

import Languages from "./Languages"
import Weather from "./Weather"

const Country = ({country}) => {
	// Get the weather details.
	const [weather, setWeather] = useState();
	const capital = country.capital

	const api_key = process.env.REACT_APP_API_KEY
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${api_key}`

	useEffect(() => {
		axios
		  .get(url)
		  .then(response => {
			setWeather(response.data)
		  })
	  }, [url])

	return(
		// Display country data.
		<div className="countries__country" key={country.name.common}>
			<p><b>Capital:</b> {country.capital}</p>
			<p><b>Area:</b> {country.area}</p>
			<Languages languages={Object.entries(country.languages)} />
			<img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
			<Weather weather={weather} capital={capital}/>
		</div>
	)
}

export default Country;
