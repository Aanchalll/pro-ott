import { Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const CarouselFunction = (props) => {
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
      breakpoint: { max: 900, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  