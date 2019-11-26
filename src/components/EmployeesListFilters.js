import React from "react";
import { connect } from "react-redux";
import { setFilterByFullname, setFilterByDepartmentId, setFilterByPosition, setOrderByType } from "../actions/filters";
import selectedEmployees from "../selectors/employees";

const EmployeesListFilters = (props) => {
    const asc = props.setOrderByType === 'asc' ? 'selected' : '';
    const desc = props.setOrderByType === 'desc' ? 'selected' : '';
    return(
        <tr>
            <td>
                <input type="text" name="fullname" onChange={(e) => {
                    props.dispatch(setFilterByFullname(e.target.value));
                }} />
            </td>
            <td></td>
            <td>
                <input type="text" name="departmentId" onChange={(e) => {
                    props.dispatch(setFilterByDepartmentId(e.target.value));
                }} />
            </td>
            <td>
                <input type="text" name="position" onChange={(e) => {
                    props.dispatch(setFilterByPosition(e.target.value));
                }} />
            </td>
            <td></td>
            <td>
                <select value = {props.filters.orderByType } onChange={(e) => {
                    props.dispatch(setOrderByType(e.target.value))
                }}>
                    <option value="asc" >Asc</option>
                    <option value="desc" >Desc</option>
                </select>
            </td>
        </tr>
    );
}


const mapStateToParams = (state) => ({
    employees: selectedEmployees(state.employees, state.filters),
    filters: state.filters
});

export default connect(mapStateToParams)(EmployeesListFilters);



// import React from "react";
// import { connect } from "react-redux";
// import { setFilterBy,setTextFilter } from "../actions/filters";
// import selectedEmployees from "../selectors/employees";

// const EmployeesListFilters = (props)=>(
//         <tr>
//             <td><input type="text" name="fullname" onChange={(e) => {
//                 props.dispatch(setFilterBy(e.target.getAttribute('name')));
//                 props.dispatch(setTextFilter(e.target.value));
//             }} /></td>
//             <td></td>
//             <td><input type="text" name="departmentId" onChange={(e) => {
//                 props.dispatch(setFilterBy(e.target.getAttribute('name')));
//                 props.dispatch(setTextFilter(e.target.value));
//             }}/></td>
//             <td><input type="text" name="position" onChange={(e) => {
//                 props.dispatch(setFilterBy(e.target.getAttribute('name')));
//                 props.dispatch(setTextFilter(e.target.value));
//             }}/></td>
//             <td></td>
//             <td></td>
//         </tr>
        
    
// );


// const mapStateToParams = (state)=>({
//     employees: selectedEmployees(state.employees, state.filters),
//     filters: state.filters
// });

// export default connect(mapStateToParams)(EmployeesListFilters);