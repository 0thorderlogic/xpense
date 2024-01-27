import React from 'react';
import { BsFillCaretUpFill } from "react-icons/bs";

const ViewBudget = (props) => {
	return (
		<>
			<span onClick={props.handleEditClick}>
				{props.budget}<i><BsFillCaretUpFill/></i><br/>
				<span className='small dull'>Income</span>
			</span>
		</>
	);
};

export default ViewBudget;
