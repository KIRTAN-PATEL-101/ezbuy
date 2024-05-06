import { Grid } from '@mui/material';
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';

const RegisterForm = () => {

   const Navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();

      const data = new FormData(e.currentTarget);

      const userData = {
         firstName: data.get('firstName'),
         lastName: data.get('lastName'),
         email: data.get('email'),
         password: data.get('password')
      }

      console.log("userdata ",userData);

   }

  return (
    <div>
      <form onSubmit={handleSubmit}>
         <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
               <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
               />
            </Grid>
            <Grid item xs={12} sm={6}>
               <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="family-name"
               />
         </Grid>
         <Grid item xs={12}>
            <TextField
               required
               id="email"
               name="email"
               label="Email"
               fullWidth
               autoComplete="email"
            />
         </Grid>
         <Grid item xs={12}>
            <TextField
               required
               id="password"
               name="password"
               label="Password"
               type="password"
               fullWidth
               autoComplete="new-password"
            />
         </Grid>
         <Grid item xs={12}>
            <Button 
            classname='bg-[#9155FD] w-full'
            type="submit"
            variant="contained"
            size="large"
            sx={{Padding:".8rem 0", bgcolor:"#9155FD", color:"white"}}
            >
               Register
            </Button>
         </Grid>
      </Grid>
      </form>
      <div className='flex justify-center flex-col items-center'>
         <div className='py-3 flex items-center'>
            <p>Already have an account?</p>
            <Button onClick={() => Navigate('/login')} className='ml-5' size='small'>Login</Button>
         </div>
      </div>
    </div>
  )
}

export default RegisterForm
