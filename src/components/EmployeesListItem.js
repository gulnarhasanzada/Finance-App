import React from "react";
import moment from "moment";

const EmployeesListItem = ({fname, lname, dob, salary,departmentId, position,createdAt})=>(
    <tr>
        <td>{fname} {lname}</td>
        <td>{moment(dob).format('DD-MM-YYYY')}</td>
        <td>{departmentId}</td>
        <td>{position}</td>
        <td>{salary}</td>
        <td>{moment(createdAt).format('DD-MM-YYYY')}</td>
    </tr>
);

export default EmployeesListItem;