import { Show } from 'solid-js'
import { reports, splitIssues } from '../state'

const header = ['Date', 'Checked By', 'Miles', 'Info']

const BusPastRecords = () => (
	<div class='records-wrap'>
		<Show when={reports().length} fallback={<p class='empty-state'>No inspection reports for this vehicle yet.</p>}>
			<table class='records-table'>
				<thead>
					<tr>{header.map(title => <th><span>{title}</span></th>)}</tr>
				</thead>
				<tbody>
					{reports().map(({date, issues, inspectorName, miles}) => (
						<tr>
							<td data-label='Date'><span>{date}</span></td>
							<td data-label='Checked by'><span>{inspectorName}</span></td>
							<td data-label='Miles'><span>{miles}</span></td>
							<td data-label='Info'><span>{splitIssues(issues).map((description) => <span>{description}<br /></span>)}</span></td>
						</tr>
					))}
				</tbody>
			</table>
		</Show>
	</div>
)

export default BusPastRecords
