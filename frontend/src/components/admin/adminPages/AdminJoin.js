import { useState, useEffect } from 'react';
import apiRequest from '../../../dataFetch/apiRequest';

//BOOTSTRAP//
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Join = () => {

//STATING THE VALUE (INPUT)//
  const [joinFirstName, setJoinFirstName] = useState('');
  const [joinLastName, setJoinLastName] = useState('');
  const [joinEmail, setJoinEmail] = useState('');
  const [joinContact, setJoinContact] = useState('');
  const [joinAddress, setJoinAddress] = useState('');
  const [joinDescription, setJoinDescription] = useState('');

//MODAL SHOW
  const [show, setShow] = useState(false);
  const [allBook, setAllBook] = useState([]);

//NAME OF THE MODE INSIDE THE MODAL (ADD/UPDATE)  
  const [butMode, setButMode] = useState('');

//NAME OF THE BUTTON INSIDE THE MODAL (ADD/UPDATE)
  const [butName, setButname] = useState('');

//DATA'S ID
  const [joinId, setSetJoinId] = useState('');
  
  


//CLOSING THE MODAL
  const handleClose = () => setShow(false);

  //------------------------------------------------------------------------
  //------------------------------------------------------------------------
  //FORM REQUIREMENT
  const handleSave = async () => {
    if ( butMode === 'create' ) {
      if (joinFirstName === ''){
        alert('Full Name is empty, this is required.');
        return;
      }
      if (joinEmail === ''){
        alert('Email is empty, this is required.')
        return;
      }
      if (joinContact === ''){
        alert('Contact is empty, this is required.')
        return;
      }
      if (joinDescription === ''){
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
      body:"JoinFirstName="+joinFirstName+"&JoinLastName="+joinLastName+"&JoinEmail="+joinEmail+"&JoinContact="+joinContact+"&JoinAddress="+joinAddress+"&ItemDate="+"&JoinDescription="+joinDescription,
      }

  const data = await apiRequest('http://localhost:5000/save-join', objReq);
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
        body:"JoinFirstName="+joinFirstName+"&JoinLastName="+joinLastName+"&JoinEmail="+joinEmail+"&JoinContact="+joinContact+"&JoinAddress="+joinAddress+"&ItemDate="+"&JoinDescription="+joinDescription,
      }

      const data = await apiRequest('http://localhost:5000/update-join/'+joinId, objReq);
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
    const response = await fetch('http://localhost:5000/get-join-data');
    const data = await response.json();
    console.log('check all book', data);
    setAllBook(data);
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
      await apiRequest('http://localhost:5000/delete-join/'+id, objReq);
      handleReadData();
    } 

   
  }

  //UPDATE MODAL FORM
  const updateItem = async (id)=> {
    setButMode('update')
    setButname('Update')
    setSetJoinId(id); 
    const response = await fetch('http://localhost:5000/get-join/'+id);
    const data = await response.json();

    console.log('check one join', data);
    setJoinFirstName(data.joinFirstName);
    setJoinLastName(data.joinLastName);
    setJoinEmail(data.joinEmail);
    setJoinContact(data.joinContact);
    setJoinAddress(data.joinAddress);
    setJoinDescription(data.joinDescription);
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
                  <th>Address</th>
                  <th>Additional Information</th>
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
                    <td>{item.joinFirstName}</td>
                    <td>{item.joinLastName}</td>
                    <td>{item.joinEmail}</td>
                    <td>{item.joinContact}</td>
                    <td>{item.joinAddress}</td>
                    <td>{item.joinDescription}</td>
                    
                    <td>  
                      <Button variant="danger" onClick={ ()=> deleteItem(item.id) }>Delete</Button> {'  '}
                      <Button variant="success" onClick={ ()=> updateItem(item.id) }>Update</Button>
                      </td>
                  </tr>
                  ) 

                ) }
                
              </tbody>
            </Table>
        </div>

    )

}


export default Join