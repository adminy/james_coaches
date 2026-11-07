import { Show } from 'solid-js'
import { busType, setBusType, bus, setBus, edit, buses, setBuses, busImages, setReports, state, request, setApiError } from './state'
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

const addBus = async e => {
	e.preventDefault()
	const form = e.currentTarget
	const newBus = Object.fromEntries(new FormData(form))
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
	setBusType(newBus.category)
	setApiError('')
	form.reset()
	form.querySelector('[name=category]').value = busType()
}

const EditBuses = () => (
	<Show when={edit()}>
		<form class='panel edit-form' onSubmit={addBus}>
			<h3 class='section-title'>Add a vehicle</h3>
			<label class='field'>
				<span class='field-label'>Vehicle type</span>
				<span class='select'>
					<select name='category' value={busType()}>
						{busTypes.map(name => <option value={name}>{name}</option>)}
					</select>
				</span>
			</label>
			<div class='form-grid'>
				<label class='field'>
					<span class='field-label'>Bus plate number</span>
					<input name='plateNumber' class='input' placeholder='e.g. 12 D 1234' autocomplete='off' autocapitalize='characters' />
				</label>
				<label class='field'>
					<span class='field-label'>Bus model</span>
					<input name='model' class='input' placeholder='e.g. Volvo 9700' />
				</label>
				<label class='field'>
					<span class='field-label'>Number of seats</span>
					<input name='seats' class='input' type='number' inputmode='numeric' min='0' placeholder='e.g. 53' />
				</label>
				<label class='field'>
					<span class='field-label'>Driver</span>
					<input name='driver' class='input' placeholder='Driver name' />
				</label>
			</div>
			<div class='form-actions'>
				<button type='submit' class='btn-primary btn-block'>
					<i class='fas fa-plus' aria-hidden='true'></i> Add bus
				</button>
			</div>
		</form>
	</Show>
)

const DeleteBusButton = ({category, model, plateNumber}) => {
	const deleteText = `Are you sure you want to delete ${category} ${model} - ${plateNumber}?`
	return (
		<Show when={edit()}>
			<button type='button' class='bus-delete' aria-label={deleteText} onClick={() => window.confirm(deleteText) && deleteBus(plateNumber)}>
				<i class='fas fa-trash' aria-hidden='true'></i>
			</button>
		</Show>
	)
}

const BusBlock = ({category, model, plateNumber, seats, driver, onClick}) => (
	<article class='bus-card'>
		<button type='button' class='bus-card-main' onClick={onClick} aria-label={`Open inspection reports for ${plateNumber}`}>
			<img src={busImages[category]} alt='' />
			<span class='bus-card-body'>
				<span class='bus-card-title'>{model || category}</span>
				<span class='bus-card-meta'>{[seats && `${seats} seats`, driver].filter(Boolean).join(' · ')}</span>
				<span class='bus-plate'>{plateNumber}</span>
			</span>
		</button>
		<DeleteBusButton {...{plateNumber, category, model}} />
	</article>
)

export default () => {
	const categoryBuses = () => buses().filter(b => b.category === busType())
	return (
		<Show when={busType() && !bus()}>
			<BusHeader title={busType()} page='selectBusType' />
			<div class='bus-list'>
				<Show when={!categoryBuses().length}>
					<p class='empty-state bus-empty'>No vehicles in this category yet.</p>
				</Show>
				{categoryBuses().map(vehicle => <BusBlock {...vehicle} onClick={() => {
					setBus(vehicle.plateNumber)
					setReports(state.records.filter(r => r.plateNumber === vehicle.plateNumber))
				}} />)}
			</div>
			<EditBuses />
		</Show>
	)
}
