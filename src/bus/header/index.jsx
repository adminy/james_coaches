
import GoBack from './back'
import Edit from './edit'
import {Show} from 'solid-js'
export default ({title, page, canEdit=true}) => (
	<div class='busTypeHeader'>
		<GoBack page={page} />
		<h2>{title}</h2>
		<Show when={canEdit}>
			<Edit />
		</Show>
	</div>
)
