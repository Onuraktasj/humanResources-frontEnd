import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from 'react'
import { useNavigate } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';

export default function CreateEmployee() {
    const navigate = useNavigate();


    let [employee, setEmployee] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        department: '',
        birthDate: new Date()
    });

    const departments = [
        "DIRECTOR",
        "MANAGER",
        "BACKEND_DEVELOPER",
        "FRONTEND_DEVELOPER",
        "HUMAN_RESOURCE"
    ];


    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(employee);
        setEmployee(prevState => {
          return {
          ...prevState,
          [name]: value
        };
      });
      console.log(employee);
      }
      const handleSubmit = event => {
        event.preventDefault();
        let employeeService = new EmployeeService();
        employeeService.createEmployee(employee)
        .then(() => navigate("/"))
        .catch((error) => console.log(error));
    };

  return (
    <div className="main-content">
      <form onSubmit={handleSubmit}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <h1 style={{ textAlign: "start" }}>Kayıt ol</h1>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="İsim"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Soyisim"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="E-posta adresi"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <DesktopDatePicker
                id="birthDate"
                name="birthDate"
                label="Doğum günü"
                inputFormat="DD-MM-YYYY"
                value={employee.birthDate}
                onChange={(nValue) => handleChange({target:{name:'birthDate', value: nValue}})}
                renderInput={(params) => <TextField {...params} />}
              />{" "}
            </Grid>

            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="department-label">Departman</InputLabel>
                <Select
                  labelId="department-label"
                  id="department"
                  name="department"
                  required
                  value={employee.department ?? " "}
                  label="Departman"
                  onChange={handleChange}
                >
                {departments.map((departmentName, index) => (
                  <MenuItem key={index} value={index}>{departmentName}</MenuItem>
                ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={6}>
              <Button
                color="success"
                variant="contained"
                fullWidth
                type="submit"
                sx={{ height: 55 }}
              >
                Kayıt et
              </Button>
            </Grid>
          </Grid>
        </LocalizationProvider>
      </form>
    </div>
  );
}
