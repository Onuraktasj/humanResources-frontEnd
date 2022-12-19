import React from 'react'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useNavigate } from "react-router-dom";
import PermissionService from '../services/PermissionService';

export default function CreatePermission() {
    const navigate = useNavigate();

    let [permission, setPermission] = React.useState({
        startOfPermission: new Date(),
        finishOfPermission: new Date(),
        permissionType: '',
        employeeId: ''
      });

      const permissions = [
        "YEARLY",
        "MILITARY PERMISSION",
        "PATHERS PERMISSION",
        "BIRTH PERMISSION",
        "POST BIRTHDAY PERMISSION",
        "MARRIAGE PERMISSION",
        "FREE PERMISSION"
    ];

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(permission);
        setPermission(prevState => {
          return {
          ...prevState,
          [name]: value
        };
      });
      console.log(permission);
      }
      const handleSubmit = event => {
        event.preventDefault();
        let permissionService = new PermissionService();
        permissionService.createPermission(permission)
        .then(() => navigate("/"))
        .catch((error) => console.log(error));
    };

    return (
        <div className="main-content">
          <form onSubmit={handleSubmit}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <h1 style={{ textAlign: "start" }}>İzin Oluştur</h1>
              <Grid container spacing={3}>
              
              <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="permissionType-label">Departman</InputLabel>
                <Select
                  labelId="permissionType-label"
                  id="permissionType"
                  name="permissionType"
                  required
                  value={permission.permissionType ?? " "}
                  label="İzin tipi"
                  onChange={handleChange}
                >
                {permissions.map((permissionName, index) => (
                  <MenuItem key={index} value={index}>{permissionName}</MenuItem>
                ))}
                </Select>
              </FormControl>
            </Grid>

                <Grid item xs={4}>
                  <DesktopDatePicker
                    label="Başlangıç tarihi"
                    inputFormat="DD-MM-YYYY"
                    value={permission.startOfPermission}
                    onChange={(nValue) => handleChange({target:{name:'startOfPermission', value: nValue}})}
                    renderInput={(params) => <TextField {...params} />}
                  />{" "}
                </Grid>
  
                <Grid item xs={4}>
                  <DesktopDatePicker
                    label="Bitiş tarihi"
                    inputFormat="DD-MM-YYYY"
                    value={permission.finishOfPermission}
                    onChange={(nValue) => handleChange({target:{name:'finishOfPermission', value: nValue}})}
                    renderInput={(params) => <TextField {...params} />}
                  />{" "}
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    fullWidth
                    id="employeeId"
                    name="employeeId"
                    label="Developer id"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    color="success"
                    type="submit"
                    sx={{ height: 55 }}
                  >
                    Oluştur
                  </Button>
                </Grid>
              </Grid>
            </LocalizationProvider>
          </form>
        </div>
      );
      }