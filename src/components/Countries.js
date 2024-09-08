import CountryButton from "./Button";
import Country from "./Country";

const Countries = ({ filtered, search, setNewSearch }) => {
  // Prepare an informative message for screen reader users
  let screenReaderText = "";
  if (search === "") {
    screenReaderText = "Start typing to search for countries.";
  } else if (filtered.length === 0) {
    screenReaderText = "No results found.";
  } else if (filtered.length > 10) {
    screenReaderText = "Too many matches, please specify another filter.";
  } else if (filtered.length === 1) {
    screenReaderText = `Showing details for ${filtered[0].name.common}.`;
  } else {
    screenReaderText = `${filtered.length} results found.`;
  }

  return (
    <>
      {/* Announce search result updates to screen readers */}
      <div
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {screenReaderText}
      </div>

      <div>
        {search === "" ? (
          null // Do not render unnecessary containers
        ) : filtered.length > 10 ? (
          <p>Too many matches, please specify another filter.</p>
        ) : filtered.length === 1 ? (
          // Render single country within a live region when exactly one result is present
          <div aria-live="polite" aria-atomic="true">
            <Country country={filtered[0]} />
          </div>
        ) : (
          // Render list of countries normally when there are between 2 and 10 results
          filtered.map((country) =>
            <div className="countries__list" key={country.name.common}>
              <p aria-label={`Country name: ${country.name.common}`}>
                {country.name.common}
              </p>
              <CountryButton
                text="Show the country"
                countryName={country.name.common}
                onClick={() => setNewSearch(country.name.common)}
              />
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Countries;
