import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import apiRequest from '../../dataFetch/apiRequest';
import T1 from '../images/icon1.png';


const Contact = () =>{
//STATING THE VALUE (INPUT)//
const [joinFirstName, setJoinFirstName] = useState('');
const [joinLastName, setJoinLastName] = useState('');
const [joinEmail, setJoinEmail] = useState('');
const [joinContact, setJoinContact] = useState('');
const [joinAddress, setJoinAddress] = useState('');
const [joinDescription, setJoinDescription] = useState('');

//SAVE

const save = async () =>{

//CREATE/POST METHOD, SENDING THE VALUES TO THE BACKEND
  const objReq = {
    method: 'POST',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
      },
      body:"JoinFirstName="+joinFirstName+"&JoinLastName="+joinLastName+"&JoinEmail="+joinEmail+"&JoinContact="+joinContact+"&JoinAddress="+joinAddress+"&JoinDescription="+joinDescription,
      }

  const data = await apiRequest('http://localhost:5000/save-join', objReq);
    console.log(data);

        if(data.code === "success"){
          console.log('Saved');
          alert('Successfully Sent');
        } else {
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
                <h4>Contact Us</h4>
            </div>
        </div>
    </div>
</section>

<div className='container py-4'>
<div className='card shadow'>
<div className='card-body'>
<div className='row'>  
<h1>Contact Details</h1>
<h5>Phone: <p>0956-111-2222</p></h5>
<h5>Email: <p>candyvault@gmail.com</p></h5>
<h5>Address: <p>0009 A2 2nd floor Gov Ferrer Dr Buenavista II, General Trias, Philippines.</p></h5>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.4967213703826!2d120.87933351062588!3d14.340641183330494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962b2ca898dfcd%3A0x2bb726980b64c952!2sGov%20Ferrer%20Dr%2C%20General%20Trias%2C%20Cavite!5e0!3m2!1sen!2sph!4v1708976859219!5m2!1sen!2sph" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
</div>
</div>
</div> 
</div>

</div>
)
}

export default Contact