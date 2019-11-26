import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import moment from "moment";
import {addEmployee, deleteEmployee, updateEmployee} from './actions/employees';
import {setFilterBy, setTextFilter} from './actions/filters';
import getVisibleData from './selectors/employees';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log(moment().valueOf());
const store = configureStore();

const employeeOne = store.dispatch(addEmployee({
    fname: 'Gulnar',
    lname: 'Hasan-zada',
    dob: '1989-11-18',
    salary: 3500,
    departmentId: 1,
    position: 'Front End Developer',
    createdAt: 22222222222
}));

const employeeTwo = store.dispatch(addEmployee({
    fname: 'Salman',
    lname: 'Aghayev',
    dob: '1989-10-13',
    salary: 4500,
    departmentId: 2,
    position: 'Devops Engineer',
    createdAt: 111111111111
}));

const employeeThree = store.dispatch(addEmployee({
    fname: 'Ayaz',
    lname: 'Aghayev',
    dob: '2015-08-26',
    salary: 500,
    departmentId: 1,
    position: 'Senior qicik specialist',
    createdAt: 333333333333,
}));

//store.dispatch(deleteEmployee(employeeTwo.employee.id));
//store.dispatch(updateEmployee(employeeOne.employee.id, {fname: 'Gulnarr'}));

//console.log(employeeOne);

//store.dispatch(setTextFilter('gul'));
//store.dispatch(setFilterBy('fname'));

const state = store.getState();

//console.log(getVisibleData(state.employees, state.filters));

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));