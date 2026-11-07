import { Show } from 'solid-js'
import { busType, setBusType, busImages } from './state'

const BusType = ({name}) => (
	<button type='button' class='bus-type-card' onClick={() => setBusType(name)}>
		<img src={busImages[name]} alt='' />
		<span class='bus-type-body'>
			<span class='bus-type-name'>{name}</span>
			<span class='bus-type-hint'>View vehicles</span>
		</span>
		<i class='fas fa-chevron-right bus-type-arrow' aria-hidden='true'></i>
	</button>
)

export default () => (
	<Show when={!busType()}>
		<p class='page-lead'>Choose a vehicle type to view its vehicles and inspection reports.</p>
		<div class='bus-types'>
			<BusType name='Coaches' />
			<BusType name='Double Decker' />
			<BusType name='Mini Bus' />
		</div>
	</Show>
)
