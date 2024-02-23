import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import apiRequest from '../../dataFetch/apiRequest';

//BOOTSTRAP//
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Todo = () => {

//STATING THE VALUE (INPUT)//
  const [itemName2, setItemName2] = useState('');
  const [itemContact2, setItemContact2] = useState('');
  const [itemEmail2, setItemEmail2] = useState('');
  const [itemDescription2, setItemDescription2] = useState('');

//MODAL SHOW
  const [show2, setShow2] = useState(false);
  const [allTodo2, setAllTodo2] = useState([]);

//NAME OF THE MODE INSIDE THE MODAL (ADD/UPDATE)  
  const [butMode2, setButMode2] = useState('');

//NAME OF THE BUTTON INSIDE THE MODAL (ADD/UPDATE)
  const [butName2, setButname2] = useState('');

//DATA'S ID
  const [itemId2, setSetItemId2] = useState('');
  
  
//CREATE MODAL FORM 
  const handleShow2 = () => { 
  setButMode2('create')
  setButname2('Save')  
  setShow2(true);
  setItemName2('');
  setItemContact2('');
  setItemEmail2('');
  setItemDescription2('');
  }

//CLOSING THE MODAL
  const handleClose2 = () => setShow2(false);

  //------------------------------------------------------------------------
  //------------------------------------------------------------------------
  //FORM REQUIREMENT
  const handleSave2 = async () => {
    if ( butMode2 === 'create' ) {
      if (itemName2 === ''){
        alert('Full Name is empty, this is required.');
        return;
      }
      if (itemContact2 === ''){
        alert('Contact is empty, this is required.')
        return;
      }
      if (itemEmail2 === ''){
        alert('Email is empty, this is required.')
        return;
      }
      if (itemDescription2 === ''){
        alert('Message is empty, please tell us your concern.')
        return;
      }
    
    //------------------------------------------------------------------------
    //------------------------------------------------------------------------
    //CREATE/POST METHOD, SENDING THE VALUES TO THE BACKEND
  const objReq2 = {
    method: 'POST',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
      },
      body:"ItemName2="+itemName2+"&ItemContact2="+itemContact2+"&ItemEmail2="+itemEmail2+"&ItemDescription2="+itemDescription2,
      }

  const data = await apiRequest('http://localhost:5000/save-contact', objReq2);
    console.log(data);

        if(data.code === "success"){
          console.log('Ok save ');
        } else {
          console.log('Not save');
        }
        handleReadData2();
        setShow2(false);

    } else {
    
    //------------------------------------------------------------------------
    //------------------------------------------------------------------------
    //UPDATE PROCESS
      const objReq2 = {
        method: 'PUT',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded',
        },
        body:"ItemName2="+itemName2+"&ItemContact2="+itemContact2+"&ItemEmail2="+itemEmail2+"&ItemDescription2="+itemDescription2,
      }

      const data = await apiRequest('http://localhost:5000/update-contact/'+itemId2, objReq2);
      console.log(data);

      if(data.code === "success"){
        console.log('Ok save ');
      } else {
        console.log('Not save');
      }
      handleReadData2();
      setShow2(false);
      
    } 

  }

  const handleReadData2 = async () => {
    const response = await fetch('http://localhost:5000/get-contact-data');
    const data = await response.json();
    console.log('check all todo', data);
    setAllTodo2(data);
  }

  useEffect(()=>{
    handleReadData2();
  }, []) // on load page

  //------------------------------------------------------------------------
  //------------------------------------------------------------------------
  //DELETE PROCESS
  const deleteItem2 = async (id)=> {

    let text = "Are you sure to delete todo id number:" + id + "?";
    if (window.confirm(text) === true) {
  
      const objReq = { method: 'DELETE'}
      await apiRequest('http://localhost:5000/delete-contact/'+id, objReq);
      handleReadData2();
    } 

   
  }

  //UPDATE MODAL FORM
  const updateItem2 = async (id)=> {
    setButMode2('update')
    setButname2('Update')
    setSetItemId2(id); 
    const response = await fetch('http://localhost:5000/get-contact/'+id);
    const data = await response.json();

    console.log('check one contact', data);
    setItemName2(data.itemName2);
    setItemContact2(data.itemContact2);
    setItemEmail2(data.itemEmail2);
    setItemDescription2(data.itemDescription2);
    setShow2(true);
  }

    return (
        <div className='Contact'>
        
        <Button variant="info" onClick={handleShow2}>
        Add Contact
        </Button>

        <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Contact Number</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th> 
                   Action
                  </th>
                </tr>
              </thead>
              <tbody>

         
                {  allTodo2.map(

                  (item) => (
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.itemName2}</td>
                    <td>{item.itemContact2}</td>
                    <td>{item.itemEmail2}</td>
                    <td>{item.itemDescription2}</td>
                    
                    <td>  
                      <Button variant="danger" onClick={ ()=> deleteItem2(item.id) }>Delete</Button> {'  '}
                      <Button variant="success" onClick={ ()=> updateItem2(item.id) }>Update</Button>
                      </td>
                  </tr>
                  ) 

                ) }
                
              </tbody>
            </Table>

   

<Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body> 

        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name</Form.Label>
          <Form.Control required type="text" value={itemName2} onChange={ (e)=>{ setItemName2(e.target.value) }} placeholder="Enter Full Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control required type="phone" value={itemContact2} onChange={ (e)=>{ setItemContact2(e.target.value) }} placeholder="Enter Contact Number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="text" value={itemEmail2} onChange={ (e)=>{ setItemEmail2(e.target.value) }} placeholder="Enter Email Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label> Description</Form.Label>
          <Form.Control as="textarea" value={itemDescription2} onChange={ (e)=>{ setItemDescription2(e.target.value) } } rows={3} />
        </Form.Group>
        </Form>
        
        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>

          <Button variant="primary" onClick={handleSave2}>
            {butName2}
          </Button>
        </Modal.Footer>
      </Modal>

        </div>

    )

}


export default Todo