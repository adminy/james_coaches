import { bus, busType, report } from './state'
import BusHeader from './header'
import { busEntries, setBusEntries, reportPage, setReportPage } from './state'
import { createSignal } from 'solid-js'

const addEntry = e => {
	const entries = [...document.getElementById('newEntry').querySelectorAll('input')]
	setBusEntries(busEntries().concat([[
		{title: 'Miles / KM', placeholder: '123k', value: entries[0].value},
		{title: 'Plate Number', placeholder: '12-D-1234', value: entries[1].value},
		{title: 'Check This Thing 1', checked:  entries[2].checked},
		{title: 'Check This Thing 2', checked: entries[3].checked},
		{title: 'Check This Thing 3', checked: entries[4].checked},
		{title: 'Check This Thing 4', checked: entries[5].checked},
	]]))
	entries[0].value = '' // if I want to clear that, I'll have to make it a signal ...
}

const AddEntry = () => (
<div>
	<button style='font-size:40px;float:right' onClick={addEntry}>Add Entry</button>
	<div id='newEntry'>
		{busEntries()[busEntries().length - 1].map((params) => (
			<div>
				<span style='font-size: 38px'>{params.title}: </span>
				<input style={'font-size:40px;' + ('checked' in params && 'transform : scale(3)')} type={'checked' in params ? 'checkbox' : 'text'} {...params} />
				<br /><br />
			</div>
		))}
	</div>
</div>
)

const onInspectHover = e => {
	const isLeaving = e.type === 'mouseleave'
	const element = e.currentTarget.childNodes[0]
	element.style.color = isLeaving ? '' : 'limegreen'
	element.style.fontSize = isLeaving ? '100%' : '130%'
	e.currentTarget.style.border = isLeaving ? '' : '1px solid limegreen'
	e.currentTarget.style.backgroundColor = isLeaving ? '' : 'black'
	isLeaving && onInspectorHoverClean(e)	
}


const [issues, setIssues] = createSignal([])
const [issuesDesc, setIssuesDesc] = createSignal([])
const [miles, setMiles] = createSignal('')
const [inspectorName, setInspectorName] = createSignal('Iurie Bivol')
const reportTypes = Object.entries(report).filter(([k, v]) => Array.isArray(v)).slice(0, -1)

const [reports, setReports] = createSignal([{
	date: report.Date,
	issues: [],
	inspectorName: 'Iurie Bivol',
	miles: '123k'
}])

const BusPastRecords = () => (
	<table style='width:90%; margin: 20px'>
		<thead>
			<tr>{['Date', 'Checked By', 'Miles', 'Issues', 'View Report'].map(title => <th><span style='margin: 5px'>{title}</span></th>)}</tr>
		</thead>
		<tbody>
			{reports().map(({date, issues, inspectorName, miles}) => (
				<tr>
					<td><span style='margin: 5px'>{date}</span></td>
					<td><span style='margin: 5px'>{inspectorName}</span></td>
					<td><span style='margin: 5px'>{miles}</span></td>
					<td><span style='margin: 5px'>{issues.length}</span></td>
					<td><button class='button is-small is-info' style='margin: 5px' onClick={e => {
						setReportPage({date, issues, inspectorName, miles})
					}}>View</button></td>
				</tr>
			)).flat()}
		</tbody>
	</table>
)

const Issue = ({index}) => (
	<div class='rows'>
		<div class="row">
			<div class='columns is-mobile'>
				<div class="column is-four-fifths">
					<div class="select">
						<select onChange={e => {
							const issuez = issues()
							issuez[index] = e.currentTarget.selectedIndex
							setIssues(issuez)
						}}>
							{reportTypes.map(([k, v], i) => (
								<optgroup label = {k}>
									{v.map((o, j) => {
										const checkNo = reportTypes.slice(0, i).map(x => x[1].length).reduce((a, b) => a + b, 0) + j
										return <option selected={issues()[index] === checkNo && 'selected'}>{
											'Check No: ' + (checkNo +1) + ' TM No: ' + o['TM No.'] + ' Item Inspected:' +  o['Item Inspected']
										}</option>
									})}
								</optgroup>
							))}
						</select>
					</div>
				</div>
				<div class='column'>
					<button class="button is-small is-danger" onClick={e => {
						setIssues(issues().filter((_, i) => i !== index))
						setIssuesDesc(issuesDesc().filter((_, i) => i !== index))
					}}><i class="fas fa-minus-circle"></i></button>
				</div>
			</div>
		</div>
		<div class="row">
			<textarea class="textarea" placeholder="Describe what you did ..." value={issuesDesc()[index]} onKeyUp={e => {
				const issuezDesc = issuesDesc()
				issuezDesc[index] = e.currentTarget.value
				setIssuesDesc(issuezDesc)
			}}></textarea>
			<hr />
		</div>
	</div>

)

const onInspectorHoverClean = e => {
	const button = e.currentTarget
	const element = button.childNodes[0]
	element.style.color = ''
	element.style.fontSize = '100%'
	button.style.border = ''
	button.style.backgroundColor = ''
}


const BusInfo = () => (
	<Show when={busType() && bus() && !reportPage()}>
        <div class='bus_info'>
			<BusHeader title={busType() + ' - ' + bus()} page='selectBus' canEdit={false} />
			{/** Display list of inspections here */}
			<div class='has-text-centered title'>Reports List</div>

			<BusPastRecords />
			<br /><br />
			<div class='rows' style='border: 1px solid #ccc; border-radius: 10px; margin: 20px'>
				<div class='row has-text-centered title'>Add new Report</div>
				<div class='row'>
					<div class="field is-horizontal" style='margin: 20px'>
						<div class="field-label is-normal">
							<label class="label">Inspector Name</label>
						</div>
						<div class="field-body">
							<div class="field">
								<p class="control">
									<input class="input" type="text" value={inspectorName()} placeholder="Inspector Name ..." onKeyUp={e => setInspectorName(e.currentTarget.value)} />
								</p>
							</div>
						</div>
					</div>
					<div class="field is-horizontal" style='margin: 20px'>
						<div class="field-label is-normal">
							<label class="label">Miles</label>
						</div>
						<div class="field-body">
							<div class="field">
								<p class="control">
									<input class="input" type="email" placeholder="123k" value={miles()} onKeyUp={e => setMiles(e.currentTarget.value)} />
								</p>
							</div>
						</div>
					</div>
					<br /><br />

				</div>
				<div class='row columns'>
					<div class='column'>
					</div>
					<div class='column rows'>{issues().map((_, i) => <Issue index={i} />)}</div>
					<div class='column'>
						<button class='button is-success' onMouseEnter={onInspectHover} onMouseLeave={onInspectorHoverClean} onClick={e => {
							onInspectorHoverClean(e)
							setIssues(issues().concat([0]))
							setIssuesDesc(issuesDesc().concat(['']))
						}}><i class="fa-solid fa-plus" /> &nbsp;New Issue</button>
					</div>
				</div>

				<div class='row'>
					<div class="control" style='margin: 20px; float: right'>
						<button class="button has-primary-color" style="animation: pulse 2s infinite"
							onMouseEnter={onInspectHover}
							onMouseLeave={onInspectorHoverClean}
							onClick={e => {
								onInspectorHoverClean(e)
								setReports(reports().concat([{
									date: report.Date,
									issues: issues().map((checkNo, i) => ({checkNo, description: issuesDesc()[i]})),
									inspectorName: inspectorName(),
									miles: miles()
								}]))

								// cleanup
								setIssues([])
								setIssuesDesc([])
								setInspectorName('Iurie Bivol')
								setMiles('')
							}}
							><i class="fa-solid fa-check"></i> Finished</button>
						<br />
					</div>
				</div>

			</div>

			<br /><br /><br /><hr /><br /><br /><br />


		</div>
	</Show>
)

export default BusInfo
