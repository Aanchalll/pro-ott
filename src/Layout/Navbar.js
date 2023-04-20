import * as React from "react";
import { AppBar, Toolbar, IconButton, Grid, Button, TextField } from "@mui/material";
import { drawerWidth, StdbgColor } from "../util/constants";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";

export const ProductNavbar = (props) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation();

    const { array, } = props
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
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
                            {array.map((row, index) => {
                                return (
                                    <Grid item xs={2.2} key={index + "hey"}>
                                        <Button
                                            variant="text"
                                            to={row.link}
                                            className={
                                                row.link === location?.pathname
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
    )
}