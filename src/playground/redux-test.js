import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const demoData = {
    employees:[
        {
            fname: 'Gulnar',
            lname: 'Hasan-zada',
            dob: '1989-11-18',
            salary: 3500,
            departmentId: 1,
            position: 'Front End Developer',
            addDate: undefined
        }
    ],
    filters:{
        text: '',
        filterby: 'fname'
    }
}

//action generators for employees

const addEmployee = ({fname,lname,dob,salary,departmentId,position})=>({
    type:'ADD',
    employee:{
        id: uuid(),
        fname,
        lname,
        dob,
        salary,
        departmentId,
        position
    }
});

const deleteEmployee = (id = {})=>({
    type: 'DELETE',
    id
});

const updateEmployee = (id = {},updates)=>({
    type: 'UPDATE',
    id,
    updates
});

//action generators for filters
const setTextFilter = (text ='')=>({
    type: 'SET_TEXT_FILTER',
    text
});

const setFilterBy = (filterBy = '')=>({
    type: 'SET_FILTER_BY',
    filterBy
});

//const sortByAmount

//filters Reducer
const filtersReducer = (state = {}, action)=>{
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: action.filterBy
            }
        default:
            return state;
    }
}

//employees Reducer
const employeesReducer = (state = {},action)=>{
    switch (action.type) {
        case 'ADD':
            return [...state, action.employee];
        case 'DELETE':
            return state.filter((employee)=>{
                return employee.id !== action.id
            });
        case 'UPDATE':
            return state.map((employee)=>{
                if(employee.id === action.id){
                    return {
                        ...employee,
                        ...action.updates
                    }
                }else{
                    return state;
                }
            });
        default:
            return state;
    }
}

const getVisibleData = (employees,{text,filterBy})=>{
    return employees.filter((employee)=>{
        if(filterBy === 'fname')
        {
            return employee.fname.toLowerCase().includes(text.toLowerCase()); 
        }else if(filterBy === 'lname'){
            return employee.lname.toLowerCase().includes(text.toLowerCase());
        }else{
            return employee;
        }
            
    });
}

const store = createStore(combineReducers({
    employees: employeesReducer,
    filters: filtersReducer
}));

const employeeOne = store.dispatch(addEmployee({
    fname: 'Gulnar',
    lname: 'Hasan-zada',
    dob: '1989-11-18',
    salary: 3500,
    departmentId: 1,
    position: 'Front End Developer'
}));
const employeeTwo = store.dispatch(addEmployee({
    fname: 'Salman',
    lname: 'Aghayev',
    dob: '1989-10-13',
    salary: 4500,
    departmentId: 2,
    position: 'Devops Engineer'
}));

store.dispatch(deleteEmployee(employeeTwo.employee.id));
store.dispatch(updateEmployee(employeeOne.employee.id, {fname: 'Gulnar'}));

store.dispatch(setTextFilter(''));
store.dispatch(setFilterBy('fname'));

const state = store.getState();

console.log(getVisibleData(state.employees, state.filters));