import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
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
          <ListItem key={index + "hey4"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? (
                  <MovieFilterIcon />
                ) : index === 1 ? (
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
            xl: "none",
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
            xl: "none",
            lg: "none",
          },
        }}
      >
        {Data.HeaderOptions.map((row, index) => (
          <ListItem key={index + "hey6"} disablePadding>
            <ListItemButton to={row.link}>
              <ListItemIcon>
                {index === 0 ? (
                  <MovieFilterIcon />
                ) : index === 1 ? (
                  <TranslateIcon />
                ) : (
                  <LocalMoviesIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={row.label} />
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
      {/* Appbar : lg screens */}
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
            spacing={{ xs: 0, sm: 0, md: 1 }}
          >
            <Grid item xs={0} sm={3} md={5} lg={6.5}>
              <Grid
                container
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "none",
                    xl: "flex",
                    lg: "flex",
                  },
                }}
              >
                {Data.HeaderOptions.map((row, index) => {
                  return (
                    <Grid item xs={2.2} key={index + "hey"}>
                      <Button
                        variant="text"
                        to={row.link}
                        className={
                          row.label === "Home"
                            ? "button-animation-1"
                            : "button-animation"
                        }
                      >
                        {row.label}
                      </Button>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={6} sm={5} md={4} lg={2}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={2} sm={2} md={1} lg={1.5} align={"right"}>
              <Button className="button-animation">Login</Button>
            </Grid>
            <Grid item xs={4} sm={2} md={1.5} lg={1.5} align={"right"}>
              <Button className="button-animation">Subscribe</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Side navbar : lg screens */}
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
          height: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {/* Main Carousel- Image slider */}
        <Box
          sx={{
            overflow: "hidden",
            marginBottom: "4%",
            height: "60vh !important",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              xl: "block",
              lg: "block",
            },
          }}
        >
          <MainCarousel infiniteLoop autoPlay={true} showThumbs={false}>
            {Data?.sliderImages.map((row, index) => {
              const { src, description, label } = row;
              return (
                <div key={index + "hey2"} className="main-carousel">
                  <img src={src} alt="" style={{ height: "60vh " }} />
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
        <Box
          sx={{
            marginBottom: "40px",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              xl: "block",
              lg: "block",
            },
          }}
        >
          <h2>Recommended for you</h2>
          <CarouselFunction array={Data?.Recommended} />
        </Box>

        {/* Animated Adventures */}
        <Box
          sx={{
            marginBottom: "40px",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              xl: "block",
              lg: "block",
            },
          }}
        >
          <h2>Animated Adventures</h2>
          <CarouselFunction array={Data?.AnimatedAdventures} />
        </Box>

        {/* Popular Shows/Drama */}
        <Box
          sx={{
            marginBottom: "40px",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              xl: "block",
              lg: "block",
            },
          }}
        >
          <h2>Popular Shows/Drama</h2>
          <CarouselFunction array={Data?.Popular} />
        </Box>

        {/* New & Upcoming */}
        <Box
          sx={{
            marginBottom: "40px",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              xl: "block",
              lg: "block",
            },
          }}
        >
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
    breakpoint: { max: 4000, min: 1536 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1536, min: 900 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 900, min: 0 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 0, min: 0 },
    items: 2,
  },
};

const CarouselFunction = (props) => {
  const { array } = props;
  return (
    <Carousel itemClass="image-item" responsive={responsive}>
      {array?.map((image) => {
        return array?.map((row, index) => {
          const { src, description, label } = row;
          return (
            <div
              key={index + "hey5"}
              className="clild-carousel"
              draggable={false}
            >
              <img src={src} style={{ width: "100%", height: "30vh" }} alt="" />
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: 10,
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6"> {label}</Typography>
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
