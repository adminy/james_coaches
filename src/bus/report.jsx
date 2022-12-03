import {Show} from 'solid-js'
import {reportPage, busType, bus, reportTypes, issueNumber} from './state'
import GoBack from './header/back'

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

const ReportBody = ({checkLocation, i, errors, issues}) => (
	<div>
		<div class='subtitle'>{String.fromCharCode('A'.charCodeAt() + i)}: {checkLocation}</div>
		<table style='width:90%; margin: 20px'>
		<thead>
			<tr>{[
				'Check No',
				'TM No.',
				'Item Inspected',
				<span>
					Condition <br />
					<i class="fas fa-check"></i> or
					<i class="fas fa-times" />
				</span>,
				'Description of Defect',
				'Rectified By'
			].map(title => <th><span>{title}</span></th>)}</tr>
		</thead>
		<tbody>
			{errors.map((o, j) => {
				const checkNo = issueNumber(i, j)
				return <tr>
				<td><span>{checkNo + 1}</span></td>
				<td><span>{o['TM No.']}</span></td>
				<td><span>{o['Item Inspected']}</span></td>
				<td><span>{issues.find(issue => issue.checkNo === checkNo) ? 
					<i class="fas fa-times" /> :
					<i class="fas fa-check"></i>
				}</span></td>
				<td><span>{issues.find(issue => issue.checkNo === checkNo)?.description || ''}</span></td>
				<td><span></span></td>
			</tr>
			})}
		</tbody>
	</table>
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
		{reportTypes.map(([checkLocation, errors], i) =>
			<ReportBody {...{i, checkLocation, issues, errors}} />)}
	</div>
)

const ReportPage = () => {
	
	return <Show when={reportPage()}>
		<GoBack page='infoPage' />
		<ReportInfo {...reportPage()} />
	</Show>
}

export default ReportPage
