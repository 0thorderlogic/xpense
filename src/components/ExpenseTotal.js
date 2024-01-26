import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		// <div class='alert alert-primary p-4'>
			<h2 className='total-exp'>₹{total}</h2>
		// </div>
	);
};

export default ExpenseTotal;
