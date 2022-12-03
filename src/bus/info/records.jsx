import { setReportPage, reports } from '../state'

const header = ['Date', 'Checked By', 'Miles', 'Issues', 'Info', 'View Report']

const BusPastRecords = () => (
	<div>
		<table style='width:90%; margin: 20px'>
			<thead>
				<tr>{header.map(title => <th><span style='margin: 5px'>{title}</span></th>)}</tr>
			</thead>
			<tbody>
				{reports().map(({date, issues, inspectorName, miles}) => (
					<tr>
						<td><span style='margin: 5px'>{date}</span></td>
						<td><span style='margin: 5px'>{inspectorName}</span></td>
						<td><span style='margin: 5px'>{miles}</span></td>
						<td><span style='margin: 5px'>{issues.length}</span></td>
						<td><span style='margin: 5px'>{issues.map(({description}) => <span>{description}<br /></span>)}</span></td>
						
						<td><button class='button is-small is-info' style='margin: 5px' onClick={e => {
							setReportPage({date, issues, inspectorName, miles})
						}}>View</button></td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
)

export default BusPastRecords
