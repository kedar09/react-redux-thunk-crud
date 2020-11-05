import { employeeInitialstate } from "../constants/initialStates";
import { EMPLOYEE_CONSTANTS } from "../constants/actionTypes";

const reducer = (state = employeeInitialstate, action) => {    
    switch (action.type) {    
        case EMPLOYEE_CONSTANTS.GET_EMPLOYEE:    
            return {    
                ...state
            };    
        case EMPLOYEE_CONSTANTS.ADD_EMPLOYEE:    
            return {    
                ...state,    
                employees: state.employees.concat(action.payload)    
            };    
        case EMPLOYEE_CONSTANTS.EDIT_EMPLOYEE:    
            return {    
                ...state,    
                employees: state.employees.map(    
                    (content, i) => content.id === action.payload.id ? {...content, employeeName : action.payload.employeeName ,  employeeDepartment : action.payload.employeeDepartment }    
                                            : content)    
            };    
        case EMPLOYEE_CONSTANTS.DELETE_EMPLOYEE:    
            return {    
                ...state,    
                employees: state.employees.filter(item => item.id !== action.id)
            };    
        default:    
            return state;    
    }    
};    

export default reducer;