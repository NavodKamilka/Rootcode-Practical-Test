import React from 'react'
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import '../Style/Post.css';

// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Post() {

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
      };

      const handleClose1 = () => {
        setOpen1(false);
      };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10}>
            
        </Grid>
        <Grid style={{marginTop:50}} item xs="auto">
            <Button href='/newPost' variant="contained">Create New Post</Button>     
        </Grid>
    </Grid>
    <div className='App'>
            <div className='displayUsers'>
            {/* {product.map((product) =>{ */}
                    <div key="">
                        <h1>Post Title : </h1>
                        <h1>Post Description : </h1>
                        <h3>dsjdsdshgdhdhsvdhsdhvhv</h3>
                        <Button onClick={handleClickOpen1}>Add Comments</Button> <Button variant="outlined" onClick={handleClickOpen}>View Comments</Button>
                        {/* view comment */}
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                {"Post Title Here"}
                                </DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    *Comment Here <br></br>
                                    *Comment Here 
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                {/* <Button onClick={handleClose}>Disagree</Button> */}
                                <Button onClick={handleClose} autoFocus>
                                    Close
                                </Button>
                                </DialogActions>
                            </Dialog>
                        {/* view comment */}

                        {/* Add comment */}
                            <Dialog
                                open={open1}
                                onClose={handleClose1}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                {"Dog post Add Comments"}
                                </DialogTitle>
                                <DialogContent>
                                {/* <DialogContentText id="alert-dialog-description">
                                    *Comment Here <br></br>
                                    *Comment Here 
                                </DialogContentText> */}
                                <TextField
                                    sx={{ marginLeft: "", width: "100%" }}
                                    // InputProps={{ sx: { height: 280 } }}
                                    id="outlined-basic"
                                    label="Comment"
                                    variant="outlined"
                                    // value={petName}
                                    // onChange={handleChange2}
                                />{" "}
                                </DialogContent>
                                <DialogActions>
                                <Button>Publish Comment</Button>
                                <Button onClick={handleClose1} autoFocus>
                                    Close
                                </Button>
                                </DialogActions>
                            </Dialog>




                        {/* Add comment */}
                        
                    </div>
            {/* })} */}
            </div>
        </div>
    </div>
  )
}

export default Post
