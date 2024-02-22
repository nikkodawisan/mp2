import React from 'react';
import Image1 from '../images/sample7.jpg';

function SignUp() {
    return (
<div>
<section className='py-4 bg-info'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4 my-auto'>
                <h4>Sign Up</h4>

            </div>
        </div>
</div>
</section>


<section className='section py-4'>
    <div className='container'>
        <div className='card shadow'>
            <div className='card-body'>
                <div className='row'>

                        {/*Left Side*/}
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label for="">First Name</label>
                                <input type="text" className="form-control" placeholder="Enter First Name" />
                            </div>

                            <div className='form-group'>
                                <label for="">Last Name</label>
                                <input type="text" className="form-control" placeholder="Enter Last Name" />
                            </div>

                            <div className='form-group'>
                                <label for="">Phone Number</label>
                                <input type="text" className="form-control" placeholder="Enter Phone Number" />
                            </div>

                            <div className='form-group'>
                                <label for="">Email</label>
                                <input type="email" className="form-control" placeholder="Enter Email Address" />
                            </div>

                            <div className='form-group'>
                                <label for="">Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>

                            <div className='form-group'>
                                <label for="">Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Re-type your Password" />
                            </div>

                            <div className='form-group py-3'>
                                <button type="button" className='btn btn-primary shadow w-100'>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
</section>

{/*Bottom Image*/}
<div>
<img src={Image1} className='w-100 border-bottom opacity-75 pt-5' alt="Service1" />
</div>

</div>
    );
}

export default SignUp;