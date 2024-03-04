import { useState, useEffect } from 'react';
import apiRequest from '../../../dataFetch/apiRequest';

//BOOTSTRAP//
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Book = () => {

//STATING THE VALUE (INPUT)//
  const [itemFirstName, setItemFirstName] = useState('');
  const [itemLastName, setItemLastName] = useState('');
  const [itemEmail, setItemEmail] = useState('');
  const [itemContact, setItemContact] = useState('');
  const [itemService, setItemService] = useState('');
  const [itemDate, setItemDate] = useState('');
  const [itemTime, setItemTime] = useState('');
  const [itemDescription, setItemDescription] = useState('');

//MODAL SHOW
  const [show, setShow] = useState(false);
  const [allBook, setAllBook] = useState([]);

//NAME OF THE MODE INSIDE THE MODAL (ADD/UPDATE)  
  const [butMode, setButMode] = useState('');

//NAME OF THE BUTTON INSIDE THE MODAL (ADD/UPDATE)
  const [butName, setButname] = useState('');

//DATA'S ID
  const [itemId, setSetItemId] = useState('');
  
  
//CREATE MODAL FORM 
  const handleShow = () => { 
  setButMode('create')
  setButname('Save')  
  setShow(true);
  setItemFirstName('');
  setItemLastName('');
  setItemEmail('');
  setItemContact('');
  setItemService('');
  setItemDate('');
  setItemTime('');
  setItemDescription('');
  }

  //------------------------------------------------------------------------
  //------------------------------------------------------------------------
  //FORM REQUIREMENT
  const handleSave = async () => {
    if ( butMode === 'create' ) {
      if (itemFirstName === ''){
        alert('Full Name is empty, this is required.');
        return;
      }
      if (itemEmail === ''){
        alert('Email is empty, this is required.')
        return;
      }
      if (itemContact === ''){
        alert('Contact is empty, this is required.')
        return;
      }
      if (itemDescription === ''){
        alert('Message is empty, please tell us your concern.')
        return;
      }
    
    //------------------------------------------------------------------------
    //------------------------------------------------------------------------
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
        } else {
          console.log('Not save');
        }
        handleReadData();
        setShow(false);

    } else {
    
    //------------------------------------------------------------------------
    //------------------------------------------------------------------------
    //UPDATE PROCESS
      const objReq = {
        method: 'PUT',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded',
        },
        body:"ItemFirstName="+itemFirstName+"&ItemLastName="+itemLastName+"&ItemEmail="+itemEmail+"&ItemContact="+itemContact+"&ItemService="+itemService+"&ItemDate="+itemDate+"&ItemTime="+itemTime+"&ItemDescription="+itemDescription,
      }

      const data = await apiRequest('http://localhost:5000/update-book/'+itemId, objReq);
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

    const token = localStorage.getItem('accessToken');
    let newToken = token.replace(/"/g,'');

    const response = await fetch('http://localhost:5000/get-book-data', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${newToken}`,
    }
  }).then(response =>{
    return response.json();
  }).then(data=>{
    console.log(data);
    setAllBook(data);
  });

  }

  useEffect(()=>{
    handleReadData();
  }, []) // on load page

  //------------------------------------------------------------------------
  //------------------------------------------------------------------------
  //DELETE PROCESS
  const deleteItem = async (id)=> {

    let text = "Are you sure to delete id number:" + id + "?";
    if (window.confirm(text) === true) {
  
      const objReq = { method: 'DELETE'}
      await apiRequest('http://localhost:5000/delete-book/'+id, objReq);
      handleReadData();
    } 

   
  }

  //UPDATE MODAL FORM
  const updateItem = async (id)=> {
    setButMode('update')
    setButname('Update')
    setSetItemId(id); 
    const response = await fetch('http://localhost:5000/get-book/'+id);
    const data = await response.json();

   
    setItemFirstName(data.itemFirstName);
    setItemLastName(data.itemLastName);
    setItemEmail(data.itemEmail);
    setItemContact(data.itemContact);
    setItemService(data.itemService);
    setItemDate(data.itemDate);
    setItemTime(data.itemTime);
    setItemDescription(data.itemDescription);
    setShow(true);
  }

    return (
        <div className='Contact'>
    
        <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>Service/s</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Message</th>
                  <th> 
                   Action
                  </th>
                </tr>
              </thead>
              <tbody>

         
                {  allBook.map(

                  (item) => (
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.itemFirstName}</td>
                    <td>{item.itemLastName}</td>
                    <td>{item.itemEmail}</td>
                    <td>{item.itemContact}</td>
                    <td>{item.itemService}</td>
                    <td>{item.itemDate}</td>
                    <td>{item.itemTime}</td>
                    <td>{item.itemDescription}</td>
                    
                    <td>  
                      <Button variant="danger" onClick={ ()=> deleteItem(item.id) }>Delete</Button> {'  '}
                      </td>
                  </tr>
                  ) 

                ) }
                
              </tbody>
            </Table>
        </div>

    )

}


export default Book