import React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./themes";




const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const steps = [
  {
    label: "",
    imgPath: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
  },
  {
    label: "",
    imgPath: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg"
  },
  {
    label: "",
    imgPath: "https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png"
  }
];
export default function Stepper1() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleStepChange = step => {
    setActiveStep(step);
  };
  return (
    <ThemeProvider theme={theme}>
    <div class="stepper"><Box color="hello" sx={{display: "flex", maxWidth:"100%"}}>
      <Box sx={{ maxWidth:"50%"}}>
      <Paper square elevation={0} sx={{paddingTop:"5%"}}>
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {steps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper sx={{paddingBottom:"3%"}}
        variant="progress"
        steps={3}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      /></Box>
      <Box sx={{ maxWidth:"50%", padding:"5%", justifyContent:"center", alignItems:"center", textAlign:"justify"}}>
      <Typography variant="h3" gutterBottom color="#90C8AC">
         Take a look at the basic amenities and essentials of our Campus! Choose the best for your ward!
      </Typography>
            <Typography variant="body2" gutterBottom color="#90C8AC">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      </Box>

      </Box>
    </div>
    </ThemeProvider>
  );
}