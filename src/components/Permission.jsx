import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import PermissionService from '../services/PermissionService';

export default function Permission(props) {
let [permissions, setPermissions] = React.useState([{
  permissionTypeDto: '',
  startOfPermission: '',
  finishOfPermission: '',
  id: ''
}]);

React.useEffect(() => {
  let permissionService = new PermissionService();
  permissionService.getPermissions()
      .then((result) => setPermissions(result.data));
      console.log(permissions)
}, [permissions]);

return (
<TableContainer>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell align="left">ID</TableCell>
      <TableCell>İzin Tipi</TableCell>
      <TableCell>Başlangıç Tarihi</TableCell>
      <TableCell>Bitiş Tarihi</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {permissions.map((permission) => (
    <TableRow
        key={permission.id}
    >
      <TableCell component="th" scope="row">
          {permission.id}{console.log(permission)}{console.log(props.toStringFromDate(permission.startOfPermission))}
        </TableCell>
      <TableCell>{permission.permissionTypeDto}</TableCell>
      <TableCell>{props.toStringFromDate(permission.startOfPermission ?? " ")}</TableCell>
      {/*<TableCell>{props.toStringFromDate(permission.startOfPermission)}</TableCell>*/}
      {/*<TableCell>{props.toStringFromDate(permission.finishOfPermission)}</TableCell>*/}
      <TableCell>{props.toStringFromDate(permission.finishOfPermission ?? " ")}</TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>

</TableContainer>
)
}
