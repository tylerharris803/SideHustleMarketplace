/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

import { useEffect, useState } from "react";

import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MDProgress from "components/MDProgress";
import MDButton from "components/MDButton";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// Add supabase connection
import { supabase } from "../../../supabaseClient";

export default function data() {
  const [courses, setCourses] = useState([]);
  async function getCourses() {
    try {
      const { data, error } = await supabase.from("course").select("*");
      if (error) throw error;
      if (data != null) {
        setCourses(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  useEffect(() => {
    getCourses();
  }, []);

  return {
    columns: [
      { Header: "title", accessor: "title", width: "20%", align: "left" },
      { Header: "industry", accessor: "industry", width: "20%", align: "left" },
      { Header: "date_created", accessor: "date_created", width: "20%", align: "left" },
      { Header: "description", accessor: "description", width: "40%", align: "left" },
      { Header: "price", accessor: "price", width: "20%", align: "left" },
      { Header: "num_students", accessor: "num_students", width: "20%", align: "left" },
      { Header: "length", accessor: "length", width: "20%", align: "left" },
      { Header: "Edit", accessor: "edit", width: "10%", align: "left" },
      { Header: "Delete", accessor: "delete", width: "10%", align: "center" },
    ],

    rows: courses.map((course, index) => ({
      title: (
        <MDBox display="flex" py={1}>
          {course.title} 
        </MDBox>
      ),
      industry: (
        <MDBox display="flex" py={1}>
          {course.industry}
        </MDBox>
      ),
      date_created: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {course.date_created}
        </MDTypography>
      ),
      description: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {course.description}
        </MDTypography>
      ),
      price: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {course.price}
        </MDTypography>
      ),
      num_students: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {course.num_students}
        </MDTypography>
      ),
      length: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {course.length}
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
  };
}
