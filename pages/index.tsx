import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeBar from "./components/Home";
import SideNav from "./components/SideNav";
import NavBar from "./components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>AdminLTE 3 | Dashboard</title>
          {/* Google Font: Source Sans Pro */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
          />
          {/* Font Awesome */}
          <link
            rel="stylesheet"
            href="plugins/fontawesome-free/css/all.min.css"
          />
          {/* Ionicons */}
          <link
            rel="stylesheet"
            href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          />
          {/* Tempusdominus Bootstrap 4 */}
          <link
            rel="stylesheet"
            href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"
          />
          {/* iCheck */}
          <link
            rel="stylesheet"
            href="plugins/icheck-bootstrap/icheck-bootstrap.min.css"
          />
          {/* JQVMap */}
          <link rel="stylesheet" href="plugins/jqvmap/jqvmap.min.css" />
          {/* Theme style */}
          <link rel="stylesheet" href="dist/css/adminlte.min.css" />
          {/* overlayScrollbars */}
          <link
            rel="stylesheet"
            href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
          />
          {/* Daterange picker */}
          <link
            rel="stylesheet"
            href="plugins/daterangepicker/daterangepicker.css"
          />
          {/* summernote */}
          <link
            rel="stylesheet"
            href="plugins/summernote/summernote-bs4.min.css"
          />
        </div>
      </Head>
      <Header />
      <HomeBar />
      <NavBar />
      <SideNav />
      <Footer />
      
    </div>
  );
}
