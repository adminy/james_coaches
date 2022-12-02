import {Show} from 'solid-js'
import {reportPage, busType, bus, report} from './state'
import GoBack from './header/back'

const reportTypes = Object.entries(report).filter(([k, v]) => Array.isArray(v)).slice(0, -1)

const Field = ({key, value}) => (
	<div class='column'>
		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label">{key}</label>
			</div>
			<div class="field-body">
				<div class="field">
					<p class="control">
						<input class="input is-static" type="text" value={value} readonly />
					</p>
				</div>
			</div>
		</div>
	</div>
)

const ReportInfo = ({date, issues, inspectorName, miles}) => (
	<div style='margin: 20px'>

		<div class='title'>Vehicle Inspection Report (PSV)</div>
		<div class='columns is-mobile'>
			<Field key='Operator' value='James Coaches' />
			<Field key='Vehicle Reg/Fleet No' value={bus()} />
		</div>
        <div class='columns is-mobile'>
			<Field key='Odometer Reading' value={miles} />
			<Field key='Vehicle Make/Model' value={busType() + ' - Unknown'} />
		</div>
        <div class='columns is-mobile'>			
			<Field key='Name of Inspector' value={inspectorName} />
			<Field key='Date' value={date} />
		</div>
				{reportTypes.map(([checkLocation, v], i) => (
					<div>
						<div class='subtitle'>{String.fromCharCode('A'.charCodeAt() + i)}: {checkLocation}</div>
						<table style='width:90%; margin: 20px'>
						<thead>
							<tr>{['Check No', 'TM No.', 'Item Inspected', <span>Condition <br /> <i class="fas fa-check"></i> or <i class="fas fa-times" /></span>, 'Description of Defect', 'Rectified By'].map(title => <th><span style='margin: 5px'>{title}</span></th>)}</tr>
						</thead>
						<tbody>
							{v.map((o, j) => {
								const checkNo = reportTypes.slice(0, i).map(x => x[1].length).reduce((a, b) => a + b, 0) + j
								return <tr>
								<td><span style='margin: 5px'>{checkNo + 1}</span></td>
								<td><span style='margin: 5px'>{o['TM No.']}</span></td>
								<td><span style='margin: 5px'>{o['Item Inspected']}</span></td>
								<td><span style='margin: 5px'>{issues.find(issue => issue.checkNo === checkNo) ?  <i class="fas fa-times" /> : <i class="fas fa-check"></i>}</span></td>
								<td><span style='margin: 5px'>{issues.find(issue => issue.checkNo === checkNo)?.description || ''}</span></td>
								<td><span style='margin: 5px'></span></td>
							</tr>
							})}
						</tbody>
					</table>
				</div>
				))}
	</div>
)

const ReportPage = () => {
	
	return <Show when={reportPage()}>
		<GoBack page='infoPage' />
		<ReportInfo {...reportPage()} />
	</Show>
}

export default ReportPage
