import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PlaCard from "./Card";
import Demo from "./ChatBot/bot";
import PeopleCard from "./ActionComponents/People/PeopleCard";
import SportsCard from "./ActionComponents/sports/SportsCard";
import PlacesCard from "./ActionComponents/places/PlacesCard";
import FoodCard from "./ActionComponents/food/FoodCard";
import BodyCard from "./ActionComponents/body/BodyCard";
import TransportCard from "./ActionComponents/Transport/TransportCard";
import ClothingCard from "./ActionComponents/Clothing/ClothingCard";
import FeedbackForm from "./Feedback/FeedbackForm";
import EmotionCard from "./ActionComponents/Emotions/EmotionCard";
import "../App.css";
import Learn from "./LearnNew/Learn";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#867AE9",
    fontSize: "20px",
    height: "40px",
    textAlign: "center",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let allyCount = 0;
  let indexCount = 0;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            className={classes.root}
            label="People"
            {...a11yProps(allyCount++)}
          />
          <Tab
            className={classes.root}
            label="Sports"
            {...a11yProps(allyCount++)}
          />
          <Tab
            className={classes.root}
            label="Places"
            {...a11yProps(allyCount++)}
          />
          <Tab
            className={classes.root}
            label="Food"
            {...a11yProps(allyCount++)}
          />
          <Tab
            className={classes.root}
            label="Body"
            {...a11yProps(allyCount++)}
          />
          <Tab
            className={classes.root}
            label="Transport"
            {...a11yProps(allyCount++)}
          />
          <Tab
            className={classes.root}
            label="Clothing"
            {...a11yProps(allyCount++)}
          />
          <Tab
            className={classes.root}
            label="Emotion"
            {...a11yProps(allyCount++)}
          />
          <Tab
            className={classes.root}
            label="Learn"
            {...a11yProps(allyCount++)}
          />
          <Tab
            className={classes.root}
            label="Talk to AANYA"
            {...a11yProps(allyCount++)}
          />
          <Tab
            className={classes.root}
            label="Feedback"
            {...a11yProps(allyCount++)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={indexCount++}>
        <PeopleCard />
      </TabPanel>
      <TabPanel value={value} index={indexCount++}>
        <SportsCard />
      </TabPanel>
      <TabPanel value={value} index={indexCount++}>
        <PlacesCard />
      </TabPanel>
      <TabPanel value={value} index={indexCount++}>
        <FoodCard />
      </TabPanel>
      <TabPanel value={value} index={indexCount++}>
        <BodyCard />
      </TabPanel>
      <TabPanel value={value} index={indexCount++}>
        <TransportCard />
      </TabPanel>
      <TabPanel value={value} index={indexCount++}>
        <ClothingCard />
      </TabPanel>
      <TabPanel value={value} index={indexCount++}>
        <EmotionCard />
      </TabPanel>
      <TabPanel value={value} index={indexCount++}>
        <Learn />
      </TabPanel>
      <TabPanel value={value} index={indexCount++}>
        <Demo />
      </TabPanel>
      <TabPanel value={value} index={indexCount++}>
        <FeedbackForm />
      </TabPanel>
    </div>
  );
}
