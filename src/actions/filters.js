//action generators for filters
export const setFilterByFullname = (text = '') => ({
    type: 'SET_FILTER_BY_FULLNAME',
    text
});

export const setFilterByDepartmentId = (text = '') => ({
    type: 'SET_FILTER_BY_DEPARTMENT_ID',
    text
});

export const setFilterByPosition = (text = '') => ({
    type: 'SET_FILTER_BY_POSITION',
    text
});

export const setOrderByType = (text = '') => ({
    type: 'SET_ORDER_BY_TYPE',
    text
});

// //action generators for filters
// export const setTextFilter = (text = '') => ({
//     type: 'SET_TEXT_FILTER',
//     text
// });

// export const setFilterBy = (filterBy = '') => ({
//     type: 'SET_FILTER_BY',
//     filterBy
// });

// export const setOrderBytype = (orderByType='') =>({
//     type: 'SET_ORDER_BY_TYPE',
//     orderByType
// });