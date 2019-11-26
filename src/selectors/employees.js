import moment from "moment";

export default (employees, { filterByFullname,filterByDepartmentId,filterByPosition,orderByType }) => {
    const filteredData =  employees.filter((employee) => {

        const fullnameMatch = filterByFullname ? (employee.fname.toLowerCase().includes(filterByFullname.toLowerCase()) || employee.lname.toLowerCase().includes(filterByFullname.toLowerCase())) :true;
        const departmentIdMatch = filterByDepartmentId ? employee.departmentId == filterByDepartmentId :true; 
        const positionMatch = filterByPosition ? employee.position.toLowerCase().includes(filterByPosition.toLowerCase()):true;
        
        return fullnameMatch && departmentIdMatch && positionMatch;
    });

    // console.log(moment());
    // return filteredData;
    if(orderByType){
        if(orderByType ==='asc'){
            return filteredData.sort((a, b) => a.createdAt.valueOf() - b.createdAt.valueOf())
        }
        else{
            return filteredData.sort((a, b) => b.createdAt.valueOf() - a.createdAt.valueOf())
        }
    }else{
        return filteredData;
    }
    
}