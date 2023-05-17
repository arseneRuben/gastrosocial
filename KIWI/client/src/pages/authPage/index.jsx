import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputComponent from '../../component/form/input-component';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../constants/actionTypes';
import { GoogleLogin,useGoogleLogin } from '@react-oauth/google';
import GoogleIcon from '@mui/icons-material/Google';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Icon from './icon'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from 'reactstrap';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [form, setForm] = useState(initialState);
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };


  const googleFailure = () => console.log('Google Sign In was unsuccessful. Try again later');
  const googleSuccess = useGoogleLogin({
      onSuccess: codeResponse => {
      const token = codeResponse?.access_token;
      fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`)
      .then(response => {
          return response.json()
      })
      .then(profile => {
          try {
            dispatch({ type: AUTH, data: { profile, token } });
            navigate('/');
          } catch (error) {
            console.log(error);
          }
      }).catch(error=>{
          console.log(error)
      })
   }


  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (


      <form onSubmit={handleSubmit}>
        <div className='row justify-content-center '>
        <div className="col-md-6">
          <div className="card d-flex p-2">
            <div className="card-header text-center"> { isSignup ? <AppRegistrationIcon/>: <LockIcon/> }</div>
                <div className="card-body">
                          { isSignup && (
                            <InputComponent name="fullName"  labelClass="col-md-4 col-form-label text-md-right"  label="Nom complet" handleChange={handleChange} half /> 
                          )}
                          <InputComponent name="email" labelClass="col-md-4 col-form-label text-md-right" label="Email" handleChange={handleChange} type="email" half />
                          <InputComponent name="password" labelClass="col-md-4 col-form-label text-md-right" label="Mot depasse" handleChange={handleChange}  half/>
                          { isSignup && <InputComponent name="confirmPassword"  labelClass="col-md-4 col-form-label text-md-right"  label="Mot de passe de confirmation" handleChange={handleChange} type="password" half /> }
                                <div className="col-md-6 offset-md-4">
                                  <Button type="submit"  className='btn btn-primary btn-large' fullWidth variant="contained" color="primary" >
                                    { isSignup ? 'Sign Up' : 'Sign In' }
                                  </Button>
                                  OR
                                  <button className='btn btn-info' onClick={() => googleSuccess()}>
                                    <GoogleIcon/>
                                  </button>
          
                                  <div className='container d-flex p-2'> 
                                      <Button onClick={switchMode}>
                                        { isSignup ?  <LockIcon/>: <AppRegistrationIcon/> }
                                      </Button>
                                  </div>
                              </div>
                        </div>
                    </div>
              </div>
            </div>
      </form>

  )
};
export default LoginPage;