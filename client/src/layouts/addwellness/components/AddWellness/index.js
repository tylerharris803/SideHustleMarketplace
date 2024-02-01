// @mui material components
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Material Dashboard 2 React components
import MDBox from "../../../../components/MDBox";
import MDTypography from "../../../../components/MDTypography";

import { FormControl, FormControlLabel, InputLabel, Select, Slider } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import React, { useEffect, useState } from "react";
import { supabase } from "../../../../supabaseClient";
import Checkbox from "@mui/material/Checkbox";

import slider from '@mui/material/Slider';

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//need this for displaying which dow they want to use?
const daysOfWeekMap = [
  { id: 1, name: "Sunday" },
  { id: 2, name: "Monday" },
  { id: 3, name: "Tuesday" },
  { id: 4, name: "Wednesday" },
  { id: 5, name: "Thursday" },
  { id: 6, name: "Friday" },
  { id: 7, name: "Saturday" },
];

function AddWellness() {
  const navigate = useNavigate();
  //const [selectedSport, setSelectedSport] = useState(""); // new state for selected sport
  //const [selectedDays, setSelectedDays] = useState([]); // new state for selected days
  const [wellnessData, setWellnessData] = useState({
    water: { id: 1, value: 3 },
    sleep: { id: 2, value: 3 },
    stress: { id: 3, value: 3 },
    soreness: { id: 4, value: 3 },
    energy: { id: 5, value: 3 }
  });

   const handleSliderChange = (type, value) => {
    setWellnessData((prevData) => ({
      ...prevData,
      [type]: { id: prevData[type].id, value: value}
    }));
   };

  // const handleSportChange = (event) => {
  //   setSelectedSport(event.target.value);
  // };

  // const handleDayChange = (day) => {
  //   setSelectedDays((prevSelectedDays) => {
  //     const newSelectedDays = prevSelectedDays.includes(day)
  //       ? prevSelectedDays.filter((d) => d !== day)
  //       : [...prevSelectedDays, day];

  //     console.log("selecteddays: ", newSelectedDays);

  //     return newSelectedDays;
  //   });
  // };

  const handleSubmit = async () => {
    const dataToSubmit = Object.keys(wellnessData).map((type) => ({
      player_id: '2cefa8cf-5c6f-4827-a552-5864f6dd130d', //get current user id
      wellness_id: wellnessData[type].id,
      date: '2024-02-01', //get date that is selected...limiting to current date? allowing users to go back and select a date missed?
      created_at: new Date().toISOString(),      
      value: wellnessData[type].value,
    }));

    try {
      // Use supabase client's api.post method to add data
      const { data, error } = await supabase.from("checkin").upsert([wellnessData]).select();

      if (error) {
        console.error("Error adding wellness:", error);
        // Handle the error here
      } else {
        console.log("Wellness added successfully!");

        toast.success("Wellness added successfully!", {
          autoClose: 2000,
          onClose: () => {
            navigate("/dashboard");
          },
        });
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle the error here
    }
  };

  return (
    <Card id="add-wellness">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h4" fontWeight="medium">
          Add Wellness
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          Water
          <Slider valueLabelDisplay="auto" step={1} marks min={1} max={5} value={wellnessData.water.value} onChange={(event, value) => handleSliderChange('water', value)} />
        </MDBox>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          Sleep 
          <Slider valueLabelDisplay="auto" step={1} marks min={1} max={5} value={wellnessData.sleep.value} onChange={(event, value) => handleSliderChange('sleep', value)}/>
        </MDBox>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          Stress
          <Slider valueLabelDisplay="auto" step={1} marks min={1} max={5} value={wellnessData.stress.value} onChange={(event, value) => handleSliderChange('stress', value)}/>
        </MDBox>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
         Soreness
          <Slider valueLabelDisplay="auto" step={1} marks min={1} max={5} value={wellnessData.soreness.value} onChange={(event, value) => handleSliderChange('soreness', value)}/>
        </MDBox>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          Energy
          <Slider valueLabelDisplay="auto" step={1} marks min={1} max={5} value={wellnessData.energy.value} onChange={(event, value) => handleSliderChange('energy', value)}/>
        </MDBox>
      </MDBox>
      <MDBox px={2} pb={2}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          <MDTypography variant="caption" color="white" fontWeight="bold" textTransform="uppercase">
            Submit
          </MDTypography>
        </Button>
      </MDBox>
    </Card>
  );
}

export default AddWellness;
