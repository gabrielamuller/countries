/**
* Display search filter for the countries.
*/

import { TextField } from '@mui/material'
import { Box } from '@mui/material'

const Filter = ({ onChange, value }) => {
	return (
		<div className='filterbox'>
			<h1>Find countries</h1>
			<Box display="flex" justifyContent="center">
				<TextField onChange={onChange} value={value} type='search' id="outlined-basic" label="Type a country name" variant="outlined"/>
			</Box>
		</div>
	)
}
 
export default Filter
