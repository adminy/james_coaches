import { setBus, setBusType, setReportPage } from '../state'

const goBack = (page) => {
	page === 'selectBus' && setBus(0)
	page === 'selectBusType' && setBusType(0)
	page === 'infoPage' && setReportPage(false)
}

export default ({page}) => (
	<button type='button' class='header-btn' aria-label='Go back' onClick={() => goBack(page)}>
		<i class='fas fa-chevron-left' aria-hidden='true'></i>
	</button>
)
