import { Show } from 'solid-js'
import { bus, busType, reportPage } from '../state'
import BusHeader from '../header'
import BusRecords from './records'
import NewReport from './report'

const BusInfo = () => (
	<Show when={busType() && bus() && !reportPage()}>
		<div class='bus-info'>
			<BusHeader title={busType() + ' - ' + bus()} page='selectBus' canEdit={false} />
			<section class='reports-section'>
				<h3 class='section-title'>Reports</h3>
				<BusRecords />
			</section>
			<NewReport />
		</div>
	</Show>
)

export default BusInfo
