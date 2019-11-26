//filters Reducer
const filtersDefaultState = {
    filterByFullname: '',
    filterbyDepartmentId: '',
    filterByPosition: '',
    orderByType:''
};

export default (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'SET_FILTER_BY_FULLNAME':
            return {
                ...state,
                filterByFullname: action.text
            }
        case 'SET_FILTER_BY_DEPARTMENT_ID':
            return {
                ...state,
                filterByDepartmentId: action.text
            }
        case 'SET_FILTER_BY_POSITION':
            return {
                ...state,
                filterByPosition: action.text
            }
        case 'SET_ORDER_BY_TYPE':
            return {
                ...state,
                orderByType: action.text
            }
        default:
            return state;
    }
}


// //filters Reducer
// const filtersDefaultState = {
//     text: '',
//     filterby: '',
//     orderByType: ''
// };

// export default (state = filtersDefaultState, action) => {
//     switch (action.type) {
//         case 'SET_TEXT_FILTER':
//             return {
//                 ...state,
//                 text: action.text
//             }
//         case 'SET_FILTER_BY':
//             return {
//                 ...state,
//                 filterBy: action.filterBy
//             }
//         case 'SET_ORDER_BY_TYPE':
//             return{
//                 ...state,
//                 orderByType: action.orderByType
//             }
//         default:
//             return state;
//     }
// }