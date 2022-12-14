import { issueNumber, issues, setIssues, reportTypes } from '../state'

const DeleteIssue = ({index}) => (
	<div class='column'>
		<button class="button is-small is-danger" onMouseDown={e => {
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

const IssueGroup = ({errorName, errors, i, checkNo}) => (
	<optgroup label = {errorName}>
		{errors.map((o, j) => {
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
					{reportTypes.map(([errorName, errors], i) =>
						<IssueGroup {...{errorName, errors, i, checkNo}} />)}
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
			<textarea value={description} onChange={e => updateIssueDesc(e, index)}
				class="textarea" placeholder="Describe what you did ..." />
			<hr />
		</div>
	</div>

)

const Issues = () => (
	<div class='row rows'>
		{issues().map((o, i) => <Issue {...o} index={i} />)}
		<div class='row' style='position: relative'>
			<br /><br />
			<button class='button is-success submit-button' onMouseDown={e => {
				setIssues(issues().concat([{checkNo: 62, description: ''}]))
			}}><i class="fa-solid fa-plus" /><span> &nbsp;New Issue</span></button>
			<br /><br />
		</div>
	</div>
)

export default Issues
