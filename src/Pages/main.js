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
import { Data } from "../util/Data";
import { Button, Grid, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import { CarouselFunction } from "../Components/SmallCarousel";
import { LargeCarousel } from "../Components/LargeCarousel";
import { ProductNavbar } from "../Layout/Navbar";
import { StdbgColor, drawerWidth } from "../util/constants";


function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const SmallImageScroll = [{ label: 'Recommended for you', array: Data?.Recommended },
  { label: 'Animated Adventures', array: Data?.AnimatedAdventures },
  { label: 'Popular Shows/Drama', array: Data?.Popular },
  { label: 'New & Upcoming', array: Data?.NewUpcoming }]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <div className="bg-shiney"
        style={{
          minHeight: "64px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Typography variant="h6" noWrap component="div" sx={{zIndex:'9999', color:'white'}}>
          PRO OTT
        </Typography>
      </div>

      <Divider />
      <List>
        {[{ label: "Channels", link: '/channels' }, { label: "Languages", link: '/languages' }, { label: "Genres", link: '/genres' }].map((row, index) => (
          <ListItem key={index + "hey4"} disablePadding>
            <ListItemButton to={row.link} className={row.link === location?.pathname ? "button-animation-1" : "button-animation"}>
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
            <ListItemButton to={row.link} className={row.link === location?.pathname ? "button-animation-1" : "button-animation"}>
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
      {/* Navbar */}
      <ProductNavbar array={Data.HeaderOptions}/>

      {/* Side navbar */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* Side navbar : sm screens */}
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

        {/* Side navbar : lg screens */}
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
        {/* Content */}

        <Toolbar />

        {/* Main Carousel- Image slider */}
        <Box
          sx={{
            overflow: "hidden",
            marginBottom: "4%",
            height: { xs: '60vh', sm: '60vh', md: "60vh !important", lg: "60vh !important" },
            width: '100%',
          }}
        >
          <LargeCarousel array={Data?.sliderImages} />
        </Box>

        {/* Small Scrollbars */}
        {SmallImageScroll.map((row, index) => {
          return (
            <Box key={index + 'smallScroll'}
              sx={{
                marginBottom: "40px",
                width: { xs: '50vh', sm: '50vh', md: "60vh !important", lg: "100% !important" },
              }}
            >
              <h2>{row.label}</h2>
              <CarouselFunction array={row.array} />
            </Box>
          )
        })}

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


