import React from 'react'
import { Button, Card } from 'react-bootstrap'
import J1 from './J1.jpg'
import J11 from './J11.jpg'
import J2 from './J2.jpg'
import J12 from './J12.jpg'
import G9 from './G9.webp'
import H1 from './H1.webp'
import H2 from './H2.webp'
import H3 from './H3.webp'

function Accessories() {
    return (
        <>
            <div className="row row-gap-4 p-0 m-0~~~">
                <div className="imgee col-xl-4 col-md-4 col-sm-6 col-11 m-auto">
                    <Card style={{ width: '100%' }}>
                        <Card.Img className='img2' src={J1} />
                        <Card.Img className='img12' src={J11} />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>Cali Cruiser</Card.Title>
                            <Card.Text>
                                <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#00000085' }} class="fa-regular fa-star"></i> (1 review)</small>
                                <h5><big>$1999</big>  <small style={{ color: '#00000085' }}><del>$2300</del></small></h5>
                                <h6 style={{ color: '#00000085' }}>Cruiser Bike</h6>
                            </Card.Text>
                            <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button>
                            <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button>
                            <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button>
                            <button className='select'>Select Options</button>

                        </Card.Body>
                    </Card>
                </div>
                <div className="imgee col-xl-4 col-md-4 col-sm-6 col-11 m-auto">
                    <Card style={{ width: '100%'}}>
                        <Card.Img className='img2' src={J2} />
                        <Card.Img className='img12' src={J12} />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>Cali Cruiser</Card.Title>
                            <Card.Text>
                                <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#00000085' }} class="fa-regular fa-star"></i> (1 review)</small>
                                <h5><big>$1999</big>  <small style={{ color: '#00000085' }}><del>$2300</del></small></h5>
                                <h6 style={{ color: '#00000085' }}>Cruiser Bike</h6>
                            </Card.Text>
                            <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button>
                            <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button>
                            <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button>
                            <button className='select'>Select Options</button>

                        </Card.Body>
                    </Card>
                </div>
                <div className="imgee col-xl-4 col-md-4 col-sm-6 col-11 m-auto">
                    <Card style={{ width: '100%'}}>
                        <Card.Img className='img3' src={G9} style={{height:'260px'}} />
                        {/* <Card.Img className='img12' src={J12} /> */}
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>Cali Cruiser</Card.Title>
                            <Card.Text>
                                <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#00000085' }} class="fa-regular fa-star"></i> (1 review)</small>
                                <h5><big>$1999</big>  <small style={{ color: '#00000085' }}><del>$2300</del></small></h5>
                                <h6 style={{ color: '#00000085' }}>Cruiser Bike</h6>
                            </Card.Text>
                            <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button>
                            <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button>
                            <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button>
                            <button className='select'>Select Options</button>

                        </Card.Body>
                    </Card>
                </div>
                <div className="imgee col-xl-4 col-md-4 col-sm-6 col-11 m-auto">
                    <Card style={{ width: '100%', position: 'relative' }}>
                        <Card.Img className='img3' src={H1} />
                        {/* <Card.Img className='img12' src={Imi11} /> */}
                        <h6 style={{ backgroundColor: 'yellow', width: 'max-content', padding: '5px', position: 'absolute', top: '5px', left: '5px' }}><small> SELE !</small></h6>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>Shuma Helmet</Card.Title>
                            <Card.Text>
                                <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#00000085' }} class="fa-regular fa-star"></i> (1 review)</small>
                                <h5><big>$60</big>  <small style={{ color: '#00000085' }}><del>$67</del></small></h5>
                                <h6 style={{ color: '#00000085' }}>Biking Accessory</h6>
                            </Card.Text>
                            {/* <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button> */}
                            <button className='select'>Select Options</button>

                        </Card.Body>
                    </Card>
                </div>
                <div className="imgee col-xl-4 col-md-4 col-sm-6 col-11 m-auto">
                    <Card style={{ width: '100%', position: 'relative' }}>
                        <Card.Img className='img3' src={H2} />
                        <h6 style={{ backgroundColor: 'yellow', width: 'max-content', padding: '5px', position: 'absolute', top: '5px', left: '5px' }}><small> SELE !</small></h6>

                        {/* <Card.Img className='img12' src={Imi12} /> */}
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>Max Grip Tire</Card.Title>
                            <Card.Text>
                                <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i>  (1 review)</small>
                                <h5><big>$68</big>  <small style={{ color: '#00000085' }}><del>$75</del></small></h5>
                                <h6 style={{ color: '#00000085' }}>Cycling Accessory </h6>
                            </Card.Text>
                            {/* <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button> */}
                            <button className='select'>Select Options</button>

                        </Card.Body>
                    </Card>
                </div>
                <div className="imgee col-xl-4 col-md-4 col-sm-6 col-11 m-auto">
                    <Card style={{ width: '100%' }}>
                        <Card.Img className='img3' src={H3} />
                        {/* <Card.Img className='img12' src={Imi13} /> */}
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>Racing Saddle</Card.Title>
                            <Card.Text>
                                <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> (1 review)</small>
                                <h5><big>$59</big></h5>
                                <h6 style={{ color: '#00000085' }}>Cycling Accessory</h6>
                            </Card.Text>
                            {/* <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button> */}
                            {/* <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button> */}
                            {/* <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button> */}
                            {/* <Button variant="primary" size="lg">
                                        Block level 
                                    </Button> */}
                            <button className='select'>Select Options</button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Accessories
