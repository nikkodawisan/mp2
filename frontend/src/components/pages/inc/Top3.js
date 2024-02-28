import React from 'react';

function Top3()
{
    return (
        <section className='section bg-dark border-top'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 mb-5 text-center'>
                    <h3 className='main-heading'>This Month's Discount</h3>
                    <div className='underline mx-auto'></div>
                </div>

                <div className='col-md-6 text-center'>
                    <h6 className='homeDiscountTitle'>March's Discount</h6>
                    <h2 className='homeDiscount'>10% OFF for all service from March 1 - March 31</h2>
                </div>
                <div className='col-md-6 text-center'>
                    <h6 className='homeDiscountTitle'>Special Discount</h6>
                    <h2 className='homeDiscount'>Haircut with Swedish Massage for only P120 from March 4 - March 6</h2>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Top3;