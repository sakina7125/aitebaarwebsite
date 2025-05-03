import React, { useState } from 'react';
import './Wallet.css';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Label, Sector } from 'recharts';

const Wallet = () => {
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState('April');
  
  // Sample data - replace with actual data from your backend
  const monthlyData = {
    startingBalance: 10000,
    currentBalance: 3564,
    totalExpenses: 6436,
    expenses: [
      { name: 'House Rent', value: 1450, color: '#FF6B6B' },
      { name: 'Car', value: 707, color: '#4ECDC4' },
      { name: 'Groceries', value: 884, color: '#45B7D1' },
      { name: 'Dining', value: 573, color: '#96CEB4' },
      { name: 'Travel', value: 720, color: '#FFEEAD' },
      { name: 'Utilities', value: 960, color: '#D4A5A5' },
      { name: 'Others', value: 1142, color: '#9FA8DA' }
    ]
  };

  return (
    <div className="wallet-container">
      <nav className="wallet-nav">
        <img 
          src="/AitebaarLogo.png" 
          alt="Aitebaar Logo" 
          className="nav-logo"
          onClick={() => navigate('/')} 
        />
        <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
      </nav>

      <div className="wallet-content">
        <div className="wallet-header">
          <h1>Monthly Expenses</h1>
          <div className="date-selector">
            <label>From:</label>
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
              <option value="April">April 1</option>
              {/* Add more months */}
            </select>
            <label>To:</label>
            <span>April 30</span>
          </div>
        </div>

        <div className="balance-overview">
          <div className="balance-card">
            <h3>Starting Balance</h3>
            <p className="amount">Rs. {monthlyData.startingBalance.toLocaleString()}</p>
          </div>
          <div className="balance-card">
            <h3>Current Balance</h3>
            <p className="amount">Rs. {monthlyData.currentBalance.toLocaleString()}</p>
          </div>
          <div className="balance-card">
            <h3>Total Expenses</h3>
            <p className="amount">Rs. {monthlyData.totalExpenses.toLocaleString()}</p>
          </div>
        </div>

        <div className="expenses-chart">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={monthlyData.expenses}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={150}
                paddingAngle={5}
                dataKey="value"
                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
                    return (
                      <text
                        x={x}
                        y={y}
                        fill="white"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="pie-percentage"
                      >
                        {`${(percent * 100).toFixed(1)}%`}
                      </text>
                    );
                  }}
              >
                {monthlyData.expenses.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="expenses-breakdown">
          <h2>Expenses Breakdown</h2>
          <div className="expenses-list">
            {monthlyData.expenses.map((expense, index) => (
              <div key={index} className="expense-item">
                <div className="expense-color" style={{ backgroundColor: expense.color }}></div>
                <span className="expense-name">{expense.name}</span>
                <span className="expense-value">Rs. {expense.value.toLocaleString()}</span>
                <span className="expense-percentage">
                  {((expense.value / monthlyData.totalExpenses) * 100).toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;