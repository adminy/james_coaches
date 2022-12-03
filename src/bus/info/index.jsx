import { bus, busType, reportPage } from '../state'
import BusHeader from '../header'
import BusRecords from './records'
import NewReport from './report'

const BusInfo = () => (
	<Show when={busType() && bus() && !reportPage()}>
        <div class='bus_info'>
			<BusHeader title={busType() + ' - ' + bus()} page='selectBus' canEdit={false} />
			<div class='has-text-centered title'>Reports List</div>
			<BusRecords />
			<br /><br />
			<NewReport />
			<br /><br /><br />
		</div>
	</Show>
)

export default BusInfo
