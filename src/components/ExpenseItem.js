import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { MdDeleteForever } from "react-icons/md";

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li className='list'>
			<span className='left'>{props.name}</span>
			<span className='center'>₹{props.cost}</span>
			<span className='right del'><MdDeleteForever onClick={handleDeleteExpense}/></span>
		</li>
	);
};

export default ExpenseItem;