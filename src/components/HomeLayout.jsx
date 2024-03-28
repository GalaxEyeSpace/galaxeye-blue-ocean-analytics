import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Main = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
}));

const itemsToShow = [
  "AOI",
  "pH",
  "Salinity",
  "Turbidity",
  "Chlorophyll",
  "Oil Slicks & Red Tide",
];

const imagesToShow = [
  {
    title: "",
    Component() {
      return (
        <>
          <div className="max-w-full lg:max-w-[90%] mx-auto mt-0 block">
            <img
              src={"/aoi.svg"}
              alt="Area of Interest"
              loading="lazy"
              className="w-full h-[600px] mt-0"
            />
          </div>
        </>
      );
    },
  },
  {
    title: "pH",
    image: true,
    introduction:
      "An acceptable range would be 6.5 to 9.0. Aquatic Organisms can go under stress in water with a pH ranging from 4.0 to 6.5 and 9.0 to 11.0.",
    description: [
      "The pH levels around the Tabuk Farm coastline are throughout the 12 month period are observed to be under the acceptable range.",
      "However, looking at the trends throughout the year (2023-2024), the month of March, April, Dec 2023, and Jan, Feb, 2024 has relatively high pH levels i.e. between 8.4 and 8.6",
      "While, the rest of the in-between months has pH levels around 8.3.",
    ],
  },
  {
    title: "Salinity",
    image: true,
    introduction: "The usual range of salinity of red sea is around 37-40 psu.",
    description: [
      "The salinity in month of March, 2023 is low (under 41 psu) and then eventually it increases from April to November, 2023.",
      "But it again starts falling under the limit of 41 psu from the month of Dec, 2023 till Feb, 2024.",
      "In both of the cases, the salinity is observed to be higher around the coastline area.",
    ],
  },
  {
    title: "Turbidity",
    image: true,
    introduction:
      "Turbidity interferes with the penetration of light which reduces photosynthesis and thereby decreases the primary productivity upon which the food organisms depend.",
    description: [
      "For year 2024, the month of Jan and Feb has been observed to have the highest turbidity levels around the coastline as compared to the previous months in year 2023.",
      "For year 2023, September had the lowest turbidity levels around the coastline and towards the ocean.",
      "The turbidity towards the ocean shows significant variation every month which is depicted in the visual as well.",
    ],
  },
  {
    title: "Chlorophyll",
    image: true,
    introduction:
      "Chlorophyll can be used as a measure of photosynthetic activity and algal biomass.",
    description: [
      "Currently, in the month of Feb, 2024 the chlorophyll levels are relatively moderate.",
      "While in the month of April, 2023 it is at the lowest and gradually it increases (especially around the coastline area) and reaches highest in the month of September, 2023.",
    ],
  },
  {
    title: "Oil Slicks & Red Tide",
    image: true,
    introduction:
      "This particular indicator is used for detecting pollution caused by industrial pollutants, municipal sewage, and algae density and mud. The yellow, orange and red colors in the above visual  shows the presence of oil and algae.",
    description: [
      "Over the 12 month period, March, June, December, 2023, and Jan, Feb, 2024 has been observed to have relatively lowest pollution.",
      "Industrial effluent or oil slicks can be one of the major contributor causing growth of harmful algae around this area. On-ground assessment is required to validate the actual cause.",
    ],
  },
];

const Description = ({ description }) => (
  <div className="max-w-full lg:max-w-[60%] mx-auto">
    <h6 className="text-lg mb-4 font-medium text-left">
      <span className="font-bold underline text-2xl">Observation:</span>
    </h6>
    <ul className="text-left list-disc pl-4">
      {description.map((item, index) => (
        <li key={index} className="my-2 text-base font-normal">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function HomeLayout() {
  const [currentItem, setCurrentItem] = React.useState(0);

  const CurrentComponent = React.useMemo(() => {
    return imagesToShow[currentItem];
  }, [currentItem]);

  const CurrentComponentImage = React.useMemo(() => {
    const imagePath = CurrentComponent.title.toLowerCase().replace(/ /g, "_");
    return CurrentComponent?.image
      ? () => (
          <div className="max-w-full mx-auto my-12 block">
            <img
              src={`/${imagePath}.svg`}
              alt="Legends for False Color Image Visualization"
              loading="lazy"
              className={`w-full h-[480px] mt-4 mx-auto ${
                CurrentComponent.imageStyle || ""
              }`}
            />
          </div>
        )
      : () => <></>;
  }, [CurrentComponent, currentItem]);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Drawer
        sx={{
          flexShrink: 0,
          position: "relative",
          "& .MuiDrawer-paper": {
            bgcolor: "#0f1633",
            color: "white",
            width: "100%",
            position: "relative",
            boxSizing: "border-box",
            overflow: "auto",
          },
        }}
        className="w-0 md:w-[30%] xl:w-1/5 overflow-auto h-screen"
        variant="persistent"
        anchor="left"
        open={true}
      >
        <Box
          sx={{
            width: "100%",
            padding: "20px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <img
            src={"/galaxeye-white.png"}
            width="100px"
            alt="Galaxeye Logo"
            loading="lazy"
          />
          <div className="w-full mt-2">
            <p className="text-sm">OCEAN ANALYSIS</p>
            <span className="text-sm">March&rsquo;23-Feb&rsquo;24</span>
          </div>
        </Box>
        <Divider className="!border-white !mx-auto w-[90%]" />
        <List>
          {itemsToShow.map((item, index) => (
            <React.Fragment key={index}>
              {index === 1 && (
                <Divider className="!border-white !my-2 !mx-auto w-[90%]" />
              )}
              <ListItem
                className={`hover:bg-gray-800 ${
                  index === currentItem ? "bg-gray-600" : ""
                }`}
                disablePadding
                onClick={() => setCurrentItem(index)}
              >
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <Main className="!pt-16 overflow-auto h-screen">
        {CurrentComponent.title && (
          <h1 className="text-3xl mb-4 font-semibold">
            {CurrentComponent.title}
          </h1>
        )}
        {CurrentComponent.Component && <CurrentComponent.Component />}

        {CurrentComponent.introduction && (
          <div className="max-w-full lg:max-w-[60%] mx-auto">
            <h6 className="text-lg mb-4 font-medium text-left">
              <span className="font-bold underline text-2xl">
                Introduction:
              </span>
              <br />
              {CurrentComponent.introduction}
            </h6>
          </div>
        )}
        <CurrentComponentImage />
        {CurrentComponent.description && (
          <Description description={CurrentComponent.description} />
        )}
        <footer className="absolute bottom-0 left-0 right-0 text-right text-sm font-semibold px-8 bg-white">
          <p>*Proprietary and Confidential</p>
        </footer>
      </Main>
    </Box>
  );
}
