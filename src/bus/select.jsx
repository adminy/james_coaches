import { Show } from 'solid-js'
import { busType, bus, setBus, edit, buses, setBuses, resetBuses, busImages } from './state'
import BusHeader from './header'

const deleteBus = busNo => {
	setBuses(buses().filter(({plateNumber}) => plateNumber !== busNo))
}

const BusType = () => (
	<div class='has-icons-left'>
		<span class="icon is-large is-left">
			<i class="fas fa-bus"></i>
		</span>
		<span class="select is-large">
			<select>
				<option selected>Coaches</option>
				<option>Double Decker</option>
				<option>Mini Bus</option>
			</select>
		</span>
	</div>
)

const EditBuses = () => (
	<Show when={edit()}>
		<div class='control' style='position: relative;margin: 20px; border: 1px solid black'>
			<div class='width: 200px'><BusType /></div>
			
			<input placeholder='Bus Model' class='input is-large' /><br />
			<input placeholder='Bus Plate Number' class='input is-large' /><br />
			<button class='input is-large has-background-info has-text-white add_bus' onClick={e => {
				const div = e.currentTarget.parentElement
				const select = div.firstChild.firstChild.childNodes[1].firstChild
				const category = select.options[select.selectedIndex].textContent
				const model = div.childNodes[2]
				const plate = div.childNodes[3]
				setBuses(buses().concat([{plateNumber: plate.value, category, model: model.value}]))
				plate.value = ''
				model.value = ''
			}}> <i class="fas fa-plus"></i> &nbsp; <i class="fas fa-bus"></i> &nbsp; Add Bus</button>
			<br /><br /><br />
		</div>
	</Show>
)

const DeleteBusButton = ({category, model, plateNumber}) => {
	const deleteText = `Are you sure you want to delete ${category} ${model} - ${plateNumber}?`
	return (
		<Show when={edit()}>
			<button onClick={e => window.confirm(deleteText) && deleteBus(plateNumber)} class='button'>
				<i class="fas fa-times"></i>
			</button>
		</Show>
	)
}

const BusBlock = ({category, model, plateNumber, onClick}) => (
	<div>
		<DeleteBusButton {...{plateNumber, category, model}} />
		<img src={busImages[category]} width='100%' onClick={onClick} />
		<div class='subtitle' onClick={onClick}>{model}</div>
		<div class='subtitle' onClick={onClick}>{plateNumber}</div>
	</div>
)

export default () => (
	<Show when={busType() && !bus()}>
		<div class='has-text-centered'>
			<BusHeader title={busType()} page='selectBusType' />
			<div class='bus_list'>
				{buses().filter(b => b.category === busType())
					.map(bus => <BusBlock  {...bus} onClick={e => setBus(bus.plateNumber)} />)}
			</div>
			<br /><br /><br />
			<EditBuses />
			<br /><br /><br />
		</div>
	</Show>
)
