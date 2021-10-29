import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";

// components
import MapContainer from "./GoogleApi.js";

// core components
import Header from "components/Header/Header.js";
import Box from '@mui/material/Box';
import HeaderLinks from "components/Header/HeaderLinks.js";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// Sections for this page
import WorkSection from "../LandingPage/Sections/WorkSection";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import Image from "../../assets/img/logoNorhp.png";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      
      
      <Header
        absolute
        color="transparent"
        brand={<Box component="span" sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}><img src={Image}  /></Box>}
        rightLinks={<HeaderLinks />}
        {...rest}
      />
       
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer >
            <GridItem xs={12} sm={12} md={6}>

                 
                      <WorkSection/>
                  
                 
 
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>

               
                    <MapContainer />
               

            </GridItem>
          </GridContainer>
      </div>
          
        
          
        </div>
        <Footer whiteFont />
    </div>
  );
}
