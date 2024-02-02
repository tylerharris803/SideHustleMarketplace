import React from 'react';

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
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsIcon from '@mui/icons-material/Sports';

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/grass2.jpg";
import { FormControl, InputLabel, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cover() {
  const [selectedRole, setSelectedRole] = React.useState("player");
  

  const handleRoleChange = (event, newRole) => {
    setSelectedRole(newRole);
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
          <MDTypography variant="h4" fontWeight="light" color="white" mt={1}>
            Are you a <strong style={{ fontWeight: 'bold' }}>Player</strong> or <strong style={{ fontWeight: 'bold' }}>Coach</strong>?
          </MDTypography>
          {/* <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography> */}
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <ToggleButtonGroup
                value={selectedRole}
                exclusive
                onChange={handleRoleChange}
                aria-label="Player or Coach"
                fullWidth
              >
                <ToggleButton value="player">
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    Player
                    <SportsBaseballIcon sx={{ width: "80%", minHeight:'30px' }} />
                  </div>
                </ToggleButton>
                <ToggleButton value="coach">
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    Coach
                    <SportsIcon sx={{ width: "100%", minHeight:'30px' }} />
                  </div>
                </ToggleButton>
              </ToggleButtonGroup>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton component={Link} to="/authentication/coachinfo" variant="gradient" color="info" fullWidth>
                Next
              </MDButton>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton component={Link} to="/authentication/sign-up" color="white" fullWidth>
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
