import { Grid } from '@mui/material';
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

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
               Login
            </Button>
         </Grid>
      </Grid>
      </form>

      <div className='flex justify-center flex-col items-center'>
         <div className='py-3 flex items-center'>
            <p>Don't have an account?</p>
            <Button onClick={() => Navigate('/register')} className='ml-5' size='small'>Register</Button>
         </div>
      </div>

    </div>
  )
}

export default LoginForm
