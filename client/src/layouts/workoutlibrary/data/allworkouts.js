

// @mui material components
import Card from "@mui/material/Card";
import React, { useState, useEffect } from "react";


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

//data
import workoutsTableData from "layouts/tables/data/workoutsTableData"

// Add supabase connection
import { supabase } from "../../../supabaseClient";

function data() {
    const [workouts, setWorkouts] = useState([]);
    async function getWorkouts() {
      try {
        const { data, error } = await supabase.from("workout").select("*");
        if (error) throw error;
        if (data != null) {
          setWorkouts(data);
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
            <Bill key={index} name={workout.workout_name} />
          ))}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default WorkoutLibrary;
