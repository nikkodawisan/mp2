import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import apiRequest from '../../dataFetch/apiRequest';


const Book2 = () =>{
//STATING THE VALUE (INPUT)//
const [itemFirstName, setItemFirstName] = useState('');
const [itemLastName, setItemLastName] = useState('');
const [itemEmail, setItemEmail] = useState('');
const [itemContact, setItemContact] = useState('');
const [itemService, setItemService] = useState('');
const [itemDate, setItemDate] = useState('');
const [itemTime, setItemTime] = useState('');
const [itemDescription, setItemDescription] = useState('');

//SAVE

const save = async () =>{

//CREATE/POST METHOD, SENDING THE VALUES TO THE BACKEND
  const objReq = {
    method: 'POST',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
      },
      body:"ItemFirstName="+itemFirstName+"&ItemLastName="+itemLastName+"&ItemEmail="+itemEmail+"&ItemContact="+itemContact+"&ItemService="+itemService+"&ItemDate="+itemDate+"&ItemTime="+itemTime+"&ItemDescription="+itemDescription,
      }

  const data = await apiRequest('http://localhost:5000/save-book', objReq);
    console.log(data);

        if(data.code === "success"){
          console.log('Ok save ');
          alert('Successfully Added');
        } else {
          console.log('Not save');
        }
        handleReadData();
    }

    const handleReadData = async () => {
        const response = await fetch('http://localhost:5000/get-book-data');
        const data = await response.json();
        console.log('check all todo', data);
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
                <h4>Book Form</h4>
            </div>
        </div>
    </div>
</section>

<div className='container py-4'>
<div className='card shadow'>
<div className='card-body'>
<div className='row'>     
<Form className='py-4 col-md-6'>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>First Name</Form.Label>
  <Form.Control required type="text" value={itemFirstName} onChange={ (e)=>{ setItemFirstName(e.target.value) }} placeholder="Enter First Name" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
  <Form.Label>Last Name</Form.Label>
  <Form.Control required type="text" value={itemLastName} onChange={ (e)=>{ setItemLastName(e.target.value) }} placeholder="Enter Last Name" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
  <Form.Label>Email</Form.Label>
  <Form.Control required type="email" value={itemEmail} onChange={ (e)=>{ setItemEmail(e.target.value) }} placeholder="Enter Email Address" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
  <Form.Label>Mobile Number</Form.Label>
  <Form.Control required type="phone" value={itemContact} onChange={ (e)=>{ setItemContact(e.target.value) }} placeholder="Enter Mobile Number (09...)" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
  <Form.Label>Preferred Appointment Date</Form.Label>
  <Form.Control required type="date" value={itemDate} onChange={ (e)=>{ setItemDate(e.target.value) }} placeholder="Enter Desired Date" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
  <Form.Label>Preferred Appointment Time</Form.Label>
  <Form.Control required type="time" value={itemTime} onChange={ (e)=>{ setItemTime(e.target.value) }} placeholder="Enter Preferred Time" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea8">
  <Form.Label>Other Important Details</Form.Label>
  <Form.Control as="textarea" value={itemDescription} onChange={ (e)=>{ setItemDescription(e.target.value) } } rows={3} />
</Form.Group>

{/*SUBMIT BUTTON*/}
<Button variant="primary" onClick={save}>
    Submit
  </Button>
</Form>

{/*RIGHT SIDE*/}
<Form className='py-4 col-md-6'>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
    <Form.Label>Choose Service/s You Want To Book:</Form.Label>
    <Form className='col-md-6'>

    <div value={itemService} onChange={ (e)=>{ setItemService(e.target.value) }}>

        <h6>Hair</h6>
          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Hair" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Haircut
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Blowdry/Ironing/Hair Styling" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Blowdry/Ironing/Hair Styling
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Hair Spa" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Hair Spa
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Hot Oil" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Hot Oil
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Henna Celophane" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Henna Celophane
          </label>
          </div>
          </div>



    <div value={itemService} onChange={ (e)=>{ setItemService(e.target.value) }}>

        <h6>Nails</h6>
          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Classic Manicure" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Classic Manicure
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Clasiic Pedicure" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Clasiic Pedicure
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Soft Gel Polish" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Soft Gel Polish
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Nail Art" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Nail Art
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Foot Spa" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Foot Spa
          </label>
          </div>
          </div>




    <div value={itemService} onChange={ (e)=>{ setItemService(e.target.value) }}>

        <h6>Eyebrow</h6>
          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Natural/Classic Eye" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Natural/Classic Eye
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Cats Eye" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Cats Eye
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Dolly Eye" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Dolly Eye
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Wispy Eye" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Wispy Eye
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Anime Eye" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Anime Eye
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Angel Eye" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Angel Eye
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Eyelash Lift" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Eyelash Lift
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Eyebrow Perm" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Eyebrow Perm
          </label>
          </div>
          </div>



    <div value={itemService} onChange={ (e)=>{ setItemService(e.target.value) }}>

        <h6>Massage</h6>
          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Swedish Massage" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Swedish Massage
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Aromatherapy" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Aromatherapy
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Body Scrub with Massage" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Body Scrub with Massage
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Ventosa Therapy" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Ventosa Therapy
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Hot Stone" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Hot Stone
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Ear Candling" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Ear Candling
          </label>
          </div>
          </div>
          
</Form>
</Form.Group>
</Form>
</div>
</div>
</div> 
</div>












</div>
)
}

export default Book2