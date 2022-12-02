import {setBus, setBusType, edit, setReportPage} from '../state'

const goBack = (page) => {
	if (edit()) return alert('Make sure you save first!')
	page === 'selectBus' && setBus(0)
	page ==='selectBusType' && setBusType(0)
	page === 'infoPage' && setReportPage(false)
}

export default ({page}) => (
	<div class='bus_header_button'>
		<button onClick={e => goBack(page)}>
			<i class='fa-sharp fa-solid fa-circle-left'></i>
		</button>
	</div>
)