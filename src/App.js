import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';

const App = () => {
	return (
		<AppProvider>
			<div className='container'>
				<ExpenseTotal />
				<div className='widget'>
					<span className='bud'><Budget/></span>
					<hr/>
					<span className='rem-bud'><RemainingBudget/></span>
				</div>
				<ExpenseList />
				<AddExpenseForm />
			</div>
		</AppProvider>
	);
};

export default App;
