
// "use client";
// import React, { useState } from 'react';
// import { Box, Grid, Typography, Link, Container } from '@mui/material';

// const timelineWrapperStyles = {
//   padding: 0,
//   width: '100%',
//   margin: '0 auto',
//   position: 'relative',
// };

// const timelineRowStyles = {
//   padding: 0,
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   margin: '50px 0',
//   background: '#fff',
//   textAlign: 'center',
//   fontSize: '14px',
//   borderRadius: '27px',
//   boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
// };

// const spanStyles = (isEven) => ({
//   height: '80px',
//   width: '80px',
//   display: { xs: 'none', md: 'flex' }, // Hide on small screens
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: '#fff',
//   border: '2px solid #007FFF',
//   color: '#007FFF',
//   fontWeight: 'bold',
//   borderRadius: '50%',
//   position: 'absolute',
//   left: isEven ? '-10px' : 'auto',
//   right: isEven ? 'auto' : '-10px',
//   zIndex: 9,
//   top: "1px",
// });

// const textDayStyles = {
//   display: { xs: 'block', md: 'none' }, // Show only on small screens
//   fontWeight: 'bold',
//   color: '#007FFF',
//   textAlign: 'left',
//   marginBottom: '10px',
// };

// const detailContainerStyles = {
//   padding: '20px',
//   position: 'relative',
// };

// const detailContainerAfterStyles = (isEven, isExpanded, isLast) => ({
//   content: '""',
//   display: isLast ? 'none' : 'block',
//   width: '2px',
//   position: 'absolute',
//   borderLeft: '2px dashed #007FFF',
//   zIndex: -1,
//   left: isEven ? 'calc(100% + -30px)' : '30px',
//   top: 'calc(50% + 10px)',
//   bottom: isExpanded ? 'calc(-50% - 20px)' : 'calc(-50% - 10px)',
// });

// function Itinerarydays({ itenariesdetails }) {
//   const [expanded, setExpanded] = useState(null);

//   const handleExpandClick = (index) => {
//     setExpanded(expanded === index ? null : index);
//   };

//   return (
//     <Box>
//  <Container maxWidth="xl">
//         <Grid container>
//           <Grid xs={12} sm={12} md={12}>
//             <Box sx={{ paddingTop: '20px' }}>
//               <Typography variant="h4" align="center" sx={{ marginBottom: '40px' }}>Itinerary</Typography>
//               <Box sx={timelineWrapperStyles}>
//                 {itenariesdetails && itenariesdetails.map((detail, index) => {
//                   const isEven = index % 2 === 0;
//                   const isExpanded = expanded === index;
//                   const isLast = index === itenariesdetails.length - 1;
//                   return (
//                     <Grid
//                       key={index}
//                       container
//                       sx={{
//                         ...timelineRowStyles,
//                         flexDirection: isEven ? 'row-reverse' : 'row',
//                       }}
//                       className={`timeline-row ${isEven ? 'even' : 'odd'}`}
//                     >
//                       <Grid item xs={2} sm={2}>
//                         <Typography sx={spanStyles(isEven)} variant="body1">{detail.day}</Typography>
//                       </Grid>
//                       <Grid item xs={12} sm={12} sx={detailContainerStyles}>
//                         <Box>
//                           <Typography  sx={textDayStyles} variant="body2">Day: {detail.day}</Typography>
//                           <Typography
//                             variant="body2"
                          
//                           >
//                             {detail.description}
//                           </Typography>
//                           <Link
//                             href="#"
//                             underline="hover"
//                             sx={{ color: '#FF6F00', fontWeight: 'bold' }}
//                             onClick={(e) => { e.preventDefault(); handleExpandClick(index); }}
//                           >
//                             View more
//                           </Link>
//                           {isExpanded && (
//                             <Typography variant="body2" sx={{ marginTop: '20px',textAlign:"justify" }}>
//                               {detail.details}
//                             </Typography>
//                           )}
//                         </Box>
//                         <Box sx={detailContainerAfterStyles(isEven, isExpanded, isLast)}></Box>
//                       </Grid>
//                     </Grid>
//                   );
//                 })}
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//         </Container>
//     </Box>
//   );
// }

// export default Itinerarydays;

"use client";
import React, { useState } from 'react';
import { Box, Grid, Typography, Link, Container } from '@mui/material';

const timelineWrapperStyles = {
  padding: 0,
  width: '100%',
  margin: '0 auto',
  position: 'relative',
};

const timelineRowStyles = {
  padding: 0,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '50px 0',
  background: '#fff',
  textAlign: 'center',
  fontSize: '14px',
  borderRadius: '27px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

const spanStyles = (isEven) => ({
  height: '80px',
  width: '80px',
  display: { xs: 'none', md: 'flex' }, // Hide on small screens
  alignItems: 'center',
  justifyContent: 'center',
  background: '#fff',
  border: '2px solid #007FFF',
  color: '#007FFF',
  fontWeight: 'bold',
  borderRadius: '50%',
  position: 'absolute',
  left: isEven ? '-10px' : 'auto',
  right: isEven ? 'auto' : '-10px',
  zIndex: 9,
  top: "1px",
});

const textDayStyles = {
  display: { xs: 'block', md: 'none' }, // Show only on small screens
  fontWeight: 'bold',
  color: '#007FFF',
  textAlign: 'left',
  marginBottom: '10px',
};

const detailContainerStyles = {
  padding: '20px',
  position: 'relative',
};

const detailContainerAfterStyles = (isEven, isExpanded, isLast) => ({
  content: '""',
  display: isLast ? 'none' : 'block',
  width: '2px',
  position: 'absolute',
  borderLeft: '2px dashed #007FFF',
  zIndex: -1,
  left: isEven ? 'calc(100% + -30px)' : '30px',
  top: 'calc(50% + 10px)',
  bottom: isExpanded ? 'calc(-50% - 20px)' : 'calc(-50% - 10px)',
});

function Itinerarydays({ itenariesdetails }) {
  const [expanded, setExpanded] = useState(null);

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box component="section">
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ paddingTop: '20px' }}>
              <Typography variant="h2" component="h1" align="left" sx={{ marginBottom: '40px'  , fontSize:"28px" , fontWeight:500,color: "#E3711A"}}>Itinerary</Typography>
              <Box sx={timelineWrapperStyles}>
                {itenariesdetails && itenariesdetails.map((detail, index) => {
                  const isEven = index % 2 === 0;
                  const isExpanded = expanded === index;
                  const isLast = index === itenariesdetails.length - 1;
                  return (
                    <Grid
                      key={index}
                      container
                      component="article"
                      sx={{
                        ...timelineRowStyles,
                        flexDirection: isEven ? 'row-reverse' : 'row',
                      }}
                      className={`timeline-row ${isEven ? 'even' : 'odd'}`}
                    >
                      <Grid item xs={2}>
                        <Typography sx={spanStyles(isEven)} component="span">{detail.day}</Typography>
                      </Grid>
                      <Grid item xs={12} sx={detailContainerStyles}>
                        <Box>
                          <Typography sx={textDayStyles} component="p">Day: {detail.day}</Typography>
                          <Typography variant="body2">
                            {detail.description}
                          </Typography>
                          <Link
                            href="#"
                            underline="hover"
                            sx={{ color: '#FF6F00', fontWeight: 'bold' }}
                            onClick={(e) => { e.preventDefault(); handleExpandClick(index); }}
                            aria-expanded={isExpanded}
                            aria-controls={`itinerary-details-${index}`}
                          >
                            View more 
                          </Link>
                          {isExpanded && (
                            <Typography
                              variant="body2"
                              sx={{ marginTop: '20px', textAlign: 'justify' }}
                              id={`itinerary-details-${index}`}
                            >
                              {detail.details}
                            </Typography>
                          )}
                        </Box>
                        <Box sx={detailContainerAfterStyles(isEven, isExpanded, isLast)}></Box>
                      </Grid>
                    </Grid>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Itinerarydays;
