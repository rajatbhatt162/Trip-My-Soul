// components/About.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Blogs = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        padding: '20px',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Blogs
      </Typography>
      <Typography variant="h6" component="h2" color="textSecondary">
        Blogs data coming soon
      </Typography>
    </Box>
  );
};

export default Blogs;
