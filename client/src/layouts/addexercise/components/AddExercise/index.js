// @mui material components
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/addexercise/components/Bill";

// Add supabase connection
import { supabase } from "../../../../supabaseClient";

function AddExercise() {
  const handleSubmit = async () => {
    const exerciseData = {
      name: document.getElementById("exercise-name").value,
      category: document.getElementById("exercise-category").value,
      description: document.getElementById("exercise-description").value,
    };

    try {
      // Use supabase client's api.post method to add data
      const { data, error } = await supabase
        .from("exercise")
        .upsert([exerciseData])
        .select();

      if (error) {
        console.error("Error adding exercise:", error);
        // Handle the error here
      } else {
        console.log("Exercise added successfully!");
        // Optionally, you can redirect or show a success message here
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle the error here
    }
  };

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h4" fontWeight="medium">
          Add Exercise
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <TextField id="exercise-name" label="Exercise Name" variant="outlined" />
        </MDBox>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <TextField id="exercise-category" label="Category" variant="outlined" />
        </MDBox>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <TextField id="exercise-description" label="Description" variant="outlined" />
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

export default AddExercise;
