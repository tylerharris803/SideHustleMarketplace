import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

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

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/grass2.jpg";
import { FormControl, InputLabel, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

function Cover() {
  const [profilePic, setProfilePic] = React.useState(null);

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the uploaded file (e.g., store it in state)
    setProfilePic(acceptedFiles[0]);
  }, []);

  const deleteProfilePic = () => {
    // Clear the profile picture from state
    setProfilePic(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Coach Info
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Lets personalize your Coach Profile
          </MDTypography>
          {/* <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography> */}
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDTypography display="block" variant="button" color="text" my={1}>
                What type of coach are you? (Head, Assistant, etc...)
              </MDTypography>
              <MDBox mb={5}>
                <MDInput type="text" label="Coach Role" variant="outlined" fullWidth />
              </MDBox>
            </MDBox>
            <MDBox mb={2} {...getRootProps()} style={{ cursor: 'pointer' }}>
              <input {...getInputProps()} />
              <MDTypography display="block" variant="button" color="text" my={1}>
                Upload Profile Pic
              </MDTypography>
              {isDragActive ? (
                <MDTypography display="block" variant="caption" color="info" mt={1}>
                  Drop the files here...
                </MDTypography>
              ) : (
                <MDButton>
                  <MDTypography display="block" variant="caption" color="info" mt={1}>
                    Drag and drop a profile picture here, or click to select one.
                  </MDTypography>
                </MDButton>
              )}
            </MDBox>
            {profilePic && (
              <MDBox display="flex" flexDirection="column" alignItems="center">
                <div
                  style={{
                    width: '200px', // Adjust the size of the circular image
                    height: '200px', // Make sure this is the same as the width
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid #fff', // Optional: border color
                  }}
                >
                  <img
                    src={URL.createObjectURL(profilePic)}
                    alt="Profile"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <MDButton onClick={deleteProfilePic} variant="text" color="error">
                  Delete
                </MDButton>
              </MDBox>
            )}
            <MDBox mt={4} mb={1}>
              <MDButton component={Link} to="/authentication/teaminfo" variant="gradient" color="info" fullWidth>
                Next
              </MDButton>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton component={Link} to="/authentication/coachorplayer" color="white" fullWidth>
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
