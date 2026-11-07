import { createSignal } from 'solid-js'
import { report, issues, setIssues, miles, setMiles, reports, setReports, inspectorName, setInspectorName, state, request, setApiError, bus, mainInspector } from '../state'
import Field from './field'

const [saving, setSaving] = createSignal(false)

const finishReport = async () => {
	if (saving()) return
	setSaving(true)
	const record = {
		date: report.Date,
		issues: issues().filter(Boolean),
		inspectorName: inspectorName(),
		miles: miles(),
		plateNumber: bus()
	}
	const body = JSON.stringify({ data: {...record, issues: record.issues.join('\n') } })
	const headers = { Accept: 'application/json', 'Content-Type': 'application/json' }

	try {
		await request('', { method: 'POST', headers, body})
	} catch (err) {
		setApiError(err.message)
		setSaving(false)
		return
	}

	setReports(reports().concat([record]))
	state.records.push(record)
	setApiError('')

	// cleanup
	setIssues([])
	setInspectorName(mainInspector)
	setMiles('')
	setSaving(false)
}

const NewReport = () => (
	<form class='report-form' onSubmit={e => { e.preventDefault(); finishReport() }}>
		<h3 class='section-title'>Add new report</h3>
		<div class='form-grid'>
			<Field name={inspectorName} setName={setInspectorName}
				title='Inspector name' placeholder='Inspector name ...' />
			<Field name={miles} setName={setMiles} title='Miles' placeholder='123k' />
		</div>
		<label class='field'>
			<span class='field-label'>Issues / work done</span>
			<textarea value={issues().join('\n')} onInput={e => setIssues(e.currentTarget.value.split('\n'))}
				class='textarea' rows='5' placeholder='Describe what you did ...' />
		</label>
		<div class='form-actions'>
			<button type='submit' class='btn-primary btn-block' disabled={saving()}>
				<i class='fas fa-check' aria-hidden='true'></i> {saving() ? 'Saving…' : 'Finished'}
			</button>
		</div>
	</form>
)

export default NewReport
