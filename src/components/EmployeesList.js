import React from 'react';
import { connect } from "react-redux";
import EmployeesListItem from "./EmployeesListItem";
import selectedEmployees from "../selectors/employees";
import EmployeesListFilters from "./EmployeesListFilters";

const EmployeesList = (props)=>(
    <div>
        <table border="1" cellPadding="15">
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Date of Birth</th>
                    <th>Department</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                <EmployeesListFilters />
                {props.employees.map((employee) => {
                    return <EmployeesListItem {...employee} key={employee.id} />
                })}
            </tbody> 
        </table>
    </div>
);

const mapStateToProps = (state)=>({
    employees: selectedEmployees(state.employees,state.filters)
});

export default connect(mapStateToProps)(EmployeesList);