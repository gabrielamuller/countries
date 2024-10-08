import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setNewSearch] = useState("");

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

 const handleSearch = (event) => {
  setNewSearch(event.target.value);
}

const filtered = search.length > 0
? countries.filter((country) =>
  country.name.common.toLowerCase().includes(search.toLowerCase())
  ) : []

  return (
    <main>
      <section className="filter">
        <Filter onChange={handleSearch} value={search}/>
      </section>
      <section className="countries">
        <Countries filtered={filtered} setNewSearch={setNewSearch}/>
      </section>
    </main>
  )
}

export default App