import React from 'react';

import T1 from '../images/sample4.jpg';
import T2 from '../images/sample8.jpg';
import T3 from '../images/sample10.jpg';
import T4 from '../images/sample9.jpg';



function Service() {
    return (
<div>
<section className='py-4 bg-info'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4 my-auto'>
                <h4>Services</h4>

            </div>
        </div>
</div>
</section>

<div className='container py-4'>
<div className='card shadow'>
<div className='card-body'>
<div className='row'> 
            <div className='row align-items-start py-4'>

            {/*------------------------------------------------------------ */}
            {/*Hair*/}

                <div className='col-md-3 text-center'>
                    <div className='miniCard card shadow'>
                    <img src={T1} className='w-100 border-bottom' alt="Service1" />
                    <div className='card-body'>
                    <h6>Hair</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                
                {/*Accordion 1*/}
                <div className="accordion accordion-flush" id="accordionFlushExample">

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hair1" aria-expanded="false" aria-controls="hair1">
                            Haircut
                            </button>
                            </h2>
                            <div id="hair1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hair2" aria-expanded="false" aria-controls="hair2">
                            Blowdry/Ironing/HairStyling
                            </button>
                            </h2>
                            <div id="hair2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hair3" aria-expanded="false" aria-controls="hair3">
                            Hair Spa
                            </button>
                            </h2>
                            <div id="hair3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hair4" aria-expanded="false" aria-controls="hair4">
                            Hot Oil
                            </button>
                            </h2>
                            <div id="hair4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hair5" aria-expanded="false" aria-controls="hair5">
                            Henna Celophane
                            </button>
                            </h2>
                            <div id="hair5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>
                </div>
                </div>

                </div>
            </div>

            {/*------------------------------------------------------------ */}
            {/*Nails*/}

            <div className='col-md-3 text-center'>
                <div className='miniCard card shadow'>
                    <img src={T2} className='w-100 border-bottom' alt="Service1" />
                    <div className='card-body'>
                    <h6>Nails</h6>
                    <p>More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                
                            {/*Accordion 2*/}
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nail1" aria-expanded="false" aria-controls="nail1">
                            Classic Manicure
                            </button>
                            </h2>
                            <div id="nail1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nail2" aria-expanded="false" aria-controls="nail2">
                            Classic Pedicure
                            </button>
                            </h2>
                            <div id="nail2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nail3" aria-expanded="false" aria-controls="nail3">
                            Soft Gel Polish
                            </button>
                            </h2>
                            <div id="nail3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nail4" aria-expanded="false" aria-controls="nail4">
                            Nail Art
                            </button>
                            </h2>
                            <div id="nail4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nail5" aria-expanded="false" aria-controls="nail5">
                            Foot Spa
                            </button>
                            </h2>
                            <div id="nail5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>
                            </div>
                            </div>

                            

                </div>
            </div>

            {/*------------------------------------------------------------ */}
            {/*Eyebrow*/}

            <div className='col-md-3 text-center'>
                <div className='miniCard card shadow'>
                <img src={T3} className='w-100 border-bottom' alt="Service1" />
                <div className='card-body'>
                <h6>Eyebrow</h6>
                <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    
                            {/*Accordion 3*/}
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#eye1" aria-expanded="false" aria-controls="eye1">
                            Natural/Classic Eye
                            </button>
                            </h2>
                            <div id="eye1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#eye2" aria-expanded="false" aria-controls="eye2">
                            Cats Eye
                            </button>
                            </h2>
                            <div id="eye2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#eye3" aria-expanded="false" aria-controls="eye3">
                            Dolly Eye
                            </button>
                            </h2>
                            <div id="eye3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#eye4" aria-expanded="false" aria-controls="eye4">
                            Wispy Eye
                            </button>
                            </h2>
                            <div id="eye4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#eye5" aria-expanded="false" aria-controls="eye5">
                            Anime Eye
                            </button>
                            </h2>
                            <div id="eye5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#eye6" aria-expanded="false" aria-controls="eye6">
                            Angel Eye
                            </button>
                            </h2>
                            <div id="eye6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#eye7" aria-expanded="false" aria-controls="eye7">
                            Eyelash Lift
                            </button>
                            </h2>
                            <div id="eye7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#eye8" aria-expanded="false" aria-controls="eye8">
                            Eyebrow Perm
                            </button>
                            </h2>
                            <div id="eye8" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>
                            </div>
                            </div>

                </div>
            </div>

            {/*------------------------------------------------------------ */}
            {/*Massage*/}

            <div className='col-md-3 text-center'>
                <div className='miniCard card shadow'>
                <img src={T4} className='w-100 border-bottom' alt="Service1" />
                <div className='card-body'>
                <h6>Massage</h6>
                <p>More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                            {/*Accordion 4*/}
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#massage1" aria-expanded="false" aria-controls="massage1">
                            Swedish Massage
                            </button>
                            </h2>
                            <div id="massage1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#massage2" aria-expanded="false" aria-controls="massage2">
                            Aromatherapy
                            </button>
                            </h2>
                            <div id="massage2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#massage3" aria-expanded="false" aria-controls="massage3">
                            Body Scrub with Massage
                            </button>
                            </h2>
                            <div id="massage3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#massage4" aria-expanded="false" aria-controls="massage4">
                            Ventosa Therapy
                            </button>
                            </h2>
                            <div id="massage4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#massage5" aria-expanded="false" aria-controls="massage5">
                            Hot Stone
                            </button>
                            </h2>
                            <div id="massage5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#massage6" aria-expanded="false" aria-controls="massage6">
                            Ear Candling
                            </button>
                            </h2>
                            <div id="massage6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                            </div>
                            </div>
                            </div>

                </div>
            </div>
              
            {/*------------------------------------------------------------ */}
    </div>
</div>

</div>
</div>
</div>
</div>

    );
}

export default Service;