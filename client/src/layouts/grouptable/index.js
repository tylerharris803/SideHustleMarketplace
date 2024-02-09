/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DataTable from "examples/Tables/DataTable";

// Data
import groupsTableData from "layouts/grouptable/data/groupsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const { columns, rows } = groupsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox pt={6} pb={3}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <Card>
//               <MDBox
//                 mx={2}
//                 mt={-3}
//                 py={3}
//                 px={2}
//                 variant="gradient"
//                 bgColor="info"
//                 borderRadius="lg"
//                 coloredShadow="info"
//               >
//                 <MDTypography variant="h6" color="white">
//                   Players Table
//                 </MDTypography>
//               </MDBox>
//               <MDBox pt={3}>
//                 <DataTable
//                   table={{ columns, rows }}
//                   isSorted={false}
//                   entriesPerPage={false}
//                   showTotalEntries={false}
//                   noEndBorder
//                 />
//               </MDBox>
//             </Card>
//           </Grid>
//           <Grid item xs={12}>
//             <Card>
//               <MDBox
//                 mx={2}
//                 mt={-3}
//                 py={3}
//                 px={2}
//                 variant="gradient"
//                 bgColor="info"
//                 borderRadius="lg"
//                 coloredShadow="info"
//               >
//                 <MDTypography variant="h6" color="white">
//                   Projects Table
//                 </MDTypography>
//               </MDBox>
//               <MDBox pt={3}>
//                 <DataTable
//                   table={{ columns: pColumns, rows: pRows }}
//                   isSorted={false}
//                   entriesPerPage={false}
//                   showTotalEntries={false}
//                   noEndBorder
//                 />
//               </MDBox>
//             </Card>
//           </Grid>
//         </Grid>
//       </MDBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }
<DashboardLayout>
<DashboardNavbar />
<MDBox pt={6} pb={3}>
  <Grid container spacing={6}>
    <Grid item xs={12}>
      <Card>
        <MDBox
          mx={2}
          mt={-3}
          py={3}
          px={2}
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
        >
          <MDTypography variant="h6" color="white">
            Players Table
          </MDTypography>
        </MDBox>
        <MDBox pt={3}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell key={index}>{column.Header}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <TableCell>{row.first}</TableCell>
                    </AccordionSummary>
                    <AccordionDetails>
                      <TableRow>
                        <TableCell>{row.last}</TableCell>
                        <TableCell>{row.position}</TableCell>
                        <TableCell>{row.group}</TableCell>
                        <TableCell>{row.edit}</TableCell>
                        <TableCell>{row.delete}</TableCell>
                      </TableRow>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </MDBox>
      </Card>
    </Grid>
    <Grid item xs={12}>
      <Card>
        <MDBox
          mx={2}
          mt={-3}
          py={3}
          px={2}
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
        >
          <MDTypography variant="h6" color="white">
            Projects Table
          </MDTypography>
        </MDBox>
        <MDBox pt={3}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {pColumns.map((column, index) => (
                    <TableCell key={index}>{column.Header}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {pRows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.first}</TableCell>
                    <TableCell>{row.last}</TableCell>
                    <TableCell>{row.position}</TableCell>
                    <TableCell>{row.group}</TableCell>
                    <TableCell>{row.edit}</TableCell>
                    <TableCell>{row.delete}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </MDBox>
      </Card>
    </Grid>
  </Grid>
</MDBox>
<Footer />
</DashboardLayout>
);
}
export default Tables;
