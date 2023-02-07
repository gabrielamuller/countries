import { TextField } from '@mui/material'

const Filter = ({ onChange, value }) => {
	return (
		<div className='filterbox'>
			<h1>Find countries</h1>
			<TextField onChange={onChange} value={value} type='search' id="outlined-basic" label="Type a country name" variant="outlined"/>
		</div>
	)
}
 
export default Filter
