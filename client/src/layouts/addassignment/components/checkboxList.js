import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'; 

export default function IndeterminateCheckbox() {
    const [checked, setChecked] = React.useState([false, false, false, false, false]);
  
    const handleChange0 = (event) => {
        setChecked([checked[0], checked[1], event.target.checked, event.target.checked, event.target.checked]);
    };
    
    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked, checked[2], checked[3], checked[4]]);
    };

    const handleChange2 = (event) => {
      setChecked([checked[0], event.target.checked, checked[2], checked[3], checked[4]]);
    };
  
    const handleChange3 = (event) => {
      setChecked([checked[0], checked[1], event.target.checked, checked[3], checked[4]]);
    };
  
    const handleChange4 = (event) => {
      const newChecked = [...checked];
      newChecked[2] = event.target.checked;
      setChecked(newChecked);
    };
  
    const handleChange5 = (event) => {
      const newChecked = [...checked];
      newChecked[3] = event.target.checked;
      setChecked(newChecked);
    };
  
    const handleChange6 = (event) => {
      const newChecked = [...checked];
      newChecked[4] = event.target.checked;
      setChecked(newChecked);
    };
  
    const children = (
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel
          label="Lauren Stolk"
          control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
        />
        <FormControlLabel
          label="Jordan Bateman"
          control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
        />
      </Box>
    );
  
    const defenseChildren = (
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel
          label="Seth Egbert"
          control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
        />
        <FormControlLabel
          label="Tyler Harris"
          control={<Checkbox checked={checked[3]} onChange={handleChange5} />}
        />
        <FormControlLabel
          label="Braedon Kimball"
          control={<Checkbox checked={checked[4]} onChange={handleChange6} />}
        />
      </Box>
    );
  
    return (
      <div>
        <FormControlLabel
          label="Offense"
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
          }
        />
        {children}
        <FormControlLabel
          label="Defense"
          control={
            <Checkbox
              checked={checked[2] && checked[3] && checked[4]}
              onChange={handleChange0}
            />
          }
        />
        {defenseChildren}
      </div>
    );
}









// export default function IndeterminateCheckbox() {
//   const [checked, setChecked] = React.useState([true, false,]);

//   const handleChange1 = (event) => {
//     setChecked([event.target.checked, event.target.checked]);
//   };

//   const handleChange2 = (event) => {
//     setChecked([event.target.checked, checked[1]]);
//   };

//   const handleChange3 = (event) => {
//     setChecked([checked[0], event.target.checked]);
//   };
//   const handleChange4 = (event) => {
//     setChecked([event.target.checked, checked[2]]);
//   };
//   const handleChange5 = (event) => {
//     setChecked([event.target.checked, checked[3]]);
//   };
//   const handleChange6 = (event) => {
//     setChecked([event.target.checked, checked[4]]);
//   };

//   const children = (
//     <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
//       <FormControlLabel
//         label="Lauren Stolk"
//         control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
//       />
//       <FormControlLabel
//         label="Jordan Bateman"
//         control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
//       />
//     </Box>
//   );
//   const defense_children= (
//     <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
//       <FormControlLabel
//         label="Seth Egbert"
//         control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
//       />
//       <FormControlLabel
//         label="Tyler Harris"
//         control={<Checkbox checked={checked[3]} onChange={handleChange5} />}
//       />
//       <FormControlLabel
//         label="Braedon Kimball"
//         control={<Checkbox checked={checked[4]} onChange={handleChange6} />}
//       />
//     </Box>
//   );

//   return (
//     <div>
//       <FormControlLabel
//         label="Offense"
//         control={
//           <Checkbox
//             checked={checked[0] && checked[1]}
//             indeterminate={checked[0] !== checked[1]}
//             onChange={handleChange1}
//           />
//         }
//       />
//       {children}
//       <FormControlLabel
//         label="Defense"
//         control={
//           <Checkbox
//             checked={checked[2] && checked[3]&& checked[4]}
//             indeterminate={checked[0] !== checked[1]}
//             onChange={handleChange1}
//           />
//         }
//       />
//       {defense_children}
//     </div>
    
//   );
// }