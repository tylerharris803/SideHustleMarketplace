// NOT BEING USED


// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";

// // Images
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
// import MDProgress from "../../../components/MDProgress";

// export default function data() {
//   const [workouts, setWorkouts] = useState([]);
//   async function getWorkouts() {
//     try {
//       const { data, error } = await supabase.from("workout").select("*");
//       if (error) throw error;
//       if (data != null) {
//         setWorkouts(data);
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   }
//   useEffect(() => {
//     getWorkouts();
//   }, []);

//   const Author = ({ image, name, email }) => (
//     <MDBox display="flex" alignItems="center" lineHeight={1}>
//       <MDAvatar src={image} name={name} size="sm" />
//       <MDBox ml={2} lineHeight={1}>
//         <MDTypography display="block" variant="button" fontWeight="medium">
//           {name}
//         </MDTypography>
//         <MDTypography variant="caption">{email}</MDTypography>
//       </MDBox>
//     </MDBox>
//   );

//   const Job = ({ title, description }) => (
//     <MDBox lineHeight={1} textAlign="left">
//       <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
//         {title}
//       </MDTypography>
//       <MDTypography variant="caption">{description}</MDTypography>
//     </MDBox>
//   );

//   return {
//     columns: [
//       { Header: "author", accessor: "author", width: "45%", align: "left" },
//       { Header: "function", accessor: "function", align: "left" },
//       { Header: "status", accessor: "status", align: "center" },
//       { Header: "employed", accessor: "employed", align: "center" },
//       { Header: "action", accessor: "action", align: "center" },
//     ],

//     rows: exercises.map((workout, index) => ({
//       id: (
//         <MDBox display="flex" py={1}>
//           {workout.id} {/* Display the name of the current exercise */}
//         </MDBox>
//       ),
//       workout: (
//         <MDBox display="flex" py={1}>
//           {workout.name} {/* Display the name of the current exercise */}
//         </MDBox>
//       ),
//     })),
//   };
// }
