import { report, issues, setIssues } from '../state'

const reportTypes = Object.entries(report).filter(([k, v]) => Array.isArray(v)).slice(0, -1)

const issueNumber = (i, j) => reportTypes.slice(0, i).map(x => x[1].length).reduce((a, b) => a + b, 0) + j

const DeleteIssue = ({index}) => (
	<div class='column'>
		<button class="button is-small is-danger" onClick={e => {
			setIssues(issues().filter((_, i) => i !== index))
		}}><i class="fas fa-minus-circle"></i></button>
	</div>
)

const changeIssueType = (e, index) => {
	const issuez = issues()
	issuez[index].checkNo = e.currentTarget.selectedIndex
	setIssues(issuez)
}

const updateIssueDesc = (e, index) => {
	const issuez = issues()
	issuez[index].description = e.currentTarget.value
	setIssues(issuez)
}

const IssueGroup = ({k, v, i, checkNo}) => (
	<optgroup label = {k}>
		{v.map((o, j) => {
			const checkNum = issueNumber(i, j)
			return <option selected={checkNo === checkNum && 'selected'}>{
				`Check No: ${checkNum + 1} TM No: ${o['TM No.']}
				Item Inspected: ${o['Item Inspected']}`}</option>
		})}
	</optgroup>
)

const IssueOptions = ({index, checkNo}) => (
	<div class='columns is-mobile'>
		<div class="column is-four-fifths">
			<div class="select">
				<select onChange={e => changeIssueType(e, index)}>
					{reportTypes.map(([k, v], i) => <IssueGroup {...{k, v, i, checkNo}} />)}
				</select>
			</div>
		</div>
		<DeleteIssue index={index} />
	</div>
)

const Issue = ({index, checkNo, description}) => (
	<div class='rows'>
		<div class="row">
			<IssueOptions {...{index, checkNo}} />
		</div>
		<div class="row">
			<textarea class="textarea" placeholder="Describe what you did ..." value={description} onChange={e => updateIssueDesc(e, index)} />
			<hr />
		</div>
	</div>

)

const Issues = () => (
	<div class='row rows'>
		{issues().map((o, i) => <Issue {...o} index={i} />)}
		<div class='row' style='position: relative'>
			<br /><br />
			<button class='button is-success submit-button' onClick={e => {
				setIssues(issues().concat([{checkNo: 62, description: ''}]))
			}}><i class="fa-solid fa-plus" /><span> &nbsp;New Issue</span></button>
			<br /><br />
		</div>
	</div>
)

export default Issues
