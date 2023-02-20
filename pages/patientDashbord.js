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

import { useSession, signIn, signOut } from "next-auth/react"
// import prisma from "../lib/prismadb"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../pages/api/auth/[...nextauth]"

const drawerWidth = 240;

export default function PermanentDrawerLeft({ userDb }) {
  const { data: session } = useSession();
  console.log(userDb);
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
  // console.log(session);
  if (session) {
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
          <List>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Phone No#</th>
                <th>Last Test Date</th>
                <th>Action</th>
              </tr>
            </thead>
            {userDb.Appointment.map((element) => {
              return <>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>{element.name}</td>
                    <td>{element.gender}</td>
                    <td>{element.phone}</td>
                    <td>{element.date}</td>
                    <td>Download</td>
                  </tr>
                </tbody>
              </>
            })}

          </List>
          <Table striped bordered hover>
            
          </Table>



        </Box>
      </Box>

    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export async function getServerSideProps(context) {

  const session = await getServerSession(context.req, context.res, authOptions)
  if (session) {

    // Process a POST request
    console.log(context.req.body)
    console.log(session);
    const { user } = session;
    const userDb = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
      include: {
        Appointment: {
          select: {
            Id: true,
            name: true,
            phone: true,
            gender: true
          },
        },

      },
    })


    return {
      props: { userDb } // will be passed to the page component as props
    };

  }
}