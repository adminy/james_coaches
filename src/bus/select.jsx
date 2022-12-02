import { Show } from 'solid-js'
import { busType, bus, setBus, edit, buses, setBuses, resetBuses, busImages } from './state'
import BusHeader from './header'

const onClickSelectBus = (busNo) => {
	if (edit()) return alert('Make sure you save first!')
	setBus(busNo)
}

const deleteBus = busNo => {
	setBuses(buses().filter(({plateNumber}) => plateNumber !== busNo))
}

const EditBuses = () => (
	<Show when={edit()}>
		<div>
			<input placeholder='Bus Plate Number' style='font-size: 40px' /><br />
			<input placeholder='Bus Image Url' style='font-size: 40px' /><br />
			<button style='font-size: 40px' onClick={e => {
				const plate = e.currentTarget.parentElement.firstChild
				const img = e.currentTarget.parentElement.childNodes[2]
				setBuses(buses().concat([{plateNumber: plate.value, image: img.value}]))
				plate.value = ''
				img.value = ''
			}}>Add Bus</button>
			<br /><br /><br />
		</div>
	</Show>
)

export default () => (
	<Show when={busType() && !bus()}>
		<div>
			<BusHeader title={busType()} page='selectBusType' />
			<br />
			<div class='bus_list'>
				{buses().map(({plateNumber, image}) => (
					<div>
						<img src={busImages[busType()]} width='100%' onClick={e => onClickSelectBus(plateNumber)} />
						<h2 style='margin: 0; padding: 0' onClick={e => onClickSelectBus(plateNumber)}>{plateNumber}</h2>
						<Show when={edit()}>
							<button onClick={e => deleteBus(plateNumber)} style='float: right; font-size: 25px; width: 100%'>
								<i class="fas fa-times" style='color: red'></i>
							</button>
						</Show>
					</div>
				))}
			</div>
		</div>
		<EditBuses />
		<br /><br />
	</Show>
)
