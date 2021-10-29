import { containerFluid } from "assets/jss/material-kit-react";
import { container, CardContainer } from "assets/jss/material-kit-react.js";

const Style = {
  section: {
    alignItem:"center",
    justifyContent: "center",
    marginLeft: "auto !important",
    marginRight: "auto !important",
  },
  containerLanding: {
    backgroundColor:"white",
    // zIndex: "12",
    color: "#FFFFFF",
    
  },
  small: {
    height: "380px",
  },
  container: {
    ...containerFluid,
    padding: "20px 10px 100px 70px",
    width:"50%",
  },
  
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
  },
  cardWidth: {
    width:"100%",
    margin:"140px",
  },

};

export default Style;
