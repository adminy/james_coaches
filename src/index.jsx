import { render } from 'solid-js/web'
import 'bulma/css/bulma.min.css'
import './style.css'
import BusTypes from './bus/type'
import BusSelect from './bus/select'
import BusInfo from './bus/info'
import BusImage from '../assets/bus.jpeg'
import ReportPage from './bus/report'

const App = () => (
	<div>
		<header>
			<h1>Inspector Service</h1>
			<img src={BusImage} height='120' />
		</header>
		<main>
			<BusTypes />
			<BusSelect />
			<BusInfo />
			<ReportPage />
		</main>
	</div>
)

const root = document.getElementById('root')
render(() => <App />, root)
