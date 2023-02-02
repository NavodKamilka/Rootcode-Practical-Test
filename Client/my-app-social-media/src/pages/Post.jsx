import React, {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
//import { useParams } from 'react-router-dom';
import '../Style/Post.css';
import AvatarGroup from '../Components/AvatarGroup.js';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import axios from "axios";

function Post() {

    // let {id} = useParams();

    const [id, setId] = useState(1);
    
    const [post , setPost] = useState([]);
    const [comment , setComment] = useState([]);

    const [comment_des, setComment_des] = useState("");

    const handleChange = (event) => {
        setComment_des(event.target.value);
  
      };

    const addComment = () => {

        axios.post("http://localhost:4000/api/post/createComment", {
            comment_des : comment_des,
            post_id : id
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const fetchPost = async () => {
        try {
            await axios.get("http://localhost:4000/api/post/getPost")
                .then((response) => {
                    //console.log("Posts - ", response.data.data)
                    setPost(response.data.data)
                })
                .catch((err) => {
                    //console.log(err)
                });
        }catch (error) {
            //console.log('catched->' + error)
        }
    }

    const fetchComment = async () => {
        try {
            await axios.get("http://localhost:4000/api/post/" + id + "/getComment")
                .then((response) => {
                    console.log("Comments - ", response.data.data)
                    setComment(response.data.data)
                })
                .catch((err) => {
                    //console.log(err)
                });
        }catch (error) {
            //console.log('catched->' + error)
        }
    }

    useEffect(() => {

        fetchPost();

    },[]);


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

    // console.log(comment);

  return (
    <div>
        <Grid container marginTop={3} marginLeft={-20}>
            <Grid item xs={3}>
            <AvatarGroup/>
            </Grid>
        </Grid>
         
      <Grid container spacing={1}>
        <Grid item xs={10}>
           
        </Grid>
        <Grid style={{marginTop:50}} item xs="auto">
            <Button href='/newPost' variant="contained">Create New Post</Button>     
        </Grid>
    </Grid>
    <div className='App'>
            <div className='displayUsers'>
            {post.map((row) =>{
              return <div key={row.id}>
                        <h1>{row.post_title}</h1>
                        <h5>{row.post_description}</h5>
                        <Button  onClick={(e) => {setId(row.id);setOpen1(true);}}>Add Comments</Button> <Button variant="outlined" onClick={(e) => {setId(row.id);setOpen(true); fetchComment();}}>View Comments</Button>
                        {" "}
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                            <IconButton color="secondary" aria-label="add an alarm">
                                <ThumbUpIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="add to shopping cart">
                                <ThumbDownIcon />
                            </IconButton>
                        
                </div>
            })}
            </div>

            
    </div>
                        {/* view comment */}
                        <div className="dialog">
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                {".........................Comment Section............................."}
                                </DialogTitle>
                                <DialogContent>
                                {comment.map((row ,index) =>{
                                    return <div key={index}>
                                        <DialogContentText id="alert-dialog-description">
                                            *{row.comment_des}<br></br>
                                        </DialogContentText>
                                    </div>
                                })}
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose} autoFocus>
                                    Close
                                </Button>
                                </DialogActions>
                            </Dialog>
                        
                            <Dialog
                                open={open1}
                                onClose={handleClose1}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                {"............................Add your comment here..........................."}
                                </DialogTitle>
                                <DialogContent>
                                <TextField
                                    sx={{ marginLeft: "", width: "100%" }}
                                    id="outlined-basic"
                                    label="Comment"
                                    variant="outlined"
                                    value={comment_des}
                                    onChange={handleChange}
                                />{" "}
                                </DialogContent>
                                    <DialogActions>
                                    <Button onClick={addComment}>Publish Comment</Button>
                                    <Button onClick={handleClose1} autoFocus>
                                        Close
                                    </Button>
                                    </DialogActions>
                            </Dialog>


                            


                        </div>

                        
    </div>
  )
}

export default Post
