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

## Accessibility
Siteimprove accessibility tool has been used to test the accessibility. The site has also been manually tested for accessibility using a keyboard and screen reader.

* Semantic HTML: The application uses semantic HTML elements for accessibility. Proper use of HTML elements helps assistive technologies like screen readers understand the structure of the page.

* ARIA Attributes: ARIA attributes have been implemented to provide additional context to assistive technologies.

* Keyboard Navigation: The application has been tested with keyboard use so that the user can navigate with a tab button.

* Screen Reader Optimizations: ARIA live region have been implemented to announce dynamic content changes and all interactive elements such as the search field have descriptive labels.

* Contrast and Text Size: Text colors and backgrounds have been selected to provide sufficient contrast. Text size can be scaled using browser controls to accommodate users with visual impairments.

* Alt Text for Images: All images and non-text content include alt texts, which can be read by screen readers to describe images.
