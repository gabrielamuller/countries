import { Button } from '@mui/material'

const CountryButton = ({ onClick, text }) => (
	<Button variant="contained" color="primary" type="submit" size="small" onClick={onClick}>
		{text}
	</Button>
)

export default CountryButton
