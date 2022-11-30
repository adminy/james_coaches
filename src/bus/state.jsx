import { createSignal } from 'solid-js'
import BusImage from '../../bus.jpeg'

const [bus, setBus] = createSignal(0)
const [busType, setBusType] = createSignal(0)
const [edit, setEdit] = createSignal(false)

const initialBuses = Array(10).fill(0).map(_ => ({
	plateNumber: (Math.random() + 1).toString(36).substring(7),
	image: BusImage
}))


const [buses, setBuses] = createSignal([...initialBuses])

const resetBuses = () => {
	setBuses(initialBuses)
	// actually just re-fetch the list of buses
}

const [busEntries, setBusEntries] = createSignal([
	[
		{title: 'Miles / KM', placeholder: '123k'},
		{title: 'Plate Number', placeholder: '12-D-1234', value: '12-D-1234'},
		{title: 'Check This Thing 1', checked: true},
		{title: 'Check This Thing 2', checked: true},
		{title: 'Check This Thing 3', checked: true},
		{title: 'Check This Thing 4', checked: true},
	],
	[
		{title: 'Miles / KM', placeholder: '123k', value: '160k'},
		{title: 'Plate Number', placeholder: '12-D-1234'},
		{title: 'Check This Thing 1', checked: true},
		{title: 'Check This Thing 2', checked: true},
		{title: 'Check This Thing 3', checked: true},
		{title: 'Check This Thing 4', checked: true},

	],
])

export { bus, setBus, busType, setBusType, edit, setEdit, buses, setBuses, resetBuses, busEntries, setBusEntries }
