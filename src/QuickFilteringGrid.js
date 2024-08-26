// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import { useMovieData } from '@mui/x-data-grid-generator';
// const VISIBLE_FIELDS = ['title', 'company', 'director', 'year', 'cinematicUniverse'];
// export default function QuickFilteringGrid() {
//   const data = useMovieData();
//   // Otherwise filter will be applied on fields such as the hidden column id
//   const columns = React.useMemo(
//     () => data.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
//     [data.columns],
//   );
//   return (
//     <Box sx={{ height: 400, width: 1 }}>
//       <DataGrid
//         {...data}
//         disableColumnFilter
//         disableColumnSelector
//         disableDensitySelector
//         columns={columns}
//         slots={{ toolbar: GridToolbar }}
//         slotProps={{
//           toolbar: {
//             showQuickFilter: true,
//           },
//         }}
//       />
//     </Box>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import collegesData from './colleges.json'; // Import the generated data
import SearchBar from './Search';
import { TextField } from '@mui/material';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'rating', headerName: 'Rating', width: 100 },
  { field: 'fees', headerName: 'Fees', width: 150 },
  { field: 'userReview', headerName: 'User Review', width: 150 },
  { field: 'featured', headerName: 'Featured', width: 100 },
];


export default function QuickFilteringGrid() {
    const [searchQuery,setSearchQuery]=React.useState('');
    // const handleSearch=(query)=>{
    //     setSearchQuery(query);
    //     console.log();
    // }
    const filteredRows = collegesData.filter((row) =>
        row.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const [arraymydata,setdata]=React.useState(JSON.parse(collegesData))
    console.log(arraymydata)
   
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
        {/* <SearchBar onSearch={handleSearch}/> */}
        <TextField
        value={searchQuery}
        onChange={(e)=>{
            console.log(e.target.value)
            setSearchQuery(e.target.value)
        }}
        />
      <DataGrid
        rows={
            []
        }
        columns={columns}
        // pageSize={20}
        // rowsPerPageOptions={[20, 50, 100]}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
          },
        }}  
      />
    </Box>
  );
}
