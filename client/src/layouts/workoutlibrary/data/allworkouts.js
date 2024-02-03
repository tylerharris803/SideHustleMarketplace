

// @mui material components
import Card from "@mui/material/Card";
import React, { useState, useEffect } from "react";


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "../workouts_format/index";

//data
import workoutsTableData from "layouts/tables/data/workoutsTableData"

// Add supabase connection
import { supabase } from "../../../supabaseClient";

function data() {
    const [workouts, setWorkouts] = useState([]);
    // async function getWorkouts() {
    //   try {
    //     const { data, error } = await supabase.from("workout").select("*");
    //     if (error) throw error;
    //     if (data != null) {
    //       setWorkouts(data);
    //     }
    //   } catch (error) {
    //     alert(error.message);
    //   }
    // }
    async function getWorkouts() {
        try {
          const { data: workoutsData, error: workoutsError } = await supabase
            .from("workout")
            .select("id, workout_name");
      
          if (workoutsError) throw workoutsError;
      
          if (workoutsData && workoutsData.length > 0) {
            const workoutsWithExercises = await Promise.all(
              workoutsData.map(async (workout) => {
                try {
                  const { data: exerciseData, error: exerciseError } = await supabase
                    .from("customized_exercise")
                    .select("exercise_id")
                    .eq("workout_id", workout.id);
      
                  if (exerciseError) throw exerciseError;
      
                  const exercise_id = exerciseData && exerciseData.length > 0 ? exerciseData[0].exercise_id : null;
      
                  console.log("Workout:", workout);
                  console.log("Exercise Data:", exerciseData);
                  console.log("Exercise ID:", exercise_id);
      
                  return {
                    ...workout,
                    exercise_id,
                  };
                } catch (exError) {
                  console.error("Error fetching exercise data:", exError);
                  return workout;
                }
              })
            );
      
            console.log("Workouts with Exercises:", workoutsWithExercises);
      
            setWorkouts(workoutsWithExercises);
          }
        } catch (error) {
          alert(error.message);
        }
    }
    useEffect(() => {
      getWorkouts();
    }, []);
}
function WorkoutLibrary() {
    const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    async function getWorkouts() {
      try {
        const { data, error } = await supabase.from("workout").select("workout_name");
        if (error) throw error;
        if (data != null) {
          setWorkouts(data);
        }
      } catch (error) {
        alert(error.message);
      }
    }

    getWorkouts();
  }, []);

  return (
    <Card id="workout-library">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Saved Workouts
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {workouts.map((workout, index) => (
            <Bill key={index} name={workout.workout_name} exercise_id={workout.exercise_id} />
          ))}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default WorkoutLibrary;