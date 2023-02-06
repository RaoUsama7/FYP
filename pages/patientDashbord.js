import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';
import Table from 'react-bootstrap/Table';


const drawerWidth = 240;

export default function PermanentDrawerLeft()  {
    let navigation = [
      {
        name: "My Reports",
        link: "/patientDashbord",
      },
      {
        name: "Book Appointment",
        link: "/bookappointment",
        
      },
      {
        name: "Malaria Detection from Blood smear",
        link: "/bookappointment",
      },
      {
        name: "Location",
        link: "/labLocation",
      },
      {
        name: "Logout",
        link: "/payment",
      },
    ];
  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashbord
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {navigation.map((navItem, index) => (

            <ListItem key={index} disablePadding>
              <Link href={navItem.link}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={navItem.name} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <h1>Paitent Test Reports</h1>
        <h2>YOU CAN VIEW REPORTS OF ALL PATIENTS REGISTERED UNDER THIS NUMBER HERE.</h2>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age/Gender</th>
          <th>Phone No#</th>
          <th>Last Test Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Male</td>
          <td>0301283920982</td>
          <td>2023-02-21</td>
          <td>Download</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        
      </tbody>
    </Table>
       

        
      </Box>
    </Box>
  );
}
