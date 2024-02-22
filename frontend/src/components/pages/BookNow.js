import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import apiRequest from '../../dataFetch/apiRequest';


//BOOTSTRAP//
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Todo = () => {

//STATING THE VALUE (INPUT)//
  const [itemName, setItemName] = useState('');
  const [itemContact, setItemContact] = useState('');
  const [itemEmail, setItemEmail] = useState('');
  const [itemDate, setItemDate] = useState('');
  const [itemTime, setItemTime] = useState('');
  const [itemService, setItemService] = useState('');
  const [itemDescription, setItemDescription] = useState('');


  const [show, setShow] = useState(false);
  const [allTodo, setAllTodo] = useState([]);

  
  const [butMode, setButMode] = useState('');
  const [butName, setButname] = useState('');
  const [itemId, setSetItemId] = useState('');
  
  
  
  const handleShow = () => { 
  setButMode('create')
  setButname('Save')  
  setShow(true);
  setItemName('');
  setItemContact('');
  setItemEmail('');
  setItemDate('');
  setItemTime('');
  setItemService('');
  setItemDescription('');
  }


  const handleClose = () => setShow(false);
  //------------------------------------------------------------------------
  //FORM REQUIREMENT/CONDITIONS
  const handleSave = async () => {
    if ( butMode === 'create' ) {
      if (itemName === ''){
        alert('Full Name is empty, this is required.');
        return;
      }
      if (itemContact === ''){
        alert('Contact is empty, this is required.')
        return;
      }
      if (itemContact === ''){
        alert('Contact is empty, this is required.')
        return;
      }
      if (itemContact !== 11){
        alert('Mobile number must be 11 digits.')
        return;
      }
      if (itemEmail === ''){
        alert('Email is empty, this is required.')
        return;
      }
      if (itemDate === ''){
        alert('Date is empty, this is required.')
        return;
      }
      if (itemTime === ''){
        alert('Time is empty, this is required.')
        return;
      }
      if (itemService === ''){
        alert('Contact is empty, this is required.')
        return;
      }
    //------------------------------------------------------------------------

  const objReq = {
    method: 'POST',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
      },
      body:"ItemName="+itemName+"&ItemContact="+itemContact+"&ItemEmail="+itemEmail+"&ItemDate="+itemDate+"&ItemTime="+itemTime+"&ItemService="+itemService+"&ItemDescription="+itemDescription,
      }

  const data = await apiRequest('http://localhost:5000/save-todo', objReq);
    console.log(data);

        if(data.code === "success"){
          console.log('Successfully Saved!');
        } else {
          console.log('Failed to Save!');
        }
        handleReadData();
        setShow(false);

    } else {
      //update process
      const objReq = {
        method: 'PUT',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded',
        },
        body:"ItemName="+itemName+"&ItemContact="+itemContact+"&ItemEmail="+itemEmail+"&ItemDate="+itemDate+"&ItemTime="+itemTime+"&ItemService="+itemService+"&ItemDescription="+itemDescription,
      }

      const data = await apiRequest('http://localhost:5000/update-todo/'+itemId, objReq);
      console.log(data);

      if(data.code === "success"){
        console.log('Ok save ');
      } else {
        console.log('Not save');
      }
      handleReadData();
      setShow(false);
      
    } 

  }

  const handleReadData = async () => {
    const response = await fetch('http://localhost:5000/get-todo-data');
    const data = await response.json();
    console.log('check all todo', data);
    setAllTodo(data);
  }

  useEffect(()=>{
    handleReadData();
  }, []) // on load page

  //delete of todo
  const deleteItem = async (id)=> {

    let text = "Are you sure to delete todo id number:" + id + "?";
    if (window.confirm(text) === true) {
  
      const objReq = { method: 'DELETE'}
      await apiRequest('http://localhost:5000/delete-todo/'+id, objReq);
      handleReadData();
    } 

   
  }

  const updateItem = async (id)=> {
    setButMode('update')
    setButname('Update')
    setSetItemId(id); 
    const response = await fetch('http://localhost:5000/get-todo/'+id);
    const data = await response.json();

    console.log('check one todo', data);
    setItemName(data.itemName);
    setItemContact(data.itemContact);
    setItemEmail(data.itemEmail);
    setItemDate(data.itemDate);
    setItemTime(data.itemTime);
    setItemService(data.itemService);
    setItemDescription(data.itemDescription);
    setShow(true);
  }

    return (
        <div className='Todo'>
        
        <Button variant="info" onClick={handleShow}>
        Book Now!
        </Button>

        <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Contact Number</th>
                  <th>Email</th>
                  <th>Date of Reservation</th>
                  <th>Time</th>
                  <th>Service Taken</th>
                  <th>Message</th>
                  <th> 
                   Action
                  </th>
                </tr>
              </thead>
              <tbody>

         
                {  allTodo.map(

                  (item) => (
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.itemName}</td>
                    <td>{item.itemContact}</td>
                    <td>{item.itemEmail}</td>
                    <td>{item.itemDate}</td>
                    <td>{item.itemTime}</td>
                    <td>{item.itemService}</td>
                    <td>{item.itemDescription}</td>
                    
                    <td>  
                      <Button variant="danger" onClick={ ()=> deleteItem(item.id) }>Delete</Button> {'  '}
                      <Button variant="success" onClick={ ()=> updateItem(item.id) }>Update</Button>
                      </td>
                  </tr>
                  ) 

                ) }
                
              </tbody>
            </Table>

   

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Form</Modal.Title>
        </Modal.Header>
        <Modal.Body> 

        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name</Form.Label>
          <Form.Control required type="text" value={itemName} onChange={ (e)=>{ setItemName(e.target.value) }} placeholder="Enter Full Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control required type="phone" value={itemContact} onChange={ (e)=>{ setItemContact(e.target.value) }} placeholder="Enter Mobile Number (09...)" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" value={itemEmail} onChange={ (e)=>{ setItemEmail(e.target.value) }} placeholder="Enter Email Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Date</Form.Label>
          <Form.Control required type="date" value={itemDate} onChange={ (e)=>{ setItemDate(e.target.value) }} placeholder="Enter Desired Date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Time</Form.Label>
          <Form.Control required type="time" value={itemTime} onChange={ (e)=>{ setItemTime(e.target.value) }} placeholder="Enter Time" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
          <Form.Label>Service/s</Form.Label>
          <Form.Control required type="text" value={itemService} onChange={ (e)=>{ setItemService(e.target.value) }} placeholder="Enter Service/s" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label> Description</Form.Label>
          <Form.Control as="textarea" value={itemDescription} onChange={ (e)=>{ setItemDescription(e.target.value) } } rows={3} />
        </Form.Group>
        </Form>
        
        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" onClick={handleSave}>
            {butName}
          </Button>
        </Modal.Footer>
      </Modal>

        </div>

    )

}


export default Todo