import { Link } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { NavLink } from "react-router-dom";

export default function SidebarLink(props) {
    
  return (
    <Container
    >
<Link
  component={NavLink}
  variant="body2"
  to={props.url}
  sx={{
    color:'white'
  }}
  underline="none"
>
  {props.name}
</Link>
        
    </Container>
  )
}