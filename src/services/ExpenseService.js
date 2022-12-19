import axios from "axios";

let URL = "http://localhost:8080/api/expenses"

export default class ExpenseService{
  
    createExpense(expense) {
        console.log("Create Expense");

        return axios.post(URL+"/create", expense);
    }

    getExpenses() {
        return axios.get(URL+"/getAll");
    }

}