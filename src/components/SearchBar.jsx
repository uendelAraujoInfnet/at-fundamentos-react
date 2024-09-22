import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <Box sx={{ mb: 1 }}>
      <TextField
        fullWidth
        label="Buscar hotel"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
