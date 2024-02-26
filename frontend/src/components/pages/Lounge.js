import React from  'react';
import T1 from '../images/sample11.jpg';


function Lounge() {
    return (
<div>
<section className='py-4 bg-info'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4 my-auto'>
                <h4>Lounge Menu</h4>

            </div>
        </div>
</div>
</section>

<div className='container py-4'>
<div className='card shadow'>
<div className='card-body'>
<div className='row'> 

<div className='col-md-12'>
        <div className='card shadow'>
        <img src={T1} className='w-100 border-bottom' alt="Service1" />
        <div className='card-body'>
                
                {/*Accordion 1*/}
                <div className="accordion accordion-flush" id="accordionFlushExample">

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hair1" aria-expanded="false" aria-controls="hair1">
                            Hair
                            </button>
                            </h2>
                            <div id="hair1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <ol>
                                    <li>Haircut</li>
                                    <li>Blowdry/Ironing/Hairstyling</li>
                                    <li>Hair Spa</li>
                                    <li>Hot Oil</li>
                                    <li>Henna Celophane</li>
                                </ol>
                            </div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hair2" aria-expanded="false" aria-controls="hair2">
                            Nails
                            </button>
                            </h2>
                            <div id="hair2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <ol>
                                    <li>Classic Manicure</li>
                                    <li>Classic Pedicure</li>
                                    <li>Soft Gel Polish</li>
                                    <li>Nail Art</li>
                                    <li>Foot Spa</li>
                            </ol>
                            </div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hair3" aria-expanded="false" aria-controls="hair3">
                            Eyebrow
                            </button>
                            </h2>
                            <div id="hair3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <ol>
                                    <li>Natural/Classic Eye</li>
                                    <li>Cats Eye</li>
                                    <li>Dolly Eye</li>
                                    <li>Wispy Eye</li>
                                    <li>Anime Eye</li>
                                    <li>Angel Eye</li>
                                    <li>Eyelash Lift</li>
                                    <li>Eyebrow Perm</li>
                            </ol>
                            </div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hair4" aria-expanded="false" aria-controls="hair4">
                            Massage
                            </button>
                            </h2>
                            <div id="hair4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <ol>
                                    <li>Swedish Massage</li>
                                    <li>Cats EyeAromatherapy</li>
                                    <li>Body Scrub with Massage</li>
                                    <li>Ventosa Therapy</li>
                                    <li>Hot Stone</li>
                                    <li>Ear Candling</li>
                            </ol>
                            </div>
                            </div>
                            </div>
                </div>
                </div>

                </div>
            </div>

</div>


</div>
</div>
</div>
</div>
    )
}

export default Lounge