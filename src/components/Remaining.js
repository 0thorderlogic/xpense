import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { BsFillCaretDownFill } from "react-icons/bs";

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div class={`alert p-4 ${alertType}`}>
			<span>{budget - totalExpenses}<i className='icon'><BsFillCaretDownFill/></i></span><br/>
			<span className='small dull'>Remaining</span>
		</div>
	);
};

export default RemainingBudget;
