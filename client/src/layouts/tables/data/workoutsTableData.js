
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
  async function getWorkouts() {
    try {
      const { data: workoutsData, error: workoutsError } = await supabase.from("workout").select("*");
      if (workoutsError) throw workoutsError;

      const workoutsWithCustomizedExercises = await Promise.all(
        workoutsData.map(async (workout) => {
          const { data: customizedExercisesData, error: exercisesError } = await supabase
            .from("customized_exercise")
            .select("*")
            .eq("workout_id", workout.id);
          
          //if (exercisesError) throw exercisesError;
          if (exercisesError) {
            console.error("Error fetching customized exercises:", exercisesError);}


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
            exercises: (
              <MDBox display="flex" py={1}>
                {customizedExercisesData.map((exercise, index) => (
                  <span key={index}>
                    {exercise.exercise_name}
                    {index < customizedExercisesData.length - 1 && ", "}
                  </span>
                ))}
              </MDBox>
            ),
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
        })
      );

      setWorkouts(workoutsWithCustomizedExercises);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    getWorkouts();
  }, []);



  // const [workouts, setWorkouts] = useState([]);
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
  // useEffect(() => {
  //   getWorkouts();
  // }, []);

  return {
    columns: [
      { Header: "name", accessor: "name", width: "20%", align: "left" },
      { Header: "workoutId", accessor: "workoutId", width: "20%", align: "left" },
      { Header: "exercises", accessor: "exercises", width: "40%", align: "left" },
      { Header: "Edit", accessor: "edit", width: "10%", align: "left" },
      { Header: "Delete", accessor: "delete", width: "10%", align: "center" },
    ],

    rows: workouts.map((workout, index) => ({
      name: (
        <MDBox display="flex" py={1}>
          {workout.workout_name} {/* Display the name of the current workout */}
        </MDBox>
      ),
      workoutId: (
        <MDBox display="flex" py={1}>
          {workout.id} {/* Display the name of the current exercise */}
        </MDBox>
      ),
      exercises: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {workout.id}
        </MDTypography>
      ),
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
    })),

    // rows: [
    //   {
    //     author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
    //     function: <Job title="Manager" description="Organization" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     employed: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         23/04/18
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Edit
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
    //     function: <Job title="Programator" description="Developer" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     employed: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         11/01/19
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Edit
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
    //     function: <Job title="Executive" description="Projects" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     employed: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         19/09/17
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Edit
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
    //     function: <Job title="Programator" description="Developer" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     employed: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         24/12/08
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Edit
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     author: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
    //     function: <Job title="Manager" description="Executive" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     employed: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         04/10/21
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Edit
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
    //     function: <Job title="Programator" description="Developer" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     employed: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         14/09/20
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Edit
    //       </MDTypography>
    //     ),
    //   },
    // ],
  };
}