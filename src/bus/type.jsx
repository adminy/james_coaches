import { Show } from 'solid-js'
import { busType, setBusType, busImages } from './state'

const BusType = ({name}) => (
	<div onMouseDown={e => setBusType(name)}>
		<img src={busImages[name]} alt={name} width='100%' />
		<h3>{name}</h3>
	</div>
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
