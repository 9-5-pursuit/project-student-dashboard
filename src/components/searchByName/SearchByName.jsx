import { useState } from "react";
import "./SearchByName.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

export default function SearchByName({ searchStudent }) {
  const [searchMode, setSearchMode] = useState("name");

  function handleSelectChange(e) {
    setSearchMode(e.target.value);
  }

  return (
    <div className="search-by-name">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="select-label">Search By</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={searchMode}
            label="Search By"
            onChange={handleSelectChange}
            size="small"
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="email">Email</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        component="form"
        sx={{
          minWidth: 120,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Search 🔍 "
          variant="outlined"
          onChange={(e) => searchStudent(e, searchMode)}
          size="small"
        />
      </Box>
    </div>
  );
}
