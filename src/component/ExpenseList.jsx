// ExpenseList.jsx
import React from 'react';
import styled from 'styled-components';

const ExpenseList = ({ expenses, selectedDate }) => {
    return (
        <ExpenseContainer>
            <DateTitle>{selectedDate}</DateTitle>
            {expenses[selectedDate]?.map((expense, index) => (
                <ExpenseItem key={index}>
                    <ExpenseIcon>{expense.icon}</ExpenseIcon>
                    <ExpenseAmount>-{expense.amount.toLocaleString()}원</ExpenseAmount>
                    <ExpenseDescription>{expense.description}</ExpenseDescription>
                </ExpenseItem>
            ))}
        </ExpenseContainer>
    );
};

const ExpenseContainer = styled.div`
  margin-top: 20px;
`;

const DateTitle = styled.h3`
  margin-bottom: 10px;
`;

const ExpenseItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const ExpenseIcon = styled.span`
  margin-right: 10px;
`;

const ExpenseAmount = styled.span`
  margin-right: 10px;
  font-weight: bold;
`;

const ExpenseDescription = styled.span`
  color: #666;
`;

export default ExpenseList;