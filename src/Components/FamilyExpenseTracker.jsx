// FamilyExpenseTracker.jsx

/*import React, { useState } from 'react';
import './FamilyExpenseTracker.css';

const FamilyExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = () => {
    if (newExpense && amount) {
      const newExpenseItem = {
        category: newExpense,
        amount: parseFloat(amount),
      };

      setExpenses([...expenses, newExpenseItem]);
      setNewExpense('');
      setAmount('');
    }
  };

  return (
    <div className="expense-tracker-container wrapper">
      <h2>Family Expense Tracker</h2>
      <div>
        <label>Expense Category:</label>
        <input
          type="text"
          value={newExpense}
          onChange={(e) => setNewExpense(e.target.value)}
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="button" onClick={addExpense}>
        Add Expense
      </button>
      <div className="expense-list">
        <h3>Expense List</h3>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.category}: ${expense.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FamilyExpenseTracker;*/
import React, { useState, useEffect } from 'react';
import './FamilyExpenseTracker.css';

const FamilyExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState('');
  const [amount, setAmount] = useState('');
  const [totalExpense, setTotalExpense] = useState(0);
  const expenseLimit = 3000;

  useEffect(() => {
    // Calculate total expense whenever expenses change
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    setTotalExpense(total);
  }, [expenses]);

  const addExpense = () => {
    if (newExpense && amount) {
      const newExpenseItem = {
        category: newExpense,
        amount: parseFloat(amount),
      };

      setExpenses([...expenses, newExpenseItem]);
      setNewExpense('');
      setAmount('');
    }
  };

  useEffect(() => {
    // Check if the total expense exceeds the limit
    if (totalExpense > expenseLimit) {
      alert('Expense exceeds the limit of ₹ 3000!');
      // Optionally, you can reset the expenses here
      setExpenses([]);
    }
  }, [totalExpense, expenseLimit]);

  return (
    <div className="expense-tracker-container wrapper">
      <h2>Family Expense Tracker</h2>
      <div>
        <label>Expense Category:</label>
        <input
          type="text"
          value={newExpense}
          onChange={(e) => setNewExpense(e.target.value)}
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="button" onClick={addExpense}>
        Add Expense
      </button>
      <div className="expense-list">
        <h3>Expense List</h3>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.category}: ₹ {expense.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>Total Expense: ₹ {totalExpense.toFixed(2)}</p>
      </div>
    </div>
  );
};


export default FamilyExpenseTracker;

