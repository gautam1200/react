import React, { useRef, useState, setTarget, setKey, key, toggleShowA, showA, toggleShowB, showB, setPosition } from 'react'
import { Alert, Button, Card, Col, Form, Image, Offcanvas, Overlay, OverlayTrigger, Pagination, Placeholder, Popover, ProgressBar, Row, Spinner, Tab, Table, Tabs, Toast, ToastContainer, Tooltip } from 'react-bootstrap';
import Im from './Im.jpg';




function Offers() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const target = useRef(null);


    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Simple tooltip
        </Tooltip>)

    const Link = ({ id, children, title }) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <a href="#">{children}</a>
        </OverlayTrigger>
    );

    const now = 68;
    // const [show, setShow] = useState(false);
    //   const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    const [position, setPosition] = useState('top-start');



    return (
        <>
            <div className="container-xl">
                <Button variant="primary" className="d-lg-none" onClick={handleShow}>
                    Launch
                </Button>

                <Alert variant="info" className="d-none d-lg-block">
                    Resize your browser to show the responsive offcanvas toggle.
                </Alert>

                <Offcanvas show={show} onHide={handleClose} responsive="lg">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <p className="mb-0">
                            This is content within an <code>.offcanvas-lg</code>.
                        </p>
                    </Offcanvas.Body>
                </Offcanvas>

                <br /><br />

                <Button variant="primary" onClick={handleShow}>
                    Launch
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>

                <br /><br />

                <Button variant="primary" onClick={handleShow}>
                    Toggle static offcanvas
                </Button>

                <Offcanvas show={show} onHide={handleClose} backdrop="static">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        I will not close if you click outside of me.
                    </Offcanvas.Body>
                </Offcanvas>
                <br /><br />

                <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
                    Click me to see
                </Button>
                <Overlay target={target.current} show={show} placement="right">
                    {({
                        placement: _placement,
                        arrowProps: _arrowProps,
                        show: _show,
                        popper: _popper,
                        hasDoneInitialMeasure: _hasDoneInitialMeasure,
                        ...props
                    }) => (
                        <div
                            {...props}
                            style={{
                                position: 'absolute',
                                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                                padding: '2px 10px',
                                color: 'white',
                                borderRadius: 3,
                                ...props.style,
                            }}
                        >
                            Simple tooltip
                        </div>
                    )}
                </Overlay>

                <br /><br />

                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <Button variant="success">Hover me to see</Button>
                </OverlayTrigger>


                <br /><br />

                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
                >
                    {({ ref, ...triggerHandler }) => (
                        <Button
                            variant="light"
                            {...triggerHandler}
                            className="d-inline-flex align-items-center"
                        >
                            <Image
                                ref={ref} roundedCircle src={Im}
                            />
                            <span className="ms-1">Hover to see</span>
                        </Button>
                    )}
                </OverlayTrigger>

                <br /><br />

                <p>
                    Tight pants next level keffiyeh{' '}
                    <Link title="Default title" id="t-1">
                        you probably
                    </Link>{' '}
                    haven't heard of them. Farm-to-table seitan, mcsweeney's fixie sustainable
                    quinoa 8-bit american apparel{' '}
                    <Link id="t-2" title="Another one">
                        have a
                    </Link>{' '}
                    terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo
                    thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's
                    cleanse vegan chambray. A really ironic artisan{' '}
                    <Link title="Another one here too" id="t-3">
                        whatever keytar
                    </Link>
                    , scenester farm-to-table banksy Austin{' '}
                    <Link title="The last tip!" id="t-4">
                        twitter handle
                    </Link>{' '}
                    freegan cred raw denim single-origin coffee viral.
                </p>

                <br /><br />

                <Button ref={target} onClick={() => setShow(!show)}>
                    Click me!
                </Button>
                <Overlay target={target.current} show={show} placement="right">
                    {(props) => (
                        <Tooltip id="overlay-example" {...props}>
                            My Tooltip
                        </Tooltip>
                    )}
                </Overlay>

                <br /><br />

                {['top', 'right', 'bottom', 'left'].map((placement) => (
                    <OverlayTrigger
                        key={placement}
                        placement={placement}
                        overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                                Tooltip on <strong>{placement}</strong>.
                            </Tooltip>
                        }
                    >
                        <Button variant="secondary">Tooltip on {placement}</Button>
                    </OverlayTrigger>
                ))}
                <br /><br />

                {['top', 'right', 'bottom', 'left'].map((placement) => (
                    <OverlayTrigger
                        trigger="click"
                        key={placement}
                        placement={placement}
                        overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                                <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                                <Popover.Body>
                                    <strong>Holy guacamole!</strong> Check this info.
                                </Popover.Body>
                            </Popover>
                        }
                    >
                        <Button variant="secondary">Popover on {placement}</Button>
                    </OverlayTrigger>
                ))}
                <br /><br />

                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
                    <span className="d-inline-block">
                        <Button disabled style={{ pointerEvents: 'none' }}>
                            Disabled button
                        </Button>
                    </span>
                </OverlayTrigger>


                <br /><br />

                <div ref={ref}>
                    <Button onClick={handleClick}>Holy guacamole!</Button>

                    <Overlay
                        show={show}
                        target={target}
                        placement="bottom"
                        container={ref}
                        containerPadding={20}
                    >
                        <Popover id="popover-contained">
                            <Popover.Header as="h3">Popover bottom</Popover.Header>
                            <Popover.Body>
                                <strong>Holy guacamole!</strong> Check this info.
                            </Popover.Body>
                        </Popover>
                    </Overlay>
                </div>
            </div>


            <br /><br />
            {/* ==========*************============= */}

            <h1>pagination</h1>
            <div className="container-xl">
                <div>
                    <Pagination>{items}</Pagination>
                    <br />

                    <Pagination size="lg">{items}</Pagination>
                    <br />

                    <Pagination size="sm">{items}</Pagination>
                </div>

                <br /><br />

                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>


            <br /><br />
            {/* ==========*************============= */}
            <h1>placeholder</h1>

            <div className="container-xl">
                <div className="d-flex justify-content-around">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://st2.depositphotos.com/1591133/8812/i/450/depositphotos_88120646-stock-photo-idyllic-summer-landscape-with-clear.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://ik.imagekit.io/serenity/ByteofDev/Blog_Content_Images/tr:f-jpg/speed_up_images_original_R8oje17ew" />
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                            <Placeholder.Button variant="primary" xs={6} />
                        </Card.Body>
                    </Card>
                </div>

                <br /><br />
                <p aria-hidden="true">
                    <Placeholder xs={6} />
                </p>

                <Placeholder.Button xs={4} aria-hidden="true" />
                <br /><br />
                <Placeholder xs={6} />
                <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
                <br /><br />
                <Placeholder xs={12} />

                <Placeholder xs={12} bg="primary" />
                <Placeholder xs={12} bg="secondary" />
                <Placeholder xs={12} bg="success" />
                <Placeholder xs={12} bg="danger" />
                <Placeholder xs={12} bg="warning" />
                <Placeholder xs={12} bg="info" />
                <Placeholder xs={12} bg="light" />
                <Placeholder xs={12} bg="dark" />

                <br /><br />
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as="p" animation="wave">
                    <Placeholder xs={12} />
                </Placeholder>
            </div>
            <br /><br />
            {/* ==========*************============= */}

            <h1>progress bars</h1>
            <div className="container-xl">
                <ProgressBar now={60} />
                <br /><br />
                <ProgressBar now={now} label={`${now}%`} />
                <br /><br />
                <ProgressBar now={90} label={`${90}%`} visuallyHidden />
                <br /><br />
                <div>
                    <ProgressBar variant="success" now={40} />
                    <ProgressBar variant="info" now={20} />
                    <ProgressBar variant="warning" now={60} />
                    <ProgressBar variant="danger" now={80} />
                    <br /><br />
                    <ProgressBar striped variant="success" now={40} />
                    <ProgressBar striped variant="info" now={20} />
                    <ProgressBar striped variant="warning" now={60} />
                    <ProgressBar striped variant="danger" now={80} />
                    <br />
                    <ProgressBar animated now={45} />
                    <br /><br />
                    <ProgressBar>
                        <ProgressBar striped variant="success" animated now={35} key={1} />
                        <ProgressBar variant="info" now={20} key={2} />
                        <ProgressBar striped variant="danger" now={10} key={3} />
                    </ProgressBar>
                </div>
            </div>

            <br /><br />
            {/* ==========*************============= */}
            <h1>spinners</h1>
            <div className="container-xl">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Spinner animation="border" />&nbsp;&nbsp;&nbsp;&nbsp;
                <Spinner animation="grow" />&nbsp;&nbsp;
                <Spinner animation="border" variant="primary" />&nbsp;&nbsp;
                <Spinner animation="border" variant="secondary" />&nbsp;&nbsp;
                <Spinner animation="border" variant="success" />&nbsp;&nbsp;
                <Spinner animation="border" variant="danger" />&nbsp;&nbsp;
                <Spinner animation="border" variant="warning" />&nbsp;&nbsp;
                <Spinner animation="border" variant="info" />&nbsp;&nbsp;
                <Spinner animation="border" variant="light" />&nbsp;&nbsp;
                <Spinner animation="border" variant="dark" />&nbsp;&nbsp;
                <Spinner animation="grow" variant="primary" />&nbsp;&nbsp;
                <Spinner animation="grow" variant="secondary" />&nbsp;&nbsp;
                <Spinner animation="grow" variant="success" />&nbsp;&nbsp;
                <Spinner animation="grow" variant="danger" />&nbsp;&nbsp;
                <Spinner animation="grow" variant="warning" />&nbsp;&nbsp;
                <Spinner animation="grow" variant="info" />&nbsp;&nbsp;
                <Spinner animation="grow" variant="light" />&nbsp;&nbsp;
                <Spinner animation="grow" variant="dark" />&nbsp;&nbsp;
                <Spinner animation="border" size="sm" />&nbsp;&nbsp;
                <Spinner animation="border" />&nbsp;&nbsp;
                <Spinner animation="grow" size="sm" />&nbsp;&nbsp;
                <Spinner animation="grow" />&nbsp;&nbsp;
                <br /><br />
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Loading...</span>
                </Button>
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
                <br /><br />
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            <br /><br />
            {/* ==========*************============= */}
            <h1>Table</h1>
            <div className="container-xl">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>

                <br /><br />

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>

                <br /><br />
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
                <br /><br />
                <Table striped="columns">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
                <br /><br />
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <th key={index}>Table heading</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>2</td>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>3</td>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                    </tbody>
                </Table>
                <br /><br />

                <div>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table responsive="md">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table responsive="lg">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table responsive="xl">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <br /><br />
            {/* ==========*************============= */}
            <h1>tabs</h1>
            <div className="container-xl">
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Home">
                        Tab content for Home
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        Tab content for Profile
                    </Tab>
                    <Tab eventKey="contact" title="Contact" disabled>
                        Tab content for Contact
                    </Tab>
                </Tabs>
                <br /><br />
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Home">
                        Tab content for Home
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        Tab content for Profile
                    </Tab>
                    <Tab eventKey="contact" title="Contact" disabled>
                        Tab content for Contact
                    </Tab>
                </Tabs>
            </div>

            <br /><br />
            {/* ==========*************============= */}
            <h1>Toasta</h1>
            <div className="container-xl">
                <Toast>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                </Toast>
                <br /><br />

                <Row>
                    <Col md={6} className="mb-2">
                        <Button onClick={toggleShowA} className="mb-2">
                            Toggle Toast <strong>with</strong> Animation
                        </Button>
                        <Toast show={showA} onClose={toggleShowA}>
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                        </Toast>
                    </Col>
                    <Col md={6} className="mb-2">
                        <Button onClick={toggleShowB} className="mb-2">
                            Toggle Toast <strong>without</strong> Animation
                        </Button>
                        <Toast onClose={toggleShowB} show={showB} animation={false}>
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
                <br /><br />
                <ToastContainer className="position-static">
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Bootstrap</strong>
                            <small className="text-muted">just now</small>
                        </Toast.Header>
                        <Toast.Body>See? Just like this.</Toast.Body>
                    </Toast>
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Bootstrap</strong>
                            <small className="text-muted">2 seconds ago</small>
                        </Toast.Header>
                        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                    </Toast>
                </ToastContainer>

                <br /><br /><br />

                <div className="mb-3">
                    <label htmlFor="selectToastPlacement">Toast position</label>
                    <Form.Select
                        id="selectToastPlacement"
                        className="mt-2"
                        onChange={(e) => setPosition(e.currentTarget.value)}
                    >
                        {[
                            'top-start',
                            'top-center',
                            'top-end',
                            'middle-start',
                            'middle-center',
                            'middle-end',
                            'bottom-start',
                            'bottom-center',
                            'bottom-end',
                        ].map((p) => (
                            <option key={p} value={p}>
                                {p}
                            </option>
                        ))}
                    </Form.Select>
                </div>

                <div
                    aria-live="polite"
                    aria-atomic="true"
                    className="bg-dark position-relative"
                    style={{ minHeight: '240px' }}
                >
                    <ToastContainer
                        className="p-3"
                        position={position}
                        style={{ zIndex: 1 }}
                    >
                        <Toast>
                            <Toast.Header closeButton={false}>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </div>

                <br /><br /><br />

                <div
                    aria-live="polite"
                    aria-atomic="true"
                    className="bg-dark position-relative"
                    style={{ minHeight: '240px' }}
                >
                    <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
                        <Toast>
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Bootstrap</strong>
                                <small className="text-muted">just now</small>
                            </Toast.Header>
                            <Toast.Body>See? Just like this.</Toast.Body>
                        </Toast>
                        <Toast>
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Bootstrap</strong>
                                <small className="text-muted">2 seconds ago</small>
                            </Toast.Header>
                            <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </div>

                <br /><br />

                <Row>
                    <Col xs={6}>
                        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                        </Toast>
                    </Col>
                    <Col xs={6}>
                        <Button onClick={() => setShow(true)}>Show Toast</Button>
                    </Col>
                </Row>

                <br /><br /><br />

                {[
                    'Primary',
                    'Secondary',
                    'Success',
                    'Danger',
                    'Warning',
                    'Info',
                    'Light',
                    'Dark',
                ].map((variant, idx) => (
                    <Toast
                        className="d-inline-block m-1"
                        bg={variant.toLowerCase()}
                        key={idx}
                    >
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body className={variant === 'Dark' && 'text-white'}>
                            Hello, world! This is a toast message.
                        </Toast.Body>
                    </Toast>
                ))}


            </div>
        </>
    )
}

export default Offers
