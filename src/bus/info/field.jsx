
const Field = ({title, placeholder, name, setName}) => (
	<div class="field is-horizontal" style='margin: 20px'>
		<div class="field-label is-normal">
			<label class="label">{title}</label>
		</div>
		<div class="field-body">
			<div class="field">
				<p class="control">
					<input class="input" type="text" value={name()} placeholder={placeholder} onKeyUp={e => setName(e.currentTarget.value)} />
				</p>
			</div>
		</div>
	</div>
)

export default Field
