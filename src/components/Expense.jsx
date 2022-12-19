import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import EditIcon from "@mui/icons-material/Edit";
import ExpenseService from '../services/ExpenseService';

export default function Expense() {
    let [expenses, setExpenses] = React.useState([{
        amount: 0,
        employeeId: 1
    }]);

    React.useEffect(() => {
        let expenseService = new ExpenseService();
        expenseService.getExpenses()
            .then((result) => setExpenses(result.data)); 
            console.log(expenses)
      }, [expenses]);


  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell>Harcama Miktarı</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
            
          <TableRow
              key={expense.id}
          >
            <TableCell component="th" scope="row">
                {expense.id}{console.log(expense)}
              </TableCell>
            <TableCell>{expense.amount}</TableCell>
            <TableCell>
              <Link to={`/harcama/${expense.id}`} color="warning">
              {expense.id !== '' && <EditIcon />}
              </Link>
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>
  )
}


