import { createSignal, Show } from 'solid-js'
import {edit, setEdit, resetBuses} from '../state'

const [icon, setIcon] = createSignal('fas fa-plus-circle')

export default ({}) => (
	<div class='bus_header_button'>
		<Show when={edit()}>
			<button onClick={e => {
				setEdit(false)
				resetBuses()
			}} style='background: gray; font-size: 30px;margin-right: 50px'>
				<i class="fas fa-broom"></i>
			</button>
		</Show>
		<button onClick={e => setEdit(!edit())}
			style={edit() && 'border: 3px solid red; animation: pulse 2s infinite;'}
			onMouseEnter={e => setIcon('fas fa-check-circle')}
			onMouseLeave={e => setIcon('fas fa-plus-circle')}>
			<i class={icon()}></i>
		</button>
	</div>
)
