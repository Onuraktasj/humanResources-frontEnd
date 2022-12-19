import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import EmployeeService from '../services/EmployeeService';

export default function Employee(props) {
    let [employees, setEmployees] = React.useState([{
        firstName: '',
        lastName: '',
        email: 'Kullanıcı bulunamadı',
        phoneNumber: '',
        department: '',
        birthDate: '',
        id: ''
    }]);

    React.useEffect(() => {
        let employeeService = new EmployeeService();
        employeeService.getEmployees()
            .then((result) => setEmployees(result.data));
            console.log(employees)
      }, [employees]);

    const handleDelete = (id) => {
      let employeeService = new EmployeeService();
      employeeService.deleteEmployee(id);
      } 

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell>Ad</TableCell>
            <TableCell>Soyad</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telefon No</TableCell>
            <TableCell>Departman</TableCell>
            <TableCell>Doğum tarihi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
          <TableRow
              key={employee.id}
          >
            <TableCell component="th" scope="row">
                {employee.id}{}
              </TableCell>
            <TableCell>{employee.firstName}</TableCell>
            <TableCell>{employee.lastName}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>{employee.phoneNumber}</TableCell>
            <TableCell>{employee.department}</TableCell>
            <TableCell>{props.toStringFromDate(employee.birthDate ?? " ")}</TableCell>
            <TableCell>
              <Button onClick={() => handleDelete(employee.id)} color="error" >
              {employee.id !== '' && <CloseIcon />}
              </Button>
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
