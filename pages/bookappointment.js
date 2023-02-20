import * as React from 'react';
import { useState } from 'react';
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



const axios = require('axios').default;
const drawerWidth = 240;

import { useSession, signIn, signOut } from "next-auth/react"



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
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [TestType, setTestType] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    axios.post('http://localhost:3000/api/saveAppointment', {
      name: name,
      number: number,
      address: address,
      date: date,
      TestType: TestType,
      gender: gender
    })
      .then(function (response) {
        alert(response);
      })
      .catch(function (error) {
        alert(error);
      });
  };

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
      <Box component="main" noValidate onSubmit={handleSubmit} sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        



        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name of Patient"
                value={name}
                onChange={event => setName(event.target.value)}
                autoComplete="family-name"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Number of Patient"
                value={number}
                onChange={event => setNumber(event.target.value)}
                autoComplete="number"
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter Number of Patient"
                value={address}
                onChange={event => setAddress(event.target.value)}
                autoComplete="address-line1"
                required
              />
          </Form.Group>

          <Row className="mb-3">

            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type='datetime-local'
                placeholder="Enter Date and time of Test"
                value={date}
                onChange={event => setDate(event.target.value)}
                autoComplete="tel"
                required
              />
              {/* add type date over here */}
            </Form.Group>
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter gender"
                value={gender}
                onChange={event => setGender(event.target.value)}
                autoComplete="on"
                required
              />
              {/*  */}
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridTest">
            <Form.Label>Test Type</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter Test Type for the Patient"
                value={TestType}
                onChange={event => setTestType(event.target.value)}
                autoComplete="on"
                required
              />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>


      </Box>
    </Box>
  );
}
