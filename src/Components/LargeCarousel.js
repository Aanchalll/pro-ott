
import { Carousel as MainCarousel } from "react-responsive-carousel"; //
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button, Typography } from "@mui/material";

export const LargeCarousel = (props) => {
    const { array } = props;
    return (
        <MainCarousel infiniteLoop autoPlay={true} showThumbs={false}>
            {array.map((row, index) => {
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
        </MainCarousel>)
}