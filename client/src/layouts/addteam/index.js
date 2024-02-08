import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import MDBox from "../../components/MDBox";
import Grid from "@mui/material/Grid";
import Footer from "../../examples/Footer";
import AddTeam from "./components/AddTeam";

function AddingTeam() {
  return (
    <DashboardLayout>
      <DashboardNavbar pageTitle="Add New Team" absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <AddTeam />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddingTeam;
