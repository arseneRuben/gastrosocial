import React, { useState } from 'react';




import InputComponent from '../../component/form/input-component';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);

  };
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const handleChange = (e) => {

  };
  return (

  <div>
  

     
  <form onSubmit={handleSubmit}>
    <div className='row justify-content-center '>
    <div className="col-md-6">
                <div className="card d-flex p-2">
                     <div className="card-header text-center"> { isSignup ? <>Sign Up </>: <>Sign In </> }</div>
                     <div className="card-body">

                   { isSignup && (
                      <>
                        <InputComponent name="fullName"  labelClass="col-md-4 col-form-label text-md-right"  label="Nom complet" handleChange={handleChange} half />
                      </>
                  )}
                      <InputComponent name="email" labelClass="col-md-4 col-form-label text-md-right" label="Email" handleChange={handleChange} type="email" half />
                      <InputComponent name="password" labelClass="col-md-4 col-form-label text-md-right" label="Mot depasse" handleChange={handleChange}  half/>
                     { isSignup && <InputComponent name="confirmPassword"  labelClass="col-md-4 col-form-label text-md-right"  label="Mot de passe de confirmation" handleChange={handleChange} type="password" half /> }
                         

                            <div className="col-md-6 offset-md-4">
                                <button type="submit" className="btn btn-primary" onClick={switchMode}>
                                     { isSignup ? <>Deja inscrit? SignIn  </>: <> Pas encore inscrit? Sign Up </> }
                                </button>
                               
                            </div>
                    </div>
                </div>
    
               </div>
    </div>

    
  </form>
  </div>
  )
};
export default LoginPage;