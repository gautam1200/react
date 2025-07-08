import React from 'react'
import Ap from './Ap.jpg'
import Heding from './Heding'
import Imm11 from './Imm11.webp'
import { Button } from 'react-bootstrap'
import Ap2 from './Ap2.png'
import Ap3 from './Ap3.png'
import Accessories from './Accessories'
import Footer from './Footer'
import imp6 from './Imp6.png'

function Cart() {
    return (
        <>
            <div className="cart container-xxl p-0" style={{ overflow: 'hidden' }}>
                <Heding></Heding>
                <div className="hh" style={{ height: '150px' }}></div>
                <div className="card_header container-xl">
                    <h1>Shop</h1>
                </div>
                <div className="hh" style={{ height: '150px' }}></div>
            </div>
            <div className="container-xxl py-5 bg-dark">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-11">
                            <img src={imp6} alt="" style={{ width: '100%' }} />
                        </div>
                        <div className="card_info col-lg-6 col-md-6 col-sm-11">
                            <div className="info">
                                <h1>Bike <span style={{ fontWeight: '700' }}>Starter</span> </h1>
                                <hr />
                                <h3><big style={{ color: 'red' }}>$1999</big>  <small><del>$2300</del></small></h3>
                                <p>This is a Demo Online Store. No orders shall be fulfilled. This is a Design-Driven Theme for WooCommerce and WordPress. If you’re planning to start an online store right away, look no further, get this theme on ThemeForest.</p>
                                <Button variant="outline-primary">Select options</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5 bg-light">
                <div className="container-xl">
                    <div className="row">
                        <div className="card_info col-lg-6 col-md-6 col-sm-11">
                            <div className="info ">
                                <h1>Bike <span style={{ fontWeight: '700' }}>Road</span> </h1>
                                <hr />
                                <h3><big style={{ color: 'red' }}>$2599</big></h3>
                                <p>This is a Demo Online Store. No orders shall be fulfilled. This is a Design-Driven Theme for WooCommerce and WordPress. If you’re planning to start an online store right away, look no further, get this theme on ThemeForest.</p>
                                <Button variant="outline-primary">Select options</Button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-11">
                            <img src={Ap2} alt="" style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5 bg-dark">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-11" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={Ap3} alt="" style={{ width: '100%',padding:'10px 0' }} />
                        </div>
                        <div className="card_info col-lg-6 col-md-6 col-sm-11">
                            <div className="info ">
                                <h1>Bike <span style={{ fontWeight: '700' }}>Pro</span> </h1>
                                <hr />
                                <h3><big style={{ color: 'red' }}>$2999</big></h3>
                                <p>This is a Demo Online Store. No orders shall be fulfilled. This is a Design-Driven Theme for WooCommerce and WordPress. If you’re planning to start an online store right away, look no further, get this theme on ThemeForest.</p>
                                <Button variant="outline-primary">Select options</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accessories container-xl">
                <h1>ACCESSORIES</h1>
                <Accessories></Accessories>
            </div>
            <br /><br />
            <Footer></Footer> 

        </> 
    )
}

export default Cart
