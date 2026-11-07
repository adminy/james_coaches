const Field = ({title, placeholder, name, setName}) => (
	<label class='field'>
		<span class='field-label'>{title}</span>
		<input class='input' type='text' value={name()} placeholder={placeholder} onInput={e => setName(e.currentTarget.value)} />
	</label>
)

export default Field
