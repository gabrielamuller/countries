/**
 * Button to display countries.
 */

const CountryButton = ({ onClick, text, countryName }) => (
	<button
	  type="button"
	  onClick={onClick}
	  aria-label={`Show details for ${countryName}`}
	>
	  <span className="sr-only">Show details for {countryName}</span>
	  {text}
	</button>
);

export default CountryButton;