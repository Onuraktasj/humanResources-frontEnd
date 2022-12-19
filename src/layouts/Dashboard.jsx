import { Grid } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router'
import Sidebar from '../components/sidebar/Sidebar'
import CreateEmployee from './CreateEmployee';
import CreateExpense from './CreateExpense';
import CreatePermission from './CreatePermission';
import MainPage from './MainPage';
export default function Dashboard() {
  return (
    <Grid container spacing={3}>
        <Grid item xs={3}>
            <Sidebar />
        </Grid>        
        <Grid item xs={9}>
            <Routes>
                <Route exact path="/" element={<MainPage />} />

                <Route exact path='/kayıt' element={<CreateEmployee />} />
                {/* <Route exact path='/profil/:devId' element={<UpdateDeveloper />} /> */}


                <Route exact path='/izin' element={<CreatePermission />} />
                {/* <Route exact path='/izin/:dayOffId' element={<UpdateDayOff />} /> */}

                <Route exact path='/harcama' element={<CreateExpense />} />
                {/* <Route exact path='/harcama/:expenseId' element={<UpdateExpense />} /> */}

            </Routes>
        </Grid>
    </Grid>
    )
}
