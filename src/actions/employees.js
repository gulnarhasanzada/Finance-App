import uuid from 'uuid';

//action generators for employees

export const addEmployee = ({ fname, lname, dob, salary, departmentId, position, createdAt }) => ({
    type: 'ADD',
    employee: {
        id: uuid(),
        fname,
        lname,
        dob,
        salary,
        departmentId,
        position,
        createdAt
    }
});

export const deleteEmployee = (id = {}) => ({
    type: 'DELETE',
    id
});

export const updateEmployee = (id, updates) => ({
    type: 'UPDATE',
    id,
    updates
});