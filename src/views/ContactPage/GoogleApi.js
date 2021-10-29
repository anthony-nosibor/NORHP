import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";


const useStyles = makeStyles(styles);

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCgxVYT3zxUS1z8jtpcNA1QkVqtEGCaEbw" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
// export default GoogleApiWrapper({
//        apiKey: ('AIzaSyCgxVYT3zxUS1z8jtpcNA1QkVqtEGCaEbw')
// })(SimpleMap)