import { createSignal } from 'solid-js'
import { edit, setEdit } from '../state'

const [icon, setIcon] = createSignal('fas fa-plus')

export default ({}) => (
	<div class='bus_header_button'>
		<button onClick={e => {
			setEdit(!edit())
			setIcon(edit() ? 'fas fa-minus' : 'fas fa-plus')
		}} style={edit() && 'border: 3px solid red; animation: pulse 2s infinite;'}>
			<i class={icon()}></i>
		</button>
	</div>
)
