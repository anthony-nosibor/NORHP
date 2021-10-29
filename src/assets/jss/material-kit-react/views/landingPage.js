import { container, title } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  containerLanding: {
    backgroundColor:"white",
    // zIndex: "12",
    color: "#FFFFFF",
    
  },
  title: {
    ...title,
    padding: "10px 10px 10px 10px",
    fontSize: "3.2rem",
    alignSelf:"center",
    justifyContent: "center",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
  },
  titleBody: {
    ...title,
    color: "#3C4858",
    padding: "70px 0",
    alignSelf:"center",
    justifyContent: "center",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  gridHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
};

export default landingPageStyle;
