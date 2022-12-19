import {Box} from "@mui/material";
  import React from "react";
  import SidebarLink from "./SidebarLink.jsx";
  
  export default function Sidebar(props) {
    return (
      <div>
        <Box
          lineHeight={5}
          sx={{
            padding: 5,
            width: 200,
            height: '100vh',
            backgroundColor: "purple",
          }}
        >
  
        <SidebarLink url={'/'} name='Ana sayfa'/>
        <SidebarLink url={'/izin'} name='İzin oluştur'/>
        <SidebarLink url={'/harcama'} name='Harcama oluştur'/>
        <SidebarLink url={'/kayıt'} name='Kayıt oluştur'/>
          
        </Box>
      </div>
    );
  }
  