import { bus, busType } from './state'
import BusHeader from './header'
import { busEntries, setBusEntries } from './state'

const addEntry = e => {
	const entries = [...document.getElementById('newEntry').querySelectorAll('input')]
	setBusEntries(busEntries().concat([[
		{title: 'Miles / KM', placeholder: '123k', value: entries[0].value},
		{title: 'Plate Number', placeholder: '12-D-1234', value: entries[1].value},
		{title: 'Check This Thing 1', checked:  entries[2].checked},
		{title: 'Check This Thing 2', checked: entries[3].checked},
		{title: 'Check This Thing 3', checked: entries[4].checked},
		{title: 'Check This Thing 4', checked: entries[5].checked},
	]]))
	entries[0].value = '' // if I want to clear that, I'll have to make it a signal ...
}

const BusInfo = () => (
	<Show when={busType() && bus()}>
        <div class='bus_info'>
			<BusHeader title={busType() + ' - ' + bus()} page='selectBus' />
			<br />
			<table style='width:100%'>
				<thead>
					<tr>{busEntries()[0].map(({title}) => <th>{title}</th>)}</tr>
				</thead>
				<tbody>
					{busEntries().map(entry => (
						<tr>
							{entry.map(({placeholder, value, checked}) => (
								<td>{value || placeholder || <input type='checkbox' style='transform : scale(2)' checked={checked} />}</td>
							))}
						</tr>
					)).flat()}
				</tbody>
			</table>
			<br /><br /><br /><hr /><br /><br /><br />
			<button style='font-size:40px;float:right' onClick={addEntry}>Add Entry</button>
			<div id='newEntry'>
				{busEntries()[busEntries().length - 1].map((params) => (
					<div>
						<span style='font-size: 38px'>{params.title}: </span>
						<input style={'font-size:40px;' + ('checked' in params && 'transform : scale(3)')} type={'checked' in params ? 'checkbox' : 'text'} {...params} />
						<br /><br />
					</div>
				))}
			</div>
		</div>
	</Show>
)

export default BusInfo
