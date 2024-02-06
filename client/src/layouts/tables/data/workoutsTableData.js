
import { useEffect, useState } from "react";

import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MDProgress from "components/MDProgress";
import MDButton from "components/MDButton";

// Add supabase connection
import { supabase } from "../../../supabaseClient";

export default function data() {
  const [workouts, setWorkouts] = useState([]);
  const [customizedExercises, setCustomizedExercises] = useState([]);
  const [exercises, setExercises]= useState([]);

  async function getWorkouts() {
  try {
    // Fetch data from the workout table
    const { data: workoutData, error: workoutError } = await supabase.from("workout").select("*");
    if (workoutError) throw workoutError;
    if (workoutData != null) {
      setWorkouts(workoutData);
    }

    // Fetch data from the customized_exercise table
    const { data: custexerciseData, error: custexerciseError } = await supabase.from("customized_exercise").select("*");
    if (custexerciseError) throw custexerciseError;
    if (custexerciseData != null) {
      setCustomizedExercises(custexerciseData);
    }
    console.log("custexerciseData: ", custexerciseData)

    const { data: exerciseData, error: exerciseError } = await supabase.from("exercise").select("*");
    if (exerciseError) throw exerciseError;
    if (exerciseData != null) {
      setExercises(exerciseData);
    }
    console.log("exerciseData: ", exerciseData)

  } catch (error) {
    alert(error.message);
  }
}  useEffect(() => {
     getWorkouts();
   }, []);


  return {
    columns: [
      { Header: "name", accessor: "name", width: "20%", align: "left" },
      { Header: "workoutId", accessor: "workoutId", width: "20%", align: "left" },
      { Header: "exercises", accessor: "exercises", width: "40%", align: "left" },
      { Header: "Edit", accessor: "edit", width: "10%", align: "left" },
      { Header: "Delete", accessor: "delete", width: "10%", align: "center" },
    ],
    rows: workouts.map((workout, index) => {
      // Find customized exercises that belong to the current workout
      //const matchedExercises = customizedExercises.filter(exercise => exercise.workout_id === workout.id);
      const matchedExercises = customizedExercises.filter(exercise => exercise.workout_id === workout.id);
  
      // Map matched exercises to their corresponding data from the exercise table
      const mappedExercises = matchedExercises.map(customizedExercise => {
        const correspondingExercise = exercises.find(exercise => exercise.id === customizedExercise.exercise_id);
        return correspondingExercise ? correspondingExercise.name : 'Unknown Exercise';
      });

      console.log("mapped: ", mappedExercises)
      
      return {
        name: (
          <MDBox display="flex" py={1}>
            {workout.workout_name}
          </MDBox>
        ),
        workoutId: (
          <MDBox display="flex" py={1}>
            {workout.id}
          </MDBox>
        ),
        // exercises: (
        //   <MDBox display="flex" py={1}>
        //     {matchedExercises.length > 0 ? 
        //       matchedExercises.map((exercise, index) => (
        //         <span key={index}>
        //           {exercise.exercise_id}
        //           {index < matchedExercises.length - 1 && ", "}
        //         </span>
        //       )) 
        //       : 
        //       "No exercises found"
        //     }
        //   </MDBox>
        // ),
        exercises: (
          <MDBox display="flex" py={1}>
            {mappedExercises.length > 0 ? 
              mappedExercises.map((mappedExercises, index) => (
                <span key={index}>
                  {mappedExercises.toLowerCase()}{index < mappedExercises.length - 1 ? ", " : ""}
                </span>
              )) 
              : 
              "No exercises found"
            }
          </MDBox>
        ),
        // exercises: (
        //   <MDBox display="flex" py={1}>
        //     {mappedExercises.length > 0 ? mappedExercises.join(", ") : "No exercises found"}
        //   </MDBox>
        // ),
        edit: (
          <MDBox>
            <MDButton variant="text" color="dark">
              <Icon>edit</Icon>&nbsp;edit
            </MDButton>
          </MDBox>
        ),
        delete: (
          <MDBox mr={1}>
            <MDButton variant="text" color="error">
              <Icon>delete</Icon>&nbsp;delete
            </MDButton>
          </MDBox>
        ),
      };
    }),
  };
}