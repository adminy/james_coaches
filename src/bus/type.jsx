import { Show } from 'solid-js'
import { busType, setBusType } from './state'

const BusType = ({name}) => (
	<h1 onClick={e => setBusType(name)}>{name}</h1>
)

export default () => (
	<Show when={!busType()}>
		<div class='bus_types'>
			<BusType name='Coaches' />
			<BusType name='Double Decker' />
			<BusType name='Mini Bus' />
		</div>
	</Show>
)
