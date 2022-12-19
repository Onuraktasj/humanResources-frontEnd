import axios from "axios";

let URL = "http://localhost:8080/api/employee"

export default class EmployeeService{
  
    createEmployee(employee) {
        console.log("Create Permission");

        return axios.post(URL+"/create", employee);
    }

    getEmployees() {
        return axios.get(URL+"/getAll");
    }
    getEmployee(id) {
        return axios.get(URL + "/" + id);
    }

    // updateEmployee(id, developer) {
    //     return axios.put(URL + "/" + id, developer);
    // }

    deleteEmployee(id) {
        console.log("Delete Developer");
        return axios.delete(URL + "/" + id);
    }
}