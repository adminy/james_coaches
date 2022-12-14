import { report, issues, setIssues, miles, setMiles, reports, setReports, inspectorName, setInspectorName, state, baseUrl, sheetId, bus } from '../state'
import Field from './field'
// import Issues from './issues'

const finishReport = e => {
	const issueText = [...e.currentTarget.parentElement.parentElement.parentElement.childNodes][2].firstChild.value.split('\n') || issues()
	const record = {
		date: report.Date,
		issues: issueText,
		inspectorName: inspectorName(),
		miles: miles(),
		plateNumber: bus()
	}
	const body = JSON.stringify({ data: {...record, issues: record.issues.join('\n') } })
	console.log(record, body)
	const headers = { Accept: 'application/json', 'Content-Type': 'application/json' }

	fetch(`${baseUrl}/${sheetId}`, { method: 'POST', headers, body}).then(res => res.json()).then(console.log)

	state.records.push(record)
	setReports(reports().concat([record]))

	// cleanup
	setIssues([])
	setInspectorName('Iurie Bivol')
	setMiles('')
}

const ReportButton = () => (
	<div class='row'>
		<div class="control" style='margin: 20px; float: right'>
			<button class="button has-primary-color submit-button"
				onMouseDown={finishReport}
				><i class="fa-solid fa-check"></i><span> &nbsp;Finished</span></button>
			<br />
		</div>
	</div>
)

const NewReport = () => (
	<div class='rows' style='border: 1px solid #ccc; border-radius: 10px; margin: 20px'>
		<div class='row has-text-centered title'>Add new Report</div>
		<div class='row'>
			<Field name={inspectorName} setName={setInspectorName}
				title='Inspector Name' placeholder='Inspector Name ...' />
			<Field name={miles} setName={setMiles} title='Miles' placeholder='123k' />
			<br /><br />
		</div>

		<div class="row">
			<textarea value={issues().join('\n')} onChange={e => setIssues(e.currentTarget.value.split('\n'))}
				class="textarea" placeholder="Describe what you did ..." />
			<hr />
		</div>

		{/* <Issues /> */}
		<ReportButton />
	</div>
)
export default NewReport
