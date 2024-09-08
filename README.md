# Country Information App

A country information app built with React.

Live site: https://gabrielamuller.github.io/countries/.

The app uses a REST API from here: https://restcountries.com to provide data for different countries. It gets the data from the endpoint "all": https://restcountries.com/v3.1/all.

The weather data uses an API from here https://openweathermap.org.

## The Interface
The user needs to type the search query into the search field.

If there are over ten countries that match the query, the user is prompted to make their query more specific. If there are ten or fewer countries, but more than one, then a list of all countries matching the query is shown.

On the country list there is a button next to the name of the country, which when pressed, shows the view for that country. Also, if there is only one country matching the query, the single view of the country is shown.

The single view of the country includes basic data of the country such as its capital, area, languages spoken, flag and current weather.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment
The app is deployed to Github pages. The deployment scripts are configured on package.json file.