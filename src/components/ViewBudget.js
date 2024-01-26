import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span onClick={props.handleEditClick}>
				{props.budget}
			</span>
		</>
	);
};

export default ViewBudget;
