import React from 'react';

function Discount()
{
    return (
        <section className='section bg-dark border-top'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 mb-5 text-center'>
                    <h3 className='main-heading'>This Month's Discount</h3>
                    <div className='underline mx-auto'></div>
                </div>

                <div className='discount col-md-6 text-center'>
                    <h6 className='homeDiscountTitle'>March's Discount</h6>
                    <h2 className='homeDiscount'>10% OFF TO ALL SERVICE FROM MARCH 1 - MARCH 31</h2>
                </div>
                <div className='discount col-md-6 text-center'>
                    <h6 className='homeDiscountTitle'>Special Discount</h6>
                    <h2 className='homeDiscount'>HAIRCUT AND SWEDISH MASSAGE FOR ONLY 120 FROM MARCH 3 - MARCH 6</h2>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Discount