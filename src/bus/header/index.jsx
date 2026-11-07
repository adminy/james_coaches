import GoBack from './back'
import Edit from './edit'
import { Show } from 'solid-js'

export default (props) => (
	<div class='bus-type-header'>
		<GoBack page={props.page} />
		<h2>{props.title}</h2>
		<Show when={props.canEdit !== false}>
			<Edit />
		</Show>
	</div>
)
