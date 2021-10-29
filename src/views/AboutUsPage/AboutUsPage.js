import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { experimentalStyled as styled } from '@mui/material/styles';
// @material-ui/icons
import ConstructionIcon from '@mui/icons-material/Construction';
import HouseIcon from '@mui/icons-material/House';
import TerrainIcon from '@mui/icons-material/Terrain';
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Typography from '@mui/material/Typography';
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";


import image from "../../assets/img/logoNorhp.png";
import imageAbout from "../../assets/img/Images/BlackArchitect.jpeg";
import imageWork from "../../assets/img/Images/réalisationsjpeg.jpeg";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import Image from "../../assets/img/logoNorhp.png";

const useStyles = makeStyles(styles);

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgCard,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
      
      <Header
        color="transparent"
        brand={<Box component="span" sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}><img src={Image}  /></Box>}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      
      <Parallax
        small
        filter
        image={require("assets/img/team.jpg").default}
      />
        <div className={classNames(classes.main, classes.mainRaised)}>
              
                <GridContainer justify="center">
                <Grid item xs={6} sm={6} md={8}>

                    <div data-aos="fade-up" className={classes.section}>
                                  <h3  className={classes.title}>Qui sommes-nous ?</h3>
                                    <p className={classes.cardTitle}>Nous sommes un groupe d'ingénieurs créatif ayant pour ambition de changer le paysage immobilier de la Martinique.</p>
                                    <p className={classes.description}>NORHP est spécialisé dans la construction de maisons individuelles. Nous intervenons sur toute la Martinique auprès de clients "particuliers", "professionnels" afin :</p>
                                    <ul className={classes.description}>
                                      <li>de favoriser l'utilisation de matériaux respectueux de l'environnement.</li>
                                      <li>de rendre les ouvrages plus qualitatifs et plus abordables.</li>
                                      <li>tout en privilégiant la sécurité, le confort et l'innovation.</li>
                                    </ul>
                    </div>
                </Grid>
                  </GridContainer >      
                            <div data-aos="fade-up" className={classes.section}>
                                <h5  className={classes.subtitle}>NOUS SOMMES LES MEILLEURS DANS CES DOMAINES</h5>
                                  
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                               
                                <Grid item xs={2} sm={4} md={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                 <ConstructionIcon fontSize="large"/>
                                        <CardHeader
                                          title="Travaux en tout genres"
                                          subheader="September 14, 2016"
                                        />
                                        <CardMedia
                                        
                                          height="194"
                                          image="/src/assets/img/Images/BlackArchitect.jpeg"
                                          alt="BlackArchi"
                                        />
                                        <CardContent>
                                          <Typography variant="body2" color="text.secondary">
                                            This impressive paella is a perfect party dish and a fun meal to cook
                                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                                            if you like.
                                          </Typography>
                                        </CardContent>
                                      </Card>
                                  
                                </Grid>

                                <Grid item xs={2} sm={4} md={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                  <HouseIcon fontSize="large"/>
                                        <CardHeader
                                          
                                          title="Construction de maisons"
                                          subheader="September 14, 2016"
                                        />
                                        <CardMedia
                                          
                                          height="194"
                                          image="/src/assets/img/Images/BlackArchitect.jpeg"
                                          alt="BlackArchi"
                                        />
                                        <CardContent>
                                          <Typography variant="body2" color="text.secondary">
                                            This impressive paella is a perfect party dish and a fun meal to cook
                                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                                            if you like.
                                          </Typography>
                                        </CardContent>
                                      </Card>
                                  
                                </Grid>

                                <Grid item xs={2} sm={4} md={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                  <TerrainIcon fontSize="large"/>
                                        <CardHeader
                                          
                                          title="Vente de térrains"
                                          subheader="September 14, 2016"
                                        />
                                        <CardMedia
                                          
                                          height="194"
                                          image="/src/assets/img/Images/BlackArchitect.jpeg"
                                          alt="BlackArchi"
                                        />
                                        <CardContent>
                                          <Typography variant="body2" color="text.secondary">
                                            This impressive paella is a perfect party dish and a fun meal to cook
                                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                                            if you like.
                                          </Typography>
                                        </CardContent>
                                      </Card>
                                 
                                </Grid>

                               

                               

                                
                              
                            </Grid>
                        </Box>
                              </div>
     
            
          
        </div>
          <Footer />
        </div>
  );
}
