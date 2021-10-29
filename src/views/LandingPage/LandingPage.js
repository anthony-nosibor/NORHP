import React, {useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
// Aos plugin
import AOS from 'aos';
import "aos/dist/aos.css";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Grid from '@mui/material/Grid';
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import SectionCarousel from "../Components/Sections/SectionCarousel";
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

import image from "../../assets/img/logoNorhp.png";
import imageAbout from "../../assets/img/Images/BlackArchitect.jpeg";
import imageWork from "../../assets/img/Images/réalisationsjpeg.jpeg";
import { width } from "@mui/system";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function LandingPage(props) {
  const [gridAnimaton, setGrIdAnimation] = React.useState("gridHidden");
  setTimeout(function () {
    setGrIdAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

useEffect(() => {
  AOS.init({
            duration: 2000,
          });
}, []);

  return (
                
        

    <div className={classes.containerLanding}>               
        <div>
        
       
          < div className={classes.container}>
      <Link to="/landing-page" className={classes.listItem}>
          <Header
              classes={{
                paper: classes.drawerPaper,
              }}
              color="white"
              routes={dashboardRoutes}
               brand={
                 <Box component="span" sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
                 <img src={image}  />
               </Box>}
              rightLinks={<HeaderLinks />}
              fixed
              changeColorOnScroll={{
                height: 300,
                color: "white",
              }}
              {...rest}
        /> 
    </Link>
    <br/>
    <br/>
    <br/>
    <br/>
  
              <SectionCarousel />
             
             
            
            
                              <h2 className={classes.title}>Confiez-nous vos projets immobilier</h2>
                        
                  <GridContainer justify="center">
                 
                                  
                      <GridItem xs={6} sm={8} md={12}>  
                        
                           <Paper style={{ border: "none", boxShadow: "none" }} sx={{ p: 2, margin: 'auto', maxWidth: 1200, flexGrow: 1 }}>
                                  <Grid container spacing={2}>
                                    <Grid item xs={12} sm container>
                                      <Grid item xs container direction="column" spacing={6}>
                                            <Grid  data-aos="fade-up" item xs>
                                                <Typography sx={{ fontSize: 25, color: "#91c4d6" }} gutterBottom variant="subtitle1" component="div">
                                               <strong>NORHP</strong>, votre entreprise de construction en Martinique
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                Née de l'union entre un ingénieur d'études/conseil et d'un autodidacte, la société NORHP est présente sur le marché de la construction depuis 1990.
                                                La société réalise aussi bien des travaux neufs, que des travaux de réhabilitation, renforcement de structure, surélévation de bâtiment ainsi que des travaux de maintenance. De l’étude de faisabilité a l’exécution et la maintenance d’un bâtiment, NORHP met a la disposition de ses clients son savoir-faire et son expérience dans la construction pour faire de leur projet un succès. NORHP s’appuie sur le savoir-faire des différentes entités du groupe pour concevoir et réaliser des bâtiments exceptionnels, respectueux des hommes et de l’environnement.

                                              
                                                </Typography>

                                                <Button>Voir plus</Button>
                                            </Grid>
                                      </Grid>
                                  </Grid>

                                      <Grid  xs={12} sm={12} md={4} data-aos="fade-up" item>
                                        <ButtonBase >
                                          <Img alt="complex" src={imageAbout} />
                                        </ButtonBase>
                                      </Grid>
                                  </Grid>
                          </Paper>
                      </GridItem>
              </GridContainer> 

              <br />

              <GridContainer justify="center">
                <GridItem xs={6} sm={8} md={12}>

              <Paper style={{ border: "none", boxShadow: "none" }} sx={{ p: 2, margin: 'auto',        maxWidth: 1200, flexGrow: 1 }}>
                        <Grid container spacing={6}>
                        <Grid  xs={12} sm={12} md={4} data-aos="fade-up" item>
                            <ButtonBase >
                              <Img alt="complex" src={imageWork} />
                            </ButtonBase>
                          </Grid> 
                          <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                              <Grid  data-aos="fade-up" item xs>
                                <Typography sx={{ fontSize: 25 ,color: "#91c4d6"}} gutterBottom variant="subtitle1" component="div">
                                  Nos Réalisations
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                Exemple : Fort de ces succès et d'une croissance de 20% par an, la société compte 35 collaborateurs et prévoit d'en embaucher 30 supplémentaires d'ici les 3 prochaines années.
                                </Typography>
                      
                                <Button>Voir plus</Button>
                              </Grid>
                          
                            </Grid>
                           
                          </Grid>

                        </Grid>
                    </Paper>
                    </GridItem>
              </GridContainer>
              <TeamSection />
              </div>
              
              </div>
         
          <Footer />
        </div>
  );
}
