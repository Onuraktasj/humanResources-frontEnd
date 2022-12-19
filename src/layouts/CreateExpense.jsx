import React from 'react'
import { Button, Grid, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ExpenseService from '../services/ExpenseService';

export default function CreateExpense() {
    const navigate = useNavigate();

    let [expense, setExpense] = React.useState({
        amount: 0,
        employeeId: 1
      });


    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(expense);
        setExpense(prevState => {
          return {
          ...prevState,
          [name]: value
        };
      });
      console.log(expense);
      }
      const handleSubmit = event => {
        event.preventDefault();
        let expenseService = new ExpenseService();
        expenseService.createExpense(expense)
        .then(() => navigate("/"))
        .catch((error) => console.log(error));
    };

    return (
        <div className="main-content">
          <form onSubmit={handleSubmit}>
              <h1 style={{ textAlign: "start" }}>Harcama Oluştur</h1>
              <Grid container spacing={3}>
            
            <Grid item xs={3}>
                  <TextField
                    fullWidth
                    id="amount"
                    name="amount"
                    label="Harcama miktarı"
                    onChange={handleChange}
                  />
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
          </form>
        </div>
      );
      }