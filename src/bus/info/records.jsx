import { setReportPage, reports } from '../state'

const header = ['Date', 'Checked By', 'Miles', /*'Issues'*/, 'Info'/*, 'View Report'*/]

const BusPastRecords = () => (
	<div>
		<table style='width:90%; margin: 20px'>
			<thead>
				<tr>{header.map(title => <th><span>{title}</span></th>)}</tr>
			</thead>
			<tbody>
				{reports().map(({date, issues, inspectorName, miles}) => (
					<tr>
						<td><span>{date}</span></td>
						<td><span>{inspectorName}</span></td>
						<td><span>{miles}</span></td>
						{/* <td><span>{issues.length}</span></td> */}
						<td><span>{issues.map((description) => <span>{description}<br /></span>)}</span></td>
						
						{/* <td><button class='button is-small is-info' onMouseDown={e => {
							setReportPage({date, issues, inspectorName, miles})
						}}>View</button></td> */}
					</tr>
				))}
			</tbody>
		</table>
	</div>
)

export default BusPastRecords
