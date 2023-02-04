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

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const drawerWidth = 240;


export default function PermanentDrawerLeft() {
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
            Book Appointment
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




        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name of Patient" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Number of Patient" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Row className="mb-3">

            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Date</Form.Label>
              <Form.Control placeholder="MM/DY/YY" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridTime">
              <Form.Label>Time</Form.Label>
              <Form.Control placeholder="time" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridTest">
            <Form.Label>Test Type</Form.Label>
            <Form.Control placeholder="dangee.etc" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Box>
    </Box>
  );
}
