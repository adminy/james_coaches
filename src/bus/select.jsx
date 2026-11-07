import { Show } from 'solid-js'
import { busType, bus, setBus, edit, buses, setBuses, busImages, setReports, state, request, setApiError } from './state'
import BusHeader from './header'

const busTypes = ['Coaches', 'Double Decker', 'Mini Bus']

const deleteBus = async busNo => {
	const previous = buses()
	const remaining = previous.filter(({plateNumber}) => plateNumber !== busNo)
	setBuses(remaining)
	state.vehicles = remaining
	try {
		await request(`/plateNumber/${encodeURIComponent(busNo)}?sheet=vehicles`, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		setApiError('')
	} catch (err) {
		setBuses(previous)
		state.vehicles = previous
		setApiError(err.message)
	}
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
			<button class='input is-large has-background-info has-text-white add_bus' onMouseDown={async e => {
				const div = e.currentTarget.parentElement
				const category = div.querySelector('select').selectedOptions[0].textContent
				const [plate, model, seats, driver] = div.querySelectorAll('input.input')
				const newBus = {plateNumber: plate.value, category, model: model.value, seats: seats.value, driver: driver.value}
				try {
					await request('?sheet=vehicles', {
						method: 'POST',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({data: [newBus]})
					})
				} catch (err) {
					setApiError(err.message)
					return
				}
				const added = buses().concat([newBus])
				setBuses(added)
				state.vehicles = added
				setApiError('')
				plate.value = ''
				model.value = ''
				seats.value = undefined
				driver.value = ''
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
						setReports(state.records.filter(b => b.plateNumber === bus.plateNumber))
					}} />)}
			</div>
			<br /><br /><br />
			<EditBuses />
			<br /><br /><br />
		</div>
	</Show>
)
