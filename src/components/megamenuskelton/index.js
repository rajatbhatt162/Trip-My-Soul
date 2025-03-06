import { Box, Container, Grid, Skeleton } from "@mui/material"

 const MegaMenuSkelton = () => {
    return(
        <Box
        sx={{
          bgcolor: "white",
          mt: "65px",
          p: 10,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Box>
                 <Skeleton
                  sx={{ bgcolor: "#1976d2c2" }}
                  variant="rectangular"
                  width={'100%'}
                  height={200}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box>
                 <Skeleton />
                 <Skeleton />
                 <Skeleton />
                 <Skeleton />
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box>
                 <Skeleton />
                 <Skeleton />
                 <Skeleton />
                 <Skeleton />
              </Box>
            </Grid>     
            <Grid
              item
              xs={12}
              sm={3}
              // sx={{ backgroundColor: "#1976d2c2" }}
            >
                <Skeleton
                  sx={{ bgcolor: "#1976d2c2" }}
                  variant="rectangular"
                  width={'100%'}
                  height={200}
                />
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
}

export default MegaMenuSkelton