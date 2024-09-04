/**
* Filtered search results.
*/

import CountryButton from './Button';
import Country from './Country';

const Countries = ({ filtered, search, setNewSearch }) => {
  // Determine what message to announce to screen readers
  let screenReaderText = '';
  if (search === '') {
    screenReaderText = 'Start typing to search for countries';
  } else if (filtered.length === 0) {
    screenReaderText = 'No results found';
  } else if (filtered.length <= 10) {
    screenReaderText = `${filtered.length} result${filtered.length > 1 ? 's' : ''} found`;
  }

  return (
    <>
      {/* Announce search result updates to screen readers */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        style={{ position: 'absolute', left: '-9999px' }} // Visually hiddden but still available for screen readers
      >
        {screenReaderText}
      </div>

      <div
        role="region"
        aria-live="polite"
        aria-relevant="additions removals text"
        aria-atomic="true"
      >
        {search === '' ? (
          [] // Empty array when search input is empty
        ) : filtered.length > 10 ? (
          <p>Too many matches, please specify another filter</p>
        ) : (
          filtered.map((country) =>
            filtered.length <= 10 && filtered.length > 1 ? (
              <div className="countries-list" key={country.name.common}>
                {/* Screen readers announce the country name */}
                <p aria-label={`Country name: ${country.name.common}`}>
                  {country.name.common}
                </p>
                <CountryButton
                  text="Show the country"
                  countryName={country.name.common}
                  onClick={() => setNewSearch(country.name.common)}
                />
              </div>
            ) : (
              <div key={country.name.common}>
                <Country country={country} />
              </div>
            )
          )
        )}
      </div>
    </>
  );
};

export default Countries;
