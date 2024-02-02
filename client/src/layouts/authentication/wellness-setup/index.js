import React, { useEffect, useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// @mui icons
import Icon from "@mui/material/Icon";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/grass2.jpg";
import { FormControl, FormControlLabel, InputLabel, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import { supabase } from "../../../supabaseClient";

const daysOfWeekMap = [
  { id: 1, name: "Sunday" },
  { id: 2, name: "Monday" },
  { id: 3, name: "Tuesday" },
  { id: 4, name: "Wednesday" },
  { id: 5, name: "Thursday" },
  { id: 6, name: "Friday" },
  { id: 7, name: "Saturday" },
];

function Cover() {
  const [wellnessOptions, setWellnessOptions] = useState([]);
  const [selectedDays, setSelectedDays] = useState(daysOfWeekMap.map((day) => day.id));
  const [selectedWellnessOptions, setSelectedWellnessOptions] = useState(wellnessOptions);

  const handleWellnessOptionChange = (option) => {
    setSelectedWellnessOptions((prevSelected) => {
      if (prevSelected.includes(option)) {
        return prevSelected.filter((item) => item !== option);
      } else {
        return [...prevSelected, option];
      }
    });
  };

  useEffect(() => {
    // Fetch wellness options from Supabase
    async function fetchWellnessOptions() {
      try {
        const { data, error } = await supabase.from("wellness").select("name");
        if (error) {
          throw error;
        }
        if (data != null) {
          setWellnessOptions(data.map((wellness) => wellness.name));
          setSelectedWellnessOptions(data.map((wellness) => wellness.name));
        }
      } catch (error) {
        alert(error.message);
      }
    }
  
    fetchWellnessOptions();
  }, []);
  

  const handleDayChange = (day) => {
    setSelectedDays((prevSelectedDays) => {
      const newSelectedDays = prevSelectedDays.includes(day)
        ? prevSelectedDays.filter((d) => d !== day)
        : [...prevSelectedDays, day];

      console.log("selecteddays: ", newSelectedDays);

      return newSelectedDays;
    });
  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Wellness Check-ins
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            CoachSync allows you to regularly check in on the wellness of your players
          </MDTypography>
        </MDBox>
        <MDBox pt={2} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDTypography display="block" variant="button" color="text" my={1}>
              Select the wellness check-in activities that you want to assign your team.
            </MDTypography>
            <MDBox pt={1} pb={2} px={2}>
            <FormControl>
                <MDBox display="flex" flexDirection="column">
                  {wellnessOptions.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          checked={selectedWellnessOptions.includes(option)}
                          onChange={() => handleWellnessOptionChange(option)}
                          name={option}
                        />
                      }
                      label={option}
                    />
                  ))}
                </MDBox>
              </FormControl>
            </MDBox>
            <MDBox pt={1} pb={2} px={2}>
              <MDTypography display="block" variant="button" color="text" my={1}>
                How often you want to check-in?
              </MDTypography>
                
              <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
                <MDBox mb={2}>
                  <FormControl>
                    {/* Remove the surrounding MDBox with flexDirection="row" */}
                    {daysOfWeekMap.map((day, index) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={selectedDays.includes(day.id)}
                            onChange={() => handleDayChange(day.id)}
                            name={day.name}
                          />
                        }
                        label={day.name}
                      />
                    ))}
                  </FormControl>
                </MDBox>
              </MDBox>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton component={Link} to="/dashboard" variant="gradient" color="info" fullWidth>
                Next
              </MDButton>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton component={Link} to="/authentication/teaminfo" color="white" fullWidth>
                Go Back
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
