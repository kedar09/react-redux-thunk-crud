import { EMPLOYEE_CONSTANTS } from "../constants/actionTypes";

// export const getEmployees = () => (dispatch) => {
//   dispatch({
//     type: EMPLOYEE_CONSTANTS.GET_EMPLOYEE,
//   });
// };

export function getEmployee() {
  return {type: EMPLOYEE_CONSTANTS.GET_EMPLOYEE};
}

// export function fetchEmployee() {
//   return dispatch => {
//       // dispatch(fetchProductsPending());
//       fetch('http://localhost:3001/users/getEmployee')
//       .then(res => res.json())
//       .then(res => {
//           if(res.error) {
//               throw(res.error);
//           }
//           dispatch(getEmployees(res.data));
//           return res.products;
//       })
//       .catch(error => {
//           console.log(error); 
//         // dispatch(fetchProductsError(error));
//       })
//   }
// }

// export function getEmployee() {
//   // make async call to api, handle promise, dispatch action when promise is resolved
//   return function(dispatch) {
//     return fetch('http://localhost:3001/users/getEmployee').then(response => (response.json())).then(
//       data => dispatch({ type: EMPLOYEE_CONSTANTS.GET_EMPLOYEE, payload: data })
//     );
//   };
// }

export const addEmployee = (data) => (dispatch) => {
  dispatch({
    type: EMPLOYEE_CONSTANTS.EDIT_EMPLOYEE,
    payload: data,
  });
};

export const editEmployee = (data) => (dispatch) => {
  dispatch({
    type: EMPLOYEE_CONSTANTS.EDIT_EMPLOYEE,
    payload: data,
  });
};

export const deleteEmployee = (employeeId) => (dispatch) => {
  dispatch({
    type: EMPLOYEE_CONSTANTS.DELETE_EMPLOYEE,
    payload: employeeId,
  });
};

// export function addEmployee(data) {
//   return (dispatch) => {
//     return dispatch({
//       type: EMPLOYEE_CONSTANTS.ADD_EMPLOYEE,
//       payload: data,
//     });
//   };
// }
