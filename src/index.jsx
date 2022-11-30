import { render } from 'solid-js/web'
import './style.css'
import BusTypes from './bus/type'
import BusSelect from './bus/select'
import BusInfo from './bus/info'
import BusImage from '../bus.jpeg'

const App = () => (
	<div>
		<header>
			<img src={BusImage} />
			<h1>Inspector Service</h1>
		</header>
		<main>
			<BusTypes />
			<BusSelect />
			<BusInfo />
		</main>
	</div>
)

const root = document.getElementById('root')
render(() => <App />, root)
