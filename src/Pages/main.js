import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import MenuIcon from "@mui/icons-material/Menu";
import TranslateIcon from "@mui/icons-material/Translate";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Carousel as MainCarousel } from "react-responsive-carousel"; //
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Data } from "../util/Data";
import { Button, Grid, TextField } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const drawerWidth = 180;
const StdbgColor = "#F0F8FF";

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <div
        style={{
          minHeight: "64px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Typography variant="h6" noWrap component="div">
          PRO OTT
        </Typography>
      </div>

      <Divider />
      <List>
        {["Channels", "Languages", "Genres"].map((text, index) => (
          <ListItem key={index+'hey4'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index == 0 ? (
                  <MovieFilterIcon />
                ) : index == 1 ? (
                  <TranslateIcon />
                ) : (
                  <LocalMoviesIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "block",
            md: "block",
            lg: "none",
          },
        }}
      />
      <List
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "block",
            md: "block",
            lg: "none",
          },
        }}
      >
        {["Home", "Shows", "Movies", "Comedy", "News"].map((text, index) => (
          <ListItem key={index+'hey6'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index == 0 ? (
                  <MovieFilterIcon />
                ) : index == 1 ? (
                  <TranslateIcon />
                ) : (
                  <LocalMoviesIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: StdbgColor, color: "black" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: StdbgColor,
          color: "black",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={0} md={3} lg={6.5}>
              <Grid
                container
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "none",
                    md: "none",
                    lg: "flex",
                  },
                }}
              >
                {["Home", "Shows", "Movies", "Comedy", "News"].map((index) => {
                  return (
                    <Grid item xs={2.2} key={index+'hey'}>
                      {index}
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={6} md={5}  lg={2}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={2} md={2}  lg={1.5} align={'right'}>
              <Button>Login</Button>
            </Grid>
            <Grid item xs={4} md={2}  lg={1.5} align={'right'}>
              <Button>Subscribe</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          className="Bg-color App-link"
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: StdbgColor,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          className="Bg-color App-link"
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: StdbgColor,
              boxShadow:
                "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {/* Main Carousel- Image slider */}
        <Box sx={{ height: "20%", overflow: "hidden", marginBottom: "4%" }}>
          <MainCarousel
            infiniteLoop
            autoPlay={true}
            showThumbs={false}
            style={{
              height: "100px !important",
              ".carousel-root .carousel-slider": {
                height: "100px !important",
              },
            }}
          >
            {Data?.sliderImages.map((row, index) => {
              const { src, description, label } = row;
              return (
                <div key={index+'hey2'} className="main-carousel">
                  <img src={src} style={{ height: "25em" }} />
                  <span
                    className="legend"
                    style={{
                      position: "absolute",
                      top: "40%",
                      height: "fit-content",
                      width: "80%",
                      background: "transparent",
                      textAlign: "left",
                    }}
                  >
                    <Typography variant="h2"> {label}</Typography>
                    <h3> {description}</h3>
                    <Button variant="contained">Watch Now</Button>
                  </span>
                </div>
              );
            })}
          </MainCarousel>
        </Box>

        {/* Recommended for you */}
        <Box sx={{ marginBottom: "40px" }}>
          <h2>Recommended for you</h2>
          <CarouselFunction array={Data?.Recommended} />
        </Box>

        {/* Animated Adventures */}
        <Box sx={{ marginBottom: "40px" }}>
          <h2>Animated Adventures</h2>
          <CarouselFunction array={Data?.AnimatedAdventures} />
        </Box>

        {/* Popular Shows/Drama */}
        <Box sx={{ marginBottom: "40px" }}>
          <h2>Popular Shows/Drama</h2>
          <CarouselFunction array={Data?.Popular} />
        </Box>

        {/* New & Upcoming */}
        <Box sx={{ marginBottom: "40px" }}>
          <h2>New & Upcoming</h2>
          <CarouselFunction array={Data?.NewUpcoming} />
        </Box>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselFunction = (props) => {
  const { array } = props;
  return (
    <Carousel ssr partialVisibile itemClass="image-item" responsive={responsive}>
      {array?.map((image) => {
        return array?.map((row, index) => {
          const { src, description, label } = row;
          return (
            <div key={index+'hey5'} className="clild-carousel">
              <img src={src} style={{ width: "20em", height: "15em" }} />
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: 10,
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {" "}
                <Typography variant="h5"> {label}</Typography>
              </span>
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                {" "}
                <Typography variant="body2"> {description}</Typography>{" "}
              </span>
            </div>
          );
        });
      })}
    </Carousel>
  );
};
