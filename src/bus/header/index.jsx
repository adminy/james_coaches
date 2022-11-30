
import GoBack from './back'
import Edit from './edit'

export default ({title, page}) => (
	<div class='busTypeHeader'>
		<GoBack page={page} />
		<h2>{title}</h2>
		<Edit />
	</div>
)
