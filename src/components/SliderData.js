import api from './images/color-api.png';
import menu from './images/mega-menu-indent-line.jpg';
import page from './images/race-to-the-moon-draft.jpg';
import test from './images/unit-tests.png';
import wireframe from './images/wireframe.png';

export const sliderData = [
	{
		title: 'API Incorporating User Authentication',
		text: 'This API was built with Postman and Google Firebase.  Before accessing the API users are required to authenticate with Google API’s oAuth functionality.  Users then could add artworks and associated colors.',
		image: api,
	},
	{
		title: '“How Things Fly” Website’s Mobile Menu Design',
		text: 'When converting “How Things Fly” from Drupal 6 to Drupal 8 the website was made mobile responsive.  Using Photoshop, I designed a mobile menu that shows siblings and children of the page the user is viewing.',
		image: menu,
	},
	{
		title: '“Race to the Moon” Webpage Mock-up',
		text: 'New webpages were developed for the Apollo 50th celebration on the Smithsonian National Air and Space Museum’s website. “Race to the Moon” was one such program. This is a mock-up of the event landing page that was shared with stakeholders.',
		image: page,
	},
	{
		title: 'Unit Testing',
		text: 'These are unit tests used to validate a credit card application using Python’s unittesst framework.',
		image: test,
	},
	{
		title: 'Homepage Wireframe',
		text: 'Wireframe developed for the Smithsonian National Air and Space Museum’s redesign using Figma and Adobe XD.',
		image: wireframe,
	}

]

export const developmentSliderTitle = [
	{
		eyebrow: 'Samples',
		title: 'Code Samples and Web Designs'
	}
]