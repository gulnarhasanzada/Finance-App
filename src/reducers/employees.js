//employees Reducer
const employeesDefaultState = [];

export default (state = employeesDefaultState, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.employee];
        case 'DELETE':
            return state.filter((employee) => {
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
                    return employee;
                }
            });
        
        default:
            return state;
    }
}