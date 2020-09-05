import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {
    AppBar, 
    Toolbar, 
    ListItem,
    IconButton,
    ListItemText, 
    Avatar,
    Divider,
    List, 
    Typography, 
    Box
} from '@material-ui/core'
import {
    ArrowBack, 
    AssignmentInd,
    Home, 
    Apps, 
    ContactMail
} from '@material-ui/icons'

import avatar from '../avatar.png'

// CSS Styles

const useStyles = makeStyles({
    menuSliderContainer: {
      width: 250,
      background: "#511",
      height: "100%",
    }
});

const navbar = () => {
    const classes = useStyles();
    const sideList = (slider) => (
     <Box
          className={classes.menuSliderContainer}
          component="div">

    </Box>
    );
    return (
        <>
        <Box className={classes} component="div">
            <Avatar src={avatar} alt="Karthick Sundar"/>
        </Box>
        <Box component="nav">
            <AppBar position= "static" style={{background: "#222"}}>
                <Toolbar>
                    <IconButton>
                        <ArrowBack style= {{color: "tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color:"tan"}}>
                        Portfolio
                    </Typography>
                </Toolbar>
            </AppBar>  
        </Box>
        </>
    )
}

export default navbar
