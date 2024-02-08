// @mui material components
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import { FormControl, FormControlLabel, InputLabel, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import React, { useEffect, useState } from "react";

// Add supabase connection
import { supabase } from "../../../../supabaseClient";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUserProfile } from "../../../../fetchUserProfile";
import Checkbox from "@mui/material/Checkbox";

async function getCustomizedExercise(assignmentData) {
  const { data: customizedExercisesData, error } = await supabase
    .from("customized_exercise")
    .select("*")
    .eq("workout_id", assignmentData.workout_id);

  // Fetch exercise data separately
  const { data: exerciseData } = await supabase.from("exercise").select("*");

  // Merge exercise data with customized exercises
  const customizedExercisesWithExerciseInfo = customizedExercisesData.map((customizedExercise) => {
    const exerciseInfo = exerciseData.find(
      (exercise) => exercise.id === customizedExercise.exercise_id
    );
    return {
      ...customizedExercise,
      ...exerciseInfo,
    };
  });
  console.log(customizedExercisesWithExerciseInfo);

  return customizedExercisesWithExerciseInfo;
}

async function getAssignment(profile) {
  const { data: assignmentData, error } = await supabase
    .from("assignment")
    .select("*")
    .eq("player_id", profile.id)
    .eq("date", new Date().toISOString().split("T")[0])
    .single();

  return assignmentData;
}

async function getWorkout(assignmentData) {
  const { data: workoutData, error } = await supabase
    .from("workout")
    .select("*")
    .eq("id", assignmentData.workout_id)
    .single();

  return workoutData;
}

function CompleteWorkout() {
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState(null);
  const [workout, setWorkout] = useState(null);
  const [customizedExercises, setCustomizedExercises] = useState([]);
  const [completedExercises, setCompletedExercises] = useState([]);

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserProfile();
      setProfile(data);
      const assignmentData = await getAssignment(data);
      setAssignment(assignmentData);
      const customizedExercisesData = await getCustomizedExercise(assignmentData);
      setCustomizedExercises(customizedExercisesData);
      const workoutData = await getWorkout(assignmentData);
      setWorkout(workoutData);
    };
    fetchData();
  }, []);

  // Function to handle checkbox change for completed exercises
  const handleExerciseCompletionChange = (exercise) => {
    setCompletedExercises((prevCompletedExercises) => {
      const newCompletedExercises = prevCompletedExercises.includes(exercise)
        ? prevCompletedExercises.filter((e) => e !== exercise)
        : [...prevCompletedExercises, exercise];

      console.log("completedexercises: ", newCompletedExercises);

      return newCompletedExercises;
    });
  };

  const handleNotesChange = (index, field, value) => {
    setCustomizedExercises((prevCustomizedExercises) => {
      const updatedExercises = [...prevCustomizedExercises];
      updatedExercises[index][field] = value;
      return updatedExercises;
    });
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      const completionRecords = completedExercises.map((exercise) => ({
        date_completed: new Date().toISOString().split("T")[0],
        player_notes: exercise.notes,
        customized_exercise_id: exercise.id,
        assignment_id: assignment.id,
      }));

      const { data: completionResult, error: completionError } = await supabase
        .from("exercise_completion")
        .upsert(completionRecords)
        .select();

      if (completionError) {
        console.error("Error adding completion records:", completionError);
      } else {
        console.log("Completion records added successfully!");
      }
    } catch (error) {
      console.error("Error: ", error);
    }

    try {
      // Your submission logic
      toast.success("Workout completed and notes added successfully!", {
        autoClose: 2000,
        onClose: () => {
          navigate("/exerciselibrary");
        },
      });
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  // Render the form
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h4" fontWeight="medium">
          {workout ? workout.workout_name : "Today's Workout"}
        </MDTypography>
      </MDBox>

      <MDBox pt={1} pb={2} px={2}>
        <InputLabel>Exercises</InputLabel>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          className="MuiFormControlLabel-root"
        >
          {" "}
          {/* Add the className here */}
          <MDBox mb={2}>
            <FormControl>
              <MDBox display="flex" flexDirection="column">
                {customizedExercises.map((customizedExercise, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={completedExercises.includes(customizedExercise)}
                        onChange={() => handleExerciseCompletionChange(customizedExercise)}
                        name={customizedExercise.name}
                      />
                    }
                    label={
                      <div>
                        <MDTypography variant="body1" fontWeight="medium">
                          {customizedExercise.name}
                        </MDTypography>
                        {(customizedExercise.reps ||
                          customizedExercise.sets ||
                          customizedExercise.duration) && (
                          <MDTypography variant="body2">
                            {customizedExercise.reps && `Reps: ${customizedExercise.reps}`}
                            {customizedExercise.reps &&
                              customizedExercise.sets &&
                              customizedExercise.duration &&
                              " | "}
                            {customizedExercise.sets && `Sets: ${customizedExercise.sets}`}
                            {customizedExercise.sets && customizedExercise.duration && " | "}
                            {customizedExercise.duration &&
                              `Duration: ${customizedExercise.duration}`}
                          </MDTypography>
                        )}
                        <MDTypography variant="body2" color="text">
                          Coach Notes: {customizedExercise.coach_notes}
                        </MDTypography>
                        <TextField
                          label="Notes"
                          variant="outlined"
                          size="small"
                          fullWidth
                          multiline
                          rows={3}
                          placeholder="Enter notes..."
                          onChange={(event) =>
                            handleNotesChange(index, "notes", event.target.value)
                          }
                        />
                      </div>
                    }
                  />
                ))}
              </MDBox>
            </FormControl>
          </MDBox>
        </MDBox>
      </MDBox>

      {/* Submit button */}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Card>
  );
}
export default CompleteWorkout;
