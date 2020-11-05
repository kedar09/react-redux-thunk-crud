import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { EMPLOYEE_CONSTANTS } from "../constants/actionTypes";

import { Button, Card, Form, Col, Row, Table } from "react-bootstrap";

const EmployeePage = (props) => {
  const [value, setValue] = useState({
    id: 0,
    employeeName: "",
    employeeDepartment: "",
  });

  useEffect(() => {
    props.getEmployee();
  });

  const submitData = () => {
    if (value.employeeName && value.employeeDepartment && !value.id) {
      const newEmployee = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        employeeName: value.employeeName,
        employeeDepartment: value.employeeDepartment,
      };

      props.addEmployee(newEmployee);
    } else if (value.employeeName && value.employeeDepartment && value.id) {
      const updatedDetails = {
        id: value.id,
        employeeName: value.employeeName,
        employeeDepartment: value.employeeDepartment,
      };

      props.editEmployee(updatedDetails);
    } else {
      alert("Enter Employee Details.");
    }

    clearData();
  };

  const editDetails = (data) => {
    setValue({
      id: data.id,
      employeeName: data.employeeName,
      employeeDepartment: data.employeeDepartment,
    });
  };

  const deleteEmployeeData = (id) => {
    clearData();
    if (window.confirm("Are you sure?")) {
      props.deleteEmployee(id);
    }
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const clearData = () => {
    setValue({
      id: 0,
      employeeName: "",
      employeeDepartment: "",
    });
  };

  return (
    <div>
      <Card style={{ margin: 20 }}>
        <Form style={{ margin: 20 }}>
          <Form.Group as={Row} controlId="formPlaintextEmployeeName">
            <Form.Label column sm="2">
              Employee Name
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                name="employeeName"
                placeholder="Employee Name"
                value={value.employeeName}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextEmployeeDepartment">
            <Form.Label column sm="2">
              Employee Department
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                name="employeeDepartment"
                placeholder="Employee Department"
                value={value.employeeDepartment}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          {value.id ? (
            <Button onClick={submitData}>UPDATE</Button>
          ) : (
            <Button onClick={submitData}>ADD</Button>
          )}{" "}
          <Button onClick={clearData}>CLEAR</Button>
        </Form>
      </Card>
      <div className="rightsection">
        <Card style={{ margin: 20 }}>
          <Table style={{ margin: 20 }} striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Depatment Name</th>
                <th>Action(s)</th>
              </tr>
            </thead>
            <tbody>
              {props.employees &&
                props.employees.map((data, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>{data.employeeName}</td>
                      <td>{data.employeeDepartment}</td>
                      <td>
                        <Button onClick={() => editDetails(data)}>EDIT</Button>{" "}
                        <Button onClick={() => deleteEmployeeData(data.id)}>
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  employees: state.employees,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployee: () => dispatch({ type: EMPLOYEE_CONSTANTS.GET_EMPLOYEE }),
    addEmployee: (newEmployee) =>
      dispatch({ type: EMPLOYEE_CONSTANTS.ADD_EMPLOYEE, payload: newEmployee }),
    editEmployee: (updatedDetails) =>
      dispatch({
        type: EMPLOYEE_CONSTANTS.EDIT_EMPLOYEE,
        payload: updatedDetails,
      }),
    deleteEmployee: (id) =>
      dispatch({ type: EMPLOYEE_CONSTANTS.DELETE_EMPLOYEE, id: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage);
