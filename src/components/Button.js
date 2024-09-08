/**
 * Button to display countries.
 */

const CountryButton = ({ onClick, text, countryName }) => (
	<button
	  type="button"
	  onClick={onClick}
	  // Screen reader text
	  aria-label={`Show details for ${countryName}`}
	>
	{text}
	</button>
);

export default CountryButton;