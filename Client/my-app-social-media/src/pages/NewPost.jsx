import React, { useState} from 'react'
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import axios from "axios";

function NewPost() {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleChange1 = (event) => {
      setTitle(event.target.value);

    };
    const handleChange2 = (event) => {
      setDescription(event.target.value);

    };

    const addPost = () => {

        axios.post("http://localhost:4000/api/post/createPost", {
            post_title : title,
            post_description : description
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            //console.log(error);
        });
    }


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
                required
                id="outlined-basic"
                label="Post Title"
                variant="outlined"
                value={title}
                onChange={handleChange1}
              />{" "}
              <br />
              <br />
              <br />  
              <TextField
                sx={{ marginLeft: "15%", width: "70%",top:60  }}
                InputProps={{ sx: { height: 280 } }}
                required
                id="outlined-basic"
                label="Post Description"
                variant="outlined"
                value={description}
                onChange={handleChange2}
              />{" "}
    <Grid container spacing={2}>
        <Grid item xs={9}>
            
        </Grid>
        
        <Grid style={{marginTop:130}} item xs="auto">
            <Button href='#' onClick={addPost} variant="contained">Publish Post</Button>     
        </Grid>
    </Grid>

    </div>
  )
}

export default NewPost
