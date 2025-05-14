import { Show } from 'solid-js'
import { busType, bus, setBus, edit, buses, setBuses, busImages, setReports, state, sheetId } from './state'
import BusHeader from './header'

const busTypes = ['Coaches', 'Double Decker', 'Mini Bus']

const deleteBus = async busNo => {
	const newBuses = buses().filter(({plateNumber}) => plateNumber !== busNo)
	setBuses(newBuses)
	state.vehicles = newBuses
	fetch(`https://sheetdb.io/api/v1/${sheetId}/plateNumber/${busNo}?sheet=vehicles`, {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
}

const BusType = () => (
	<div class='has-icons-left'>
		<span class="icon is-large is-left">
			<i class="fas fa-bus"></i>
		</span>
		<span class="select is-large">
			<select>
				{busTypes.map(name => ((
					<option selected={busType() === name}>{name}</option>
				)))}
			</select>
		</span>
	</div>
)

const EditBuses = () => (
	<Show when={edit()}>
		<div class='control' style='position: relative;margin: 20px; border: 1px solid black'>
			<div class='width: 200px'><BusType /></div>
			
			<input placeholder='Bus Plate Number' class='input is-large' /><br />
			<input placeholder='Bus Model' class='input is-large' /><br />
			<input placeholder='Number of Seats' type="number" class='input is-large' /><br />
			<input placeholder='Driver' class='input is-large' /><br />
			<button class='input is-large has-background-info has-text-white add_bus' onMouseDown={e => {
				const div = e.currentTarget.parentElement
				const select = div.firstChild.firstChild.childNodes[1].firstChild
				const category = select.options[select.selectedIndex].textContent
				const plate = div.childNodes[2]
				const model = div.childNodes[3]
				const seats = div.childNodes[4]
				const driver = div.childNodes[5]
				const newBus = {plateNumber: plate.value, category, model: model.value, seats: seats.value, driver: driver.value}
				setBuses(buses().concat([newBus]))
				state.vehicles.push(newBus)
				plate.value = ''
				model.value = ''
				seats.value = undefined
				driver.value = ''

				fetch(`https://sheetdb.io/api/v1/${sheetId}?sheet=vehicles`, {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({data: [newBus]})
				})
			}}> <i class="fas fa-plus"></i> &nbsp; <i class="fas fa-bus"></i> &nbsp; Add Bus</button>
			<br /><br /><br />
		</div>
	</Show>
)

const DeleteBusButton = ({category, model, plateNumber}) => {
	const deleteText = `Are you sure you want to delete ${category} ${model} - ${plateNumber}?`
	return (
		<Show when={edit()}>
			<button onMouseDown={e => window.confirm(deleteText) && deleteBus(plateNumber)} class='button'>
				<i class="fas fa-times"></i>
			</button>
		</Show>
	)
}

const BusBlock = ({category, model, plateNumber, seats, driver, onClick}) => (
	<div>
		<DeleteBusButton {...{plateNumber, category, model}} />
		<img src={busImages[category]} width='100%' onMouseDown={onClick} />
		<div class='subtitle' onMouseDown={onClick}>{model}</div>
		<div class='subtitle' onMouseDown={onClick}>{seats ? <><i class="fad fa-ski-lift is-4"></i><span>{seats}</span></> : ''}</div>
		<div class='subtitle' onMouseDown={onClick}>{driver}</div>
		<div class='subtitle' onMouseDown={onClick}>{plateNumber}</div>
	</div>
)

export default () => (
	<Show when={busType() && !bus()}>
		<div class='has-text-centered'>
			<BusHeader title={busType()} page='selectBusType' />
			<div class='bus_list'>
				{buses().filter(b => b.category === busType())
					.map(bus => <BusBlock {...bus} onClick={e => {
						setBus(bus.plateNumber)
						const newRecords = state.records.filter(b => b.plateNumber === bus.plateNumber)
						setReports(newRecords)
						state.records = newRecords
					}} />)}
			</div>
			<br /><br /><br />
			<EditBuses />
			<br /><br /><br />
		</div>
	</Show>
)
