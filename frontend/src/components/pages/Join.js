import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import apiRequest from '../../dataFetch/apiRequest';
import T1 from '../images/icon1.png';


const Join = () =>{
//STATING THE VALUE (INPUT)//
const [joinFirstName, setJoinFirstName] = useState('');
const [joinLastName, setJoinLastName] = useState('');
const [joinEmail, setJoinEmail] = useState('');
const [joinContact, setJoinContact] = useState('');
const [joinAddress, setJoinAddress] = useState('');
const [joinFileInput, setJoinFileInput] = useState('');
const [joinDescription, setJoinDescription] = useState('');

//SAVE
const save = async () =>{

  if (joinFirstName === ''){
    alert('First Name Is Empty, This Is Required.');
    return;
  }
  if (joinLastName === ''){
    alert('Last Name Is Empty, This Is Required.');
    return;
  }
  if (joinEmail === ''){
    alert('Email Is Empty, This Is Required.')
    return;
  }
  if (joinContact === ''){
    alert('Mobile Number Is Empty, This Is Required.')
    return;
  }



//CREATE/POST METHOD, SENDING THE VALUES TO THE BACKEND
  const objReq = {
    method: 'POST',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
      },
      body:"JoinFirstName="+joinFirstName+"&JoinLastName="+joinLastName+"&JoinEmail="+joinEmail+"&JoinContact="+joinContact+"&JoinAddress="+joinAddress+"&JoinFileInput="+joinFileInput+"&JoinDescription="+joinDescription,
      }

  const data = await apiRequest('http://localhost:5000/save-join', objReq);
    console.log(data);

        if(data.code === "success"){
          console.log('Saved');
          alert('Successfully Sent');
        } 
        else 
        {
          console.log('Failed To Send');
        }
        handleReadData();
    }

    const handleReadData = async () => {
        const response = await fetch('http://localhost:5000/get-join-data');
        const data = await response.json();
        console.log('check all join', data);
      }
    
      useEffect(()=>{
        handleReadData();
      }, []);

return (

<div>
  
{/*LEFT SIDE*/}
<section className='py-4 bg-info'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4 my-auto'>
                <h4>Join Us!</h4>
            </div>
        </div>
    </div>
</section>

<div className='container py-4'>
<div className='card shadow'>
<div className='card-body'>
<div className='row'>  




<h1>JOIN OUR TEAM</h1>
        <p>We are always on the look out for talented and passionate individuals to join our team.</p>

        <h1>WHY WORK HERE</h1>
        <p>You deserve to work somewhere awesome! Somewhere that doesn’t feel like work, and you enjoy going in every day. Somewhere you’re appreciated and respected, with freedom and flexibility and unlimited growth potential.</p>


        <div className="accordion accordion-flush" id="accordionFlushExample">
            
                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hairstylist" aria-expanded="false" aria-controls="hairstylist">
                            Hairstylist
                            </button>
                            </h2>
                            <div id="hairstylist" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Seeking enthusiastic and professional hairstylists with a minimum of 2 years of experience in hair colouring and cutting techniques. Ideally, the candidate will have a portfolio of loyal clients, however, we are also open to senior stylists with the drive to build their clientele while with us.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#apprentice" aria-expanded="false" aria-controls="apprentice">
                            Apprentice
                            </button>
                            </h2>
                            <div id="apprentice" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Seeking a career-minded creative apprentice stylist with a passion for the beauty industry. The ideal candidate is eager to learn and apply their knowledge and is looking to grow as part of a team while being driven by their individuality.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#lash" aria-expanded="false" aria-controls="lash">
                            Lash Technician
                            </button>
                            </h2>
                            <div id="lash" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Seeking upbeat, and positive lash artists who are customer-focused, and passionate, Classic lash trained (volume trained is a plus) with a minimum of 2 years’ experience.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mass" aria-expanded="false" aria-controls="mass">
                            Masseur/Masseus
                            </button>
                            </h2>
                            <div id="mass" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Seeking upbeat, and positive Masseur/Masseus who are customer-focused, and passionate with a minimum of 2 years’ experience.</div>
                            </div>
                            </div>

                            

        </div>
        
        <p className='pt-4'>If you love being a professional stylist and looking for an environment to enjoy your time at work, then we love to hear from you, let’s meet!</p>






<Form className='py-4 col-md-6'>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>First Name</Form.Label>
  <Form.Control required type="text" value={joinFirstName} onChange={ (e)=>{ setJoinFirstName(e.target.value) }} placeholder="Enter First Name" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
  <Form.Label>Last Name</Form.Label>
  <Form.Control required type="text" value={joinLastName} onChange={ (e)=>{ setJoinLastName(e.target.value) }} placeholder="Enter Last Name" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
  <Form.Label>Email</Form.Label>
  <Form.Control required type="email" value={joinEmail} onChange={ (e)=>{ setJoinEmail(e.target.value) }} placeholder="Enter Email Address" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
  <Form.Label>Mobile Number</Form.Label>
  <Form.Control required type="phone" value={joinContact} onChange={ (e)=>{ setJoinContact(e.target.value) }} placeholder="Enter Mobile Number (09...)" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput65">
  <Form.Label>Address</Form.Label>
  <Form.Control required type="text" value={joinAddress} onChange={ (e)=>{ setJoinAddress(e.target.value) }} placeholder="Enter Your Address" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
  <Form.Label>Choose File</Form.Label>
  <Form.Control required type="file" value={joinFileInput} enctype="multipart/form-data" onChange={ (e)=>{ setJoinFileInput(e.target.value) }} placeholder="Upload Your Resume/CV" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea7">
  <Form.Label>Additional Information</Form.Label>
  <Form.Control as="textarea" value={joinDescription} onChange={ (e)=>{ setJoinDescription(e.target.value) } } rows={3} />
</Form.Group>

{/*SUBMIT BUTTON*/}
<Button variant="primary" onClick={save}>
    Submit
  </Button>
</Form>

<div className='py-4 col-md-6'>
<img src={T1} className='w-100 opacity-75' alt="Service1" />
</div>

</div>
</div>
</div> 
</div>

</div>
)
}

export default Join