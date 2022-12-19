import axios from "axios";

let URL = "http://localhost:8080/api/permission"

export default class PermissionService{
  
    createPermission(permission) {
        console.log("Create Permission");

        return axios.post(URL+"/create", permission);
    }

    getPermissions() {
        return axios.get(URL+"/getAll");
    }
    
}