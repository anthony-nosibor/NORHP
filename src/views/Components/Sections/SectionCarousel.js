import React from "react";
// react component for creating beautiful carousel
import Slider from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import image1 from "assets/img/Images/House.jpeg";
import image2 from "assets/img/Images/houseWithGarden.jpeg";
import image3 from "assets/img/Images/cuisine.jpeg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
      fade: true,
      className: "center",
      maxHeight:"150px",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
  };


  return (
    
    <div className={classes.containerLanding}>
        
        <Box component="span"  sx={{ width: 1,display: 'block' }}>

        <Slider {...settings}>
          <div>
            <img src={image1} className="slick-image"/>
          </div>
        
      
          <div>
            <img src={image2} className="slick-image"/>
          </div>
         
       
          <div>
            <img src={image3} className="slick-image"/>
          </div>
        </Slider>
         
         </Box>  
               
    </div>
  );
}
//OLD Carousel :
{/* <Slider {...settings} >
                
                <div>
                  <Box component="span" sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
                  <img src={image1} alt="First slide" className="slick-image" />
                      <div className="slick-caption">
                      <div className={classes.container}>
                            <Card  className={classes.cardWidth}>
                            
                                    <h4>
                                    <LocationOn className="slick-icons" />
                                        Magnifique maison familiale, Trinité
                                    </h4>                              

                                    <Button size="small">Plus de détail</Button>
                                  
                            </Card>
                            </div>
                      </div>
                  </Box>
                </div>

                <div>
                    <Box component="span" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                    <img src={image2} alt="Second slide" className="slick-image" />
                        <div className="slick-caption">
                          <div className={classes.container}> 
                            <Card className={classes.cardWidth}>
                              
                                  <h4>
                                    <LocationOn className="slick-icons" />
                                    Maison de vacance, Saint-anne
                                  </h4> 
                                    <Button size="small">Plus de détail</Button>
                              </Card>
                          </div> 
                        </div>
                    </Box>
                </div>

                <div>
                  <Box component="span" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                  <img src={image3} alt="Third slide" className="slick-image" />
                      <div className="slick-caption">
                      <div className={classes.container}> 
                      <Card className={classes.cardWidth}>
                            <h4>
                              <LocationOn className="slick-icons" />
                              Cuisine moderne, Fort-de-france
                            </h4>
                              <Button size="small">Plus de détail</Button>                     
                        </Card>
                        </div>
                      </div>  
                  </Box>           
                </div> 
              </Slider> */}
            