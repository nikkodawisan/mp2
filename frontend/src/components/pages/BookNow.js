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

//HAIR VALUE
const [haircutEntry, setHaircutEntry] = useState(false);
const [bisEntry, setBisEntry] = useState(false);
const [hairSpaEntry, setHairSpaEntry] = useState(false);
const [hotOilEntry, setHotOilEntry] = useState(false);
const [hennaEntry, setHennaEntry] = useState(false);
//NAIL VALUE
const [manicureEntry, setManicureEntry] = useState(false);
const [pedicureEntry, setPedicureEntry] = useState(false);
const [sgpEntry, setSgpEntry] = useState(false);
const [nailArtEntry, setNailArtEntry] = useState(false);
const [footSpaEntry, setFootSpaEntry] = useState(false);
//EYEBROW
const [classicEyeEntry, setClassicEyeEntry] = useState(false);
const [catsEyeEntry, setCatsEyeEntry] = useState(false);
const [dollyEyeEntry, setDollyEyeEntry] = useState(false);
const [wispyEyeEntry, setWispyEyeEntry] = useState(false);
const [animeEyeEntry, setAnimeEyeEntry] = useState(false);
const [angelEyeEntry, setAngelEyeEntry] = useState(false);
const [eyelashLiftEntry, setEyelashLiftEntry] = useState(false);
const [eyebrowPermEntry, setEyebrowPermEntry] = useState(false);
//MASSAGE
const [swedishMassageEntry, setSwedishMassageEntry] = useState(false);
const [aromaEntry, setAromaEntry] = useState(false);
const [bsmEntry, setBsmEntry] = useState(false);
const [ventosaEntry, setVentosaEntry] = useState(false);
const [hotStoneEntry, setHotStoneEntry] = useState(false);
const [earCandlingEntry, setEarCandlingEntry] = useState(false);

//SAVE
const save = async () =>{

let itemService = []

//Hair Condition
if (haircutEntry === true)
{
  itemService['Haircut'] = true; 
}

if (bisEntry === true)
{
  itemService['Blowdry/Ironing/Hair Styling'] = true; 
}

if (hairSpaEntry === true)
{
  itemService['Hair Spa'] = true; 
}  

if (hotOilEntry === true)
{
  itemService['Hot Oil'] = true; 
}  

if (hennaEntry === true)
{
  itemService['Henna Celophane'] = true; 
}

//Nail Condition
if (manicureEntry === true)
{
  itemService['Classic Manicure'] = true; 
}

if (pedicureEntry === true)
{
  itemService['Classic Pedicure'] = true; 
}

if (sgpEntry === true)
{
  itemService['Soft Gel Polish'] = true; 
}

if (nailArtEntry === true)
{
  itemService['Nail Art'] = true; 
}

if (hotOilEntry === true)
{
  itemService['Hot Oil'] = true; 
}

//Eyebrow Condition
if (classicEyeEntry === true)
{
  itemService['Classic Eye'] = true; 
}

if (catsEyeEntry === true)
{
  itemService['Cats Eye'] = true; 
}

if (dollyEyeEntry === true)
{
  itemService['Dolly Eye'] = true; 
}

if (wispyEyeEntry === true)
{
  itemService['Wispy Eye'] = true; 
}

if (animeEyeEntry === true)
{
  itemService['Anime Eye'] = true; 
}

if (angelEyeEntry === true)
{
  itemService['Angel Eye'] = true; 
}

if (eyelashLiftEntry === true)
{
  itemService['Eyelash Lift'] = true; 
}

if (eyebrowPermEntry === true)
{
  itemService['Eyebrow Perm'] = true; 
}

//Massage
if (swedishMassageEntry === true)
{
  itemService['Swedish Massage'] = true; 
}

if (aromaEntry === true)
{
  itemService['Aromatherapy'] = true; 
}

if (bsmEntry === true)
{
  itemService['Body Scrub with Massage'] = true; 
}

if (ventosaEntry === true)
{
  itemService['Ventosa Therapy'] = true; 
}

if (hotStoneEntry === true)
{
  itemService['Hot Stone'] = true; 
}

if (earCandlingEntry === true)
{
  itemService['Ear Candling'] = true; 
}


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
          alert('Successfully Sumitted!');
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

//Hair      
const handleHaircut = () =>
{
  setHaircutEntry(!haircutEntry)
  console.log(haircutEntry)
}      

const handleBis = () =>
{
  setBisEntry(!bisEntry)
  console.log(bisEntry)
}

const handleHairSpa = () =>
{
  setHairSpaEntry(!hairSpaEntry)
  console.log(hairSpaEntry)
}

const handleHotOil = () =>
{
  setHotOilEntry(!hotOilEntry)
  console.log(hotOilEntry)
}

const handleHenna = () =>
{
  setHennaEntry(!hennaEntry)
  console.log(hennaEntry)
}

//Nail
const handleManicure = () =>
{
  setManicureEntry(!manicureEntry)
  console.log(manicureEntry)
}  

const handlePedicure = () =>
{
  setPedicureEntry(!pedicureEntry)
  console.log(pedicureEntry)
}  

const handleSgp = () =>
{
  setSgpEntry(!sgpEntry)
  console.log(sgpEntry)
}  

const handleNailArt = () =>
{
  setNailArtEntry(!nailArtEntry)
  console.log(nailArtEntry)
}  

const handleFootSpa = () =>
{
  setFootSpaEntry(!footSpaEntry)
  console.log(footSpaEntry)
} 

//Eyebrow
const handleClassicEye = () =>
{
  setClassicEyeEntry(!classicEyeEntry)
  console.log(classicEyeEntry)
}

const handleCatsEye = () =>
{
  setCatsEyeEntry(!catsEyeEntry)
  console.log(catsEyeEntry)
}  

const handleDollyEye = () =>
{
  setDollyEyeEntry(!dollyEyeEntry)
  console.log(dollyEyeEntry)
}

const handleWispyEye = () =>
{
  setWispyEyeEntry(!wispyEyeEntry)
  console.log(wispyEyeEntry)
} 

const handleAnimeEye = () =>
{
  setAnimeEyeEntry(!animeEyeEntry)
  console.log(animeEyeEntry)
} 

const handleAngelEye = () =>
{
  setAngelEyeEntry(!angelEyeEntry)
  console.log(angelEyeEntry)
} 

const handleEyelashLift = () =>
{
  setEyelashLiftEntry(!eyelashLiftEntry)
  console.log(eyelashLiftEntry)
} 

const handleEyebrowPerm = () =>
{
  setEyebrowPermEntry(!eyebrowPermEntry)
  console.log(eyebrowPermEntry)
}

//Massage
const handleSwedishMassage = () =>
{
  setSwedishMassageEntry(!swedishMassageEntry)
  console.log(swedishMassageEntry)
}

const handleAroma = () =>
{
  setAromaEntry(!aromaEntry)
  console.log(aromaEntry)
}

const handleBsm = () =>
{
  setBsmEntry(!bsmEntry)
  console.log(bsmEntry)
}

const handleVentosa = () =>
{
  setVentosaEntry(!ventosaEntry)
  console.log(ventosaEntry)
}

const handleHotStone = () =>
{
  setHotStoneEntry(!hotStoneEntry)
  console.log(hotStoneEntry)
}

const handleEarCandling = () =>
{
  setEarCandlingEntry(!earCandlingEntry)
  console.log(earCandlingEntry)
}





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

    <div>

        <h6>Hair</h6>
          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleHaircut} checked={haircutEntry} value="Haircut" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Haircut
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleBis} checked={bisEntry} value="Blowdry/Ironing/Hair Styling" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Blowdry/Ironing/Hair Styling
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleHairSpa} checked={hairSpaEntry} value="Hair Spa" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Hair Spa
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleHotOil} checked={hotOilEntry} value="Hot Oil" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Hot Oil
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleHenna} checked={hennaEntry} value="Henna Celophane" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Henna Celophane
          </label>
          </div>
          </div>



    <div>

        <h6>Nails</h6>
          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleManicure} checked={manicureEntry} value="Classic Manicure" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Classic Manicure
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handlePedicure} checked={pedicureEntry} value="Clasiic Pedicure" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Clasiic Pedicure
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleSgp} checked={sgpEntry} value="Soft Gel Polish" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Soft Gel Polish
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleNailArt} checked={nailArtEntry} value="Nail Art" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Nail Art
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleFootSpa} checked={footSpaEntry} value="Foot Spa" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Foot Spa
          </label>
          </div>
          </div>




    <div>

        <h6>Eyebrow</h6>
          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleClassicEye} checked={classicEyeEntry} value="Natural/Classic Eye" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Natural/Classic Eye
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleCatsEye} checked={catsEyeEntry} value="Cats Eye" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Cats Eye
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleDollyEye} checked={dollyEyeEntry} value="Dolly Eye" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Dolly Eye
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleWispyEye} checked={wispyEyeEntry} value="Wispy Eye" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Wispy Eye
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleAnimeEye} checked={animeEyeEntry} value="Anime Eye" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Anime Eye
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleAngelEye} checked={angelEyeEntry} value="Angel Eye" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Angel Eye
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleEyelashLift} checked={eyelashLiftEntry} value="Eyelash Lift" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Eyelash Lift
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleEyebrowPerm} checked={eyebrowPermEntry} value="Eyebrow Perm" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Eyebrow Perm
          </label>
          </div>
          </div>



    <div>

        <h6>Massage</h6>
          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleSwedishMassage} checked={swedishMassageEntry} value="Swedish Massage" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Swedish Massage
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleAroma} checked={aromaEntry} value="Aromatherapy" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Aromatherapy
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleBsm} checked={bsmEntry} value="Body Scrub with Massage" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Body Scrub with Massage
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleVentosa} checked={ventosaEntry} value="Ventosa Therapy" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Ventosa Therapy
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleHotStone} checked={hotStoneEntry} value="Hot Stone" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Hot Stone
          </label>
          </div>

          <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleEarCandling} checked={earCandlingEntry} value="Ear Candling" id="flexCheckDefault" />
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