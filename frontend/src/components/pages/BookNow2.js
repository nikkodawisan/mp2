import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import apiRequest from '../../dataFetch/apiRequest';


const Book2 = () =>{
//STATING THE VALUE (INPUT)//
const [itemName3, setItemName3] = useState('');
const [itemContact3, setItemContact3] = useState('');
const [itemEmail3, setItemEmail3] = useState('');
const [itemDescription3, setItemDescription3] = useState('');

//SAVE

const save = async () =>{

//CREATE/POST METHOD, SENDING THE VALUES TO THE BACKEND
  const objReq3 = {
    method: 'POST',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
      },
      body:"ItemName3="+itemName3+"&ItemContact3="+itemContact3+"&ItemEmail3="+itemEmail3+"&ItemDescription3="+itemDescription3,
      }

  const data = await apiRequest('http://localhost:5000/save-book2', objReq3);
    console.log(data);

        if(data.code === "success"){
          console.log('Ok save ');
          alert('Successfully Added');
        } else {
          console.log('Not save');
        }
        handleReadData3();
    }

    const handleReadData3 = async () => {
        const response = await fetch('http://localhost:5000/get-book2-data');
        const data = await response.json();
        console.log('check all todo', data);
      }
    
      useEffect(()=>{
        handleReadData3();
      }, []); // on load page

return (

<div className='container'>
<div className='card shadow'>
<div className='card-body'>
<div className='row'>     
<Form className='py-4 col-md-6'>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Full Name</Form.Label>
  <Form.Control required type="text" value={itemName3} onChange={ (e)=>{ setItemName3(e.target.value) }} placeholder="Enter Full Name" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
  <Form.Label>Mobile Number</Form.Label>
  <Form.Control required type="phone" value={itemContact3} onChange={ (e)=>{ setItemContact3(e.target.value) }} placeholder="Enter Mobile Number (09...)" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
  <Form.Label>Email</Form.Label>
  <Form.Control required type="email" value={itemEmail3} onChange={ (e)=>{ setItemEmail3(e.target.value) }} placeholder="Enter Email Address" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  <Form.Label> Description</Form.Label>
  <Form.Control as="textarea" value={itemDescription3} onChange={ (e)=>{ setItemDescription3(e.target.value) } } rows={3} />
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