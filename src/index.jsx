import { render } from 'solid-js/web'
import { Show } from 'solid-js'
import 'bulma/css/bulma.min.css'
import './style.css'
import BusTypes from './bus/type'
import BusSelect from './bus/select'
import BusInfo from './bus/info'
import BusImage from '../assets/bus.jpeg'
import ReportPage from './bus/report'
import { apiError, loadData } from './bus/state'

const ApiError = () => (
	<Show when={apiError()}>
		<div class='notification is-danger' style='margin: 20px'>
			<p><strong>SheetDB request failed:</strong> {apiError()}</p>
			<p>
				Re-authorise the Google connection for this API in the{' '}
				<a href='https://sheetdb.io/app' target='_blank' rel='noreferrer'>SheetDB dashboard</a>,
				then retry. If the API was recreated, update <code>sheetId</code> in <code>src/bus/state.jsx</code>.
			</p>
			<button class='button is-small' onClick={() => loadData()}>Retry</button>
		</div>
	</Show>
)

const App = () => (
	<div>
		<header>
			<div class='has-text-right'>
				<button class='button' onClick="localStorage.clear()">
					<i class="fad fa-sync-alt"></i>
				</button>
			</div>
			<h1>Inspector Service</h1>
			<img src={BusImage} style='height:70px' />
		</header>
		<main>
			<ApiError />
			<BusTypes />
			<BusSelect />
			<BusInfo />
			<ReportPage />
		</main>
	</div>
)

const root = document.getElementById('root')
render(() => <App />, root)
