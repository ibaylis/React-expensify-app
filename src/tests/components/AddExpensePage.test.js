import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={ history } />);
})

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
    });

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenCalledWith(expenses[1]);
    });

    //Without beforeEach Jest life cycle method
// test('should render AddExpensePage correctly', () => {
//     const onSubmit = jest.fn();
//     const history = { push: jest.fn() };
//     const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={ history } />);
//     expect(wrapper).toMatchSnapshot();
// })

// test('should handle onSubmit', () => {
//     const onSubmit = jest.fn();
//     const history = { push: jest.fn() };
//     const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={ history } />);
//     wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(onSubmit).toHaveBeenCalledWith(expenses[1]);
// })