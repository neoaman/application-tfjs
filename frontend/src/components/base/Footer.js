import React from 'react'
import { Grid, Typography } from "@material-ui/core"

const Footer = () => {
    return (
        <Grid container spacing={3}>
            <Typography style={{color:"lightgray"}}>
                This site is designed for CRUD operations on building-blocks and system components.
                This site don't allow to create new document in the existing database.
            </Typography>
            
        </Grid>
        
    )
}

export default Footer

