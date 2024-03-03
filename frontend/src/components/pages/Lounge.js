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
                                    <li className='price-display'>
                                        <span className="item-name">Haircut</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                    </li>
                                    <li className='price-display'>
                                        <span className='item-name'>Blowdry/Ironing/Hairstyling</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                    </li>
                                    <li className='price-display'>
                                        <span className='item-name'>Hair Spa</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                    </li>
                                    <li className='price-display'>
                                        <span className='item-name'>Hot Oil</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                    </li>
                                    <li className='price-display'>
                                        <span className='item-name'>Henna Celophane</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                    </li>
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
                                    <li className='price-display'>
                                        <span className='item-name'>Classi Manicure</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

                                    <li className='price-display'>
                                        <span className='item-name'>Classic Pedicure</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

                                    <li className='price-display'>
                                        <span className='item-name'>Soft Gel Polish</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

                                    <li className='price-display'>
                                        <span className='item-name'>Nail Art</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

                                    <li className='price-display'>
                                    <span className='item-name'>Foot Spa</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

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
                                    <li className='price-display'>
                                    <span className='item-name'>Natural Classic Eye</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

                                    <li className='price-display'>
                                    <span className='item-name'>Cats Eye</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

                                    <li className='price-display'>
                                    <span className='item-name'>Dolly Eye</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

                                    <li className='price-display'>
                                    <span className='item-name'>Wispy Eye</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

                                    <li className='price-display'>
                                    <span className='item-name'>Anime Eye</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

                                    <li className='price-display'>
                                    <span className='item-name'>Angel Eye</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

                                    <li className='price-display'>
                                    <span className='item-name'>Eyelash Lift</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

                                    <li className='price-display'>
                                    <span className='item-name'>Eyebrow Perm</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

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
                                    <li className='price-display'>
                                    <span className='item-name'>Swedish Massage</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

                                    <li className='price-display'>
                                    <span className='item-name'>Aromatherapy</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

                                    <li className='price-display'>
                                    <span className='item-name'>Body Scrub with Massage</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

                                    <li className='price-display'>
                                    <span className='item-name'>Ventosa Therapy</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

                                    <li className='price-display'>
                                    <span className='item-name'>Hot Stone</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

                                    <li className='price-display'>
                                    <span className='item-name'>Ear Candling</span>
                                        <span className="price-separator"></span>
                                        <span className="item-price">P100.00</span>
                                        </li>

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