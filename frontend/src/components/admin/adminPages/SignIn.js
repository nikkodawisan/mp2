import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import apiRequest from '../../../dataFetch/apiRequest';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import React from 'react';
import Icon1 from '../../images/icon1.png';
import Icon2 from '../../images/icon2.png';
import Image1 from '../../images/sample7.jpg';

const Login = ()=> {


    const navigate = useNavigate(); 
    const backendlink = "http://localhost:5000/login-validation";
   
     const [usern, setUsername] = useState('');
     const [passw, setPassword] = useState('');
   
     const [errMsg, setErrMsg] = useState('');
     
     
     useEffect(()=>
     { 
       console.log('Monitoring Login')
     }, []);
   
     const handleLoginFormSubmit = async (e)=>{
       e.preventDefault();
     
       const objReq = {
           method: 'POST',
           headers: 
           {
            'Content-Type':'application/x-www-form-urlencoded',
           },
           body:"username="+usern+"&password="+passw,
       }
   
      const data = await apiRequest(backendlink, objReq);
      console.log(data);
     
        if(data.code === "success"){
           let userLoginId = data.loginId; 
           localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
           console.log("access token", data.accessToken);
           localStorage.setItem('loginUser', JSON.stringify(data.loginUser.username));
           navigate('/admin');
        } else {
           setErrMsg(data.msg)
        }
     } 
   
    const fontStyleColor = 
    {
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

<div className="Login col-md-6">
<Container>
    <Row>
    <Col>
        <Form onSubmit={handleLoginFormSubmit}>
      
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Enter Username</Form.Label>
            <Form.Control type="text" placeholder="" onChange={ (e)=>setUsername(e.target.value) }   />
        </Form.Group>
            
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control type="password" placeholder="" onChange={ (e)=>setPassword(e.target.value) }   />
        </Form.Group>

            <div className='form-group py-3'>
            <Button className='btn btn-primary shadow w-100' variant="primary" type='submit'>Login</Button>
            </div>

            {/*ERROR MESSAGE*/}
            <h6 style={fontStyleColor}> {errMsg}  </h6>
         </Form> 
    </Col>
    </Row>
</Container>

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

export default Login;