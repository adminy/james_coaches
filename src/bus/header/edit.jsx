import { edit, setEdit } from '../state'

const label = () => edit() ? 'Done editing vehicles' : 'Edit vehicles'

export default () => (
	<button
		type='button'
		class={`header-btn${edit() ? ' is-active' : ''}`}
		aria-label={label()}
		title={label()}
		onClick={() => setEdit(!edit())}
	>
		<i class={edit() ? 'fas fa-check' : 'fas fa-pen'} aria-hidden='true'></i>
	</button>
)
