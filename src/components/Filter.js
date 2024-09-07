/**
* Display search filter for the countries.
*/

const Filter = ({ onChange, value }) => {
	return (
		<div className='filter__box'>
			<h1 class="filter__heading">Welcome to Explore the World! 🌍</h1>
			<p>Discover facts about countries from around the globe and stay updated with their current weather conditions.</p>
			<p>Simply type a country name in the search bar below to start your journey of exploration. As you type, the smart search function will suggest countries and display a list right below the search bar to help you find what you're looking for quickly and easily.</p>
			<div className="filter__search-form">
				<label htmlFor="country-search" class="filter__search-label">Search for a country:</label>
				<input id="country-search" class="filter__search-input" onChange={onChange} value={value} type='search' placeholder="Type a country name" aria-label="Type a country name"/>
			</div>
		</div>
	)
}

export default Filter;
