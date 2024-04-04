import React from 'react'
import { Grid, Typography, Button } from '@mui/material'

const Footer = () => {
  return (
    <div>
      <Grid className='bg-gray-900 text-white text-center mt-10' continer sx={{bgcolor:"black",color:"white",py:3}}>
         <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'> Company</Typography>
            <div><Button className='pb-5' variant='h6'> {" "}Blog </Button>
            </div>
            <div><Button className='pb-5' variant='h6'> Press </Button></div>
            <div><Button className='pb-5' variant='h6'> Jobs </Button></div>
            <div><Button className='pb-5' variant='h6'> Partners </Button></div>
         </Grid>
      </Grid>
    </div>
  )
}

export default Footer
