import React from 'react'
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';

function NewPost() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={1}>
            
        </Grid>
        
        <Grid style={{marginTop:50}} item xs="auto">
            <Button href='/' variant="contained">Go Back</Button>     
        </Grid>
        <Grid item xs={1}>
            
        </Grid>
    </Grid>
    <TextField
                sx={{ marginLeft: "15%", width: "70%" ,top:60}}
                id="outlined-basic"
                label="Post Title"
                variant="outlined"
                // value={petOwnerName}
                // onChange={handleChange1}
              />{" "}
              <br />
              <br />
              <br />  
              <TextField
                sx={{ marginLeft: "15%", width: "70%",top:60  }}
                InputProps={{ sx: { height: 280 } }}
                id="outlined-basic"
                label="Post Description"
                variant="outlined"
                // value={petName}
                // onChange={handleChange2}
              />{" "}
    <Grid container spacing={2}>
        <Grid item xs={9}>
            
        </Grid>
        
        <Grid style={{marginTop:130}} item xs="auto">
            <Button href='#' variant="contained">Publish Post</Button>     
        </Grid>
    </Grid>

    </div>
  )
}

export default NewPost
