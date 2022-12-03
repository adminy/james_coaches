import { report, issues, setIssues, miles, setMiles, reports, setReports, inspectorName, setInspectorName } from '../state'
import Field from './field'
import Issues from './issues'

const finishReport = e => {
	setReports(reports().concat([{
		date: report.Date,
		issues: issues(),
		inspectorName: inspectorName(),
		miles: miles()
	}]))

	// cleanup
	setIssues([])
	setInspectorName('Iurie Bivol')
	setMiles('')
}

const ReportButton = () => (
	<div class='row'>
		<div class="control" style='margin: 20px; float: right'>
			<button class="button has-primary-color submit-button"
				onClick={finishReport}
				><i class="fa-solid fa-check"></i><span> &nbsp;Finished</span></button>
			<br />
		</div>
	</div>
)

const NewReport = () => (
	<div class='rows' style='border: 1px solid #ccc; border-radius: 10px; margin: 20px'>
		<div class='row has-text-centered title'>Add new Report</div>
		<div class='row'>
			<Field title='Inspector Name' placeholder='Inspector Name ...' name={inspectorName} setName={setInspectorName} />
			<Field title='Miles' placeholder='123k' name={miles} setName={setMiles} />
			<br /><br />
		</div>
		<Issues />
		<ReportButton />
	</div>
)
export default NewReport
