import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import Discount from './inc/Discount'

import T1 from '../images/sample4.jpg';
import T2 from '../images/sample5.jpg';
import T3 from '../images/sample6.jpg';

function Home() {
    return (
        <div>
            <Slider/>

            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-heading'>Welcome to Candy Vault Salon & Spa</h3>
                            <div className='underline mx-auto'></div>

                            <p className='p'>Candy Vault Salon & Spa was established August 8, 2023 by Joyce and Ken. Being the first salon on our location, and receiving positive feedbacks with our customers, we assure to provide quality service to make our customer handsome and pretty, leaving our salon with 100% satisfaction.


Feel free to visit us at 0009 A2 2nd floor Gov Ferrer Dr Buenavista II, General Trias, Philippines.</p>
                            <Link to="/book" className='btn btn-lg btn-warning shadow'>BOOK NOW!</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/*Our Top 3 Services*/}

            <Discount />

            {/*The Top 3 Service*/}

            <section className='section bg-c-light border-top'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 mb-5 text-center'>
                    <h3 className='main-heading'>Top 3 Services</h3>
                    <div className='underline mx-auto'></div>
                </div>

                <div className='col-md-4 text-center'>
                    <div className='card shadow'>
                    <img src={T1} className='w-100 border-bottom' alt="Service1" />
                    <div className='card-body'>
                    <h6>Haircut</h6>
                    <p>bla bla bla afdada gsdgsfsa afdadqwdadadaca a adfadadad gsgdfghfdhgfj hfddgsfs fsfada ada adadl;l'k' a'fdla'dandlkfna da';l';a f;sljf;ljs;fadkfasfl adadad aadajfkasf;lks fs'f;ls'fls dafs fsasfs</p>
                    <Link to="/service" className='btn btn-link'>Check Now!</Link>
                    </div>
                    </div>
                </div>

                <div className='col-md-4 text-center'>
                    <div className='card shadow'>
                    <img src={T2} className='w-100 border-bottom' alt="Service1" />
                    <div className='card-body'>
                    <h6>Foot Spa</h6>
                    <p>bla bla bla afdada gsdgsfsa afdadqwdadadaca a adfadadad gsgdfghfdhgfj hfddgsfs fsfada ada adadl;l'k' a'fdla'dandlkfna da';l';a f;sljf;ljs;fadkfasfl adadad aadajfkasf;lks fs'f;ls'fls dafs fsasfs</p>
                    <Link to="/service" className='btn btn-link'>Check Now!</Link>
                    </div>
                    </div>
                </div>

                <div className='col-md-4 text-center'>
                    <div className='card shadow'>
                    <img src={T3} className='w-100 border-bottom' alt="Service1" />
                    <div className='card-body'>
                    <h6>Soft Gel Polish</h6>
                    <p>bla bla bla afdada gsdgsfsa afdadqwdadadaca a adfadadad gsgdfghfdhgfj hfddgsfs fsfada ada adadl;l'k' a'fdla'dandlkfna da';l';a f;sljf;ljs;fadkfasfl adadad aadajfkasf;lks fs'f;ls'fls dafs fsasfs</p>
                    <Link to="/service" className='btn btn-link'>Check Now!</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
}

export default Home;