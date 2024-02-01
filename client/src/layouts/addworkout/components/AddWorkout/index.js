// @mui material components
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Material Dashboard 2 React components
import MDBox from "../../../../components/MDBox";
import MDTypography from "../../../../components/MDTypography";

import { FormControl, InputLabel, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import React, { useState, useEffect } from "react";
import { supabase } from "../../../../supabaseClient";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const exerciseChoices = ["Exercise 1", "Exercise 2", "Exercise 3", "Exercise 4", "Exercise 5"];

function AddWorkout() {
    const navigate = useNavigate();
    // const [selectedSport, setSelectedSport] = useState(""); // new state for selected sport
    // const [selectedDays, setSelectedDays] = useState([]); // new state for selected days
    const [exercises, setExercises] = useState([]);
//   const [workoutName, setWorkoutName] = useState("");
    const [selectedExercises, setSelectedExercises] = useState(Array(exerciseChoices.length).fill({ reps: "", sets: "", duration: "" }));

  const handleExerciseChange = (index, field, value) => {
    setSelectedExercises((prevSelectedExercises) => {
      const newSelectedExercises = [...prevSelectedExercises];
      newSelectedExercises[index][field] = value;
      return newSelectedExercises;
    });
  };

  async function getExercises(){
    try {
        let { data, error } = await supabase.from("exercise").select("*");
  
        if (error) throw error;
  
        if (data != null) {
          setExercises(data);
        }
      } catch (error) {
        alert(error.message);
      }
    }
    useEffect(() => {
      getExercises();
    }, []);


  const handleSubmit = () => {
    // Your form submission logic here
    console.log("Workout Name:", workoutName);
    console.log("Selected Exercises:", selectedExercises);
  };

  return (
    <Card id="workout-form">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h4" fontWeight="medium">
          Create Workout
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <TextField id="workout-name" label="Workout Name" variant="outlined" />
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

export default AddWorkout;