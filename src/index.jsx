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
		<div class='api-banner' role='alert'>
			<p><strong>SheetDB request failed:</strong> {apiError()}</p>
			<p>
				Re-authorise the Google connection for this API in the{' '}
				<a href='https://sheetdb.io/app' target='_blank' rel='noreferrer'>SheetDB dashboard</a>,
				then retry. If the API was recreated, update <code>sheetId</code> in <code>src/bus/state.jsx</code>.
			</p>
			<button type='button' class='btn-primary' onClick={() => loadData()}>Retry</button>
		</div>
	</Show>
)

const clearCache = () => {
	if (!window.confirm('Clear cached data and reload?')) return
	localStorage.clear()
	location.reload()
}

const App = () => (
	<div>
		<header class='app-header'>
			<div class='app-header-inner'>
				<img class='app-logo' src={BusImage} alt="James's Coaches" />
				<div class='app-heading'>
					<h1>Inspector Service</h1>
					<p>James's Coaches</p>
				</div>
				<button type='button' class='icon-btn' aria-label='Clear cached data and reload' title='Clear cached data and reload' onClick={clearCache}>
					<i class='fad fa-sync-alt' aria-hidden='true'></i>
				</button>
			</div>
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
