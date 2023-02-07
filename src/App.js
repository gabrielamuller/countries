import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import Countries from './components/Countries'

import { Container } from '@mui/material'

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
  console.log(event.target.value)
  setNewSearch(event.target.value);
}

const filtered = search.length > 0
? countries.filter((country) =>
  country.name.common.toLowerCase().includes(search.toLowerCase())
  ) : []

console.log(filtered);

  return (
    <Container>
    <div className='filter'>
      <Filter onChange={handleSearch} value={search}/>
    </div>
    <div className='countries'>
      <Countries filtered={filtered} setNewSearch={setNewSearch}/>
    </div>
    </Container>
  )
}

export default App