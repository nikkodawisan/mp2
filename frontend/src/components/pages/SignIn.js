import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiRequest from '../../dataFetch/apiRequest';


import React from 'react';
import Icon1 from '../images/icon1.png';
import Icon2 from '../images/icon2.png';
import Image1 from '../images/sample7.jpg';

const SignIn = ()=> {


    const navigate = useNavigate(); 
    const backendlink = "http://localhost:5000/login-validation";
   
     const [usern, setUsername] = useState('');
     const [passw, setPassword] = useState('');
   
     const [bilang, setBilang] = useState(0);
     const [errMsg, setErrMsg] = useState('');
     
     const test = ()=> {
       setBilang( (bilang) => bilang + 1 )
     }
     
     useEffect(()=>{ 
       console.log('Im monitoring login ')
       setTimeout(test, 1000);
     }, []);
   
     const handleLoginSubmit = async (e)=>{
       e.preventDefault();
     
       const objReq = {
           method: 'POST',
           headers: {
               'Content-Type':'application/x-www-form-urlencoded',
           },
           body:"username="+usern+"&password="+passw,
       }
   
      const data = await apiRequest(backendlink, objReq);
     
        if(data.code === "success"){
           localStorage.setItem('loginUser', JSON.stringify(data.loginUser.username));
           navigate('/home');
        } else {
           setErrMsg(data.msg)
        }
     } 
   
    const fontStyleColor = {
       backgroundColor: 'white',
       color: 'red'
    } 

    return (
<div>
<section className='py-4 bg-info'>

    <div className='container'>
        <div className='row'>
            <div className='col-md-4 my-auto'>
                <h4>Sign In</h4>

            </div>
        </div>
    </div>
</section>

<section className='section py-4'>
    <div className='container'>
        <div className='card shadow'>
            <div className='card-body'>
                <div className='row'>

                        {/*Left Side*/}

                        <h3> This is the useffect with setTimeout {bilang}  </h3>
                        <h4 style={fontStyleColor}> {errMsg}  </h4>

                        <div className='col-md-6' onSubmit={handleLoginSubmit}>
                            <div className='form-group' controlId='controlInput1'>
                                <label for="">Email</label>
                                <input type="text" className="form-control" placeholder="Enter Full Name" onChange={ (e)=>setUsername(e.target.value) } />
                            </div>

                            <div className='form-group' controlId='controlInput2'>
                                <label for="">Password</label>
                                <input type="password" className="form-control" placeholder="Enter Phone Number" onChange={ (e)=>setPassword(e.target.value) } />
                            </div>

                            <div className='form-group py-3'>
                                <button type="submit" className='btn btn-primary shadow w-100' variant='primary'>Sign In</button>
                            </div>

                            <div className='form-group py-3'>
                                <p>Don't have an account?</p>
                                <button type="button" className='btn btn-primary shadow w-100'>Create New Account</button>
                            </div>
                        </div>

                        {/*Right Side*/}
                        <div className='col-md-6'>
                        <img src={Icon1} className='w-50 h-60' alt="Icon1" />
                        <img src={Icon2} className='w-50 h-60' alt="Icon2" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
</section>

{/*Bottom Image*/}
<div>
<img src={Image1} className='w-100 border-bottom opacity-75 pt-5' alt="Service1" />
</div>

</div>
    );
}

export default SignIn;