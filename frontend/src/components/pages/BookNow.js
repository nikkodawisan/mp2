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
      }, []); // on load page

return (

<div className='container'>
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

<Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
  <Form.Label>Service/s</Form.Label>
  <Form.Control required type="text" value={itemService} onChange={ (e)=>{ setItemService(e.target.value) }} placeholder="Service/s You'd Like To Book" />
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

  <Button variant="primary" onClick={save}>
    Save
  </Button>
</Form>
</div>
</div>
</div> 
</div>

)
}

export default Book2