import React, { useState } from 'react'
import { Accordion,  Alert, Badge, Breadcrumb, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, Carousel, Col, Dropdown, DropdownButton, Form, InputGroup, ListGroup, Nav, Row, Stack, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'

const Boostrap = () => {

    // const handleClick = () => setLoading(true);
    const [show, setShow] = useState(true)
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const [value, setValue] = useState([1, 3]);
    const handleChange = (val) => setValue(val);

    const radios = [
        { name: 'Active', value: '1' },
        { name: 'Radio', value: '2' },
        { name: 'Radio', value: '3' },
    ];
    if (show) {
        return (
            <>
                {/* =========***********========== */}
                <div className='container-xl' id='kkk'>

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>


                {/* ==========*************============= */}


                <br /><br />
                <div className="container-xl">

                    {[
                        'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark',
                    ].map((variant) => (
                        <Alert key={variant} variant={variant}>
                            This is a {variant} alert—check it out!
                        </Alert>
                    ))}


                    {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark',
                    ].map((variant) => (
                        <Alert key={variant} variant={variant}>
                            This is a {variant} alert with{' '}
                            <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
                            you like.
                        </Alert>
                    ))}

                </div>


                <br /><br />
                {/* ==========*************============= */}


                <div className="container-xl">
                    <Alert variant="success">
                        <Alert.Heading>Hey, nice to see you</Alert.Heading>
                        <p>
                            Aww yeah, you successfully read this important alert message. This
                            example text is going to run a bit longer so that you can see how
                            spacing within an alert works with this kind of content.
                        </p>
                        <hr />
                        <p className="mb-0">
                            Whenever you need to, be sure to use margin utilities to keep things
                            nice and tidy.
                        </p>
                    </Alert>
                </div>


                <br /><br />
                {/* ==========*************============= */}

                <div className="container-xl">
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>
                            Change this and that and try again. Duis mollis, est non commodo
                            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                            Cras mattis consectetur purus sit amet fermentum.
                        </p>
                    </Alert>
                </div>

                <br /><br />
                {/* ==========*************============= */}

                <div className="container-xl">
                    <Alert show={show} variant="success">
                        <Alert.Heading>My Alert</Alert.Heading>
                        <p>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                            fermentum.
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Close me
                            </Button>
                        </div>
                    </Alert>

                    {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
                </div>


                <br /><br />
                {/* ==========*************============= */}


                <div className="container-xl">
                    <h1>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h1>
                    <h2>
                        Example heading <Badge bg="info">New</Badge>
                    </h2>
                    <h3>
                        Example heading <Badge bg="warning">New</Badge>
                    </h3>
                    <h4>
                        Example heading <Badge bg="success">New</Badge>
                    </h4>
                    <h5>
                        Example heading <Badge bg="primary">New</Badge>
                    </h5>
                    <h6>
                        Example heading <Badge bg="danger">New</Badge>
                    </h6>
                </div>


                <br /><br />
                {/* ==========*************============= */}
                <div className="container-xl">
                    <Stack direction="horizontal" gap={2} className='p-3 fs-4'>
                        <Badge bg="primary">Primary</Badge>
                        <Badge bg="secondary">Secondary</Badge>
                        <Badge bg="success">Success</Badge>
                        <Badge bg="danger">Danger</Badge>
                        <Badge bg="warning" text="dark">
                            Warning
                        </Badge>
                        <Badge bg="info">Info</Badge>
                        <Badge bg="light" text="dark">
                            Light
                        </Badge>
                        <Badge bg="dark">Dark</Badge>
                    </Stack>
                </div>

                <br /><br />
                {/* ==========*************============= */}

                <div className="container-xl">
                    <Stack direction="horizontal" gap={4} className='p-3 fs-4'>
                        <Badge pill bg="primary" >
                            Primary
                        </Badge>
                        <Badge pill bg="secondary">
                            Secondary
                        </Badge>
                        <Badge pill bg="success">
                            Success
                        </Badge>
                        <Badge pill bg="danger">
                            Danger
                        </Badge>
                        <Badge pill bg="warning" text="dark">
                            Warning
                        </Badge>
                        <Badge pill bg="info">
                            Info
                        </Badge>
                        <Badge pill bg="light" text="dark">
                            Light
                        </Badge>
                        <Badge pill bg="dark">
                            Dark
                        </Badge>
                    </Stack>
                </div>

                <br /><br />
                {/* ==========*************============= */}
                <div className="container-xl">

                    <Breadcrumb>
                        <Breadcrumb.Item href="#kkk">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                            Library
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <br /><br />
                {/* ==========*************============= */}
                <div className="container-xl">

                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary">Left</Button>
                        <Button variant="secondary">Middle</Button>
                        <Button variant="secondary">Right</Button>
                    </ButtonGroup>
                </div>

                <br /><br />
                {/* ==========*************============= */}
                <div className="container-xl">
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button href='#kkk'>1</Button>
                            <Button>2</Button>
                            <Button>3</Button>
                            <Button>4</Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="Second group">
                            <Button>5</Button>
                            <Button>6</Button>
                            <Button>7</Button>
                        </ButtonGroup>
                        <ButtonGroup aria-label="Third group">
                            <Button>8</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>

                <br /><br />
                {/* ==========*************============= */}
                <div className="container-xl">
                    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button variant="secondary">1</Button>
                            <Button variant="secondary">2</Button>
                            <Button variant="secondary">3</Button>
                            <Button variant="secondary">4</Button>
                        </ButtonGroup>
                        <InputGroup>
                            <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Input group example"
                                aria-label="Input group example"
                                aria-describedby="btnGroupAddon"
                            />
                        </InputGroup>
                    </ButtonToolbar>

                    <ButtonToolbar
                        className="justify-content-between"
                        aria-label="Toolbar with Button groups"
                    >
                        <ButtonGroup aria-label="First group">
                            <Button variant="secondary">1</Button>
                            <Button variant="secondary">2</Button>
                            <Button variant="secondary">3</Button>
                            <Button variant="secondary">4</Button>
                        </ButtonGroup>
                        <InputGroup>
                            <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Input group example"
                                aria-label="Input group example"
                                aria-describedby="btnGroupAddon2"
                            />
                        </InputGroup>
                    </ButtonToolbar>
                </div>

                <br /><br />
                {/* ==========*************============= */}


                <div className="container-xl">

                    <ButtonGroup size="lg" className="mb-2">
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                    <br />
                    <ButtonGroup className="mb-2">
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                    <br />
                    <ButtonGroup size="sm">
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </div>

                <br /><br />
                {/* ==========*************============= */}

                <div className="container-xl">
                    <ButtonGroup>
                        <Button>1</Button>
                        <Button>2</Button>

                        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </div>


                <br /><br />
                {/* ==========*************============= */}

                <div className="container-xl">
                    <ButtonGroup vertical>
                        <Button>Button</Button>
                        <Button>Button</Button>

                        <DropdownButton
                            as={ButtonGroup}
                            title="Dropdown"
                            id="bg-vertical-dropdown-1"
                        >
                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                        </DropdownButton>

                        <Button>Button</Button>
                        <Button>Button</Button>

                        <DropdownButton
                            as={ButtonGroup}
                            title="Dropdown"
                            id="bg-vertical-dropdown-2"
                        >
                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton
                            as={ButtonGroup}
                            title="Dropdown"
                            id="bg-vertical-dropdown-3"
                        >
                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </div>
                <br /><br />
                {/* ==========*************============= */}
                <div className="container-xl">
                    <Button variant="primary" className='m-2'>Primary</Button>
                    <Button variant="secondary" className='m-2'>Secondary</Button>
                    <Button variant="success" className='m-2'>Success</Button>
                    <Button variant="warning" className='m-2'>Warning</Button>
                    <Button variant="danger" className='m-2'>Danger</Button>
                    <Button variant="info" className='m-2'>Info</Button>
                    <Button variant="light" className='m-2'>Light</Button>
                    <Button variant="dark" className='m-2'>Dark</Button>
                    <Button variant="link" className='m-2'>Link</Button>
                    <Button variant="outline-primary" className='m-2'>Primary</Button>
                    <Button variant="outline-secondary" className='m-2'>Secondary</Button>
                    <Button variant="outline-success" className='m-2'>Success</Button>
                    <Button variant="outline-warning" className='m-2'>Warning</Button>
                    <Button variant="outline-danger" className='m-2'>Danger</Button>
                    <Button variant="outline-info" className='m-2'>Info</Button>
                    <Button variant="outline-light" className='m-2'>Light</Button>
                    <Button variant="outline-dark" className='m-2'>Dark</Button>

                </div>


                <br /><br />
                {/* ==========*************============= */}
                <div className="container-xl">
                    <Button href="#kkk">Link</Button> <Button type="submit">Button</Button>
                    <Button as="input" type="button" value="Input" />
                    <Button as="input" type="submit" value="Submit" />
                    <Button as="input" type="reset" value="Reset" />

                </div>

                <br /><br />
                {/* ==========*************============= */}
                <div className="container-xl">
                    <div className="d-flex gap-2 mb-2">
                        <Button variant="primary" size="lg">
                            Large button
                        </Button>
                        <Button variant="secondary" size="lg">
                            Large button
                        </Button>
                    </div>
                    <div className="d-flex gap-2">
                        <Button variant="primary" size="sm">
                            Small button
                        </Button>
                        <Button variant="secondary" size="sm">
                            Small button
                        </Button>
                    </div>
                    <br /><br /><br />
                    <div className="d-grid gap-2" variant>
                        <Button variant="primary" size="lg">
                            Block level button
                        </Button>
                        <Button variant="secondary" size="lg">
                            Block level button
                        </Button>
                    </div>

                    <br /><br />
                    <Button variant="primary" size="lg" active>
                        Primary button
                    </Button>
                    <Button variant="secondary" size="lg" active>
                        Button
                    </Button>
                    <br /><br />
                    <Button variant="primary" size="lg" disabled>
                        Primary button
                    </Button>
                    <Button variant="secondary" size="lg" disabled>
                        Button
                    </Button>
                    <Button href="#" variant="secondary" size="lg" disabled>
                        Link
                    </Button>

                </div>
                <br /><br />
                {/* ==========*************============= */}
                <div className="container-xl">
                    <ButtonGroup className="mb-2">
                        <ToggleButton
                            id="toggle-check"
                            type="checkbox"
                            variant="secondary"
                            checked={checked}
                            value="1"
                            onChange={(e) => setChecked(e.currentTarget.checked)}
                        >
                            Checked
                        </ToggleButton>
                    </ButtonGroup>
                    <br />
                    <ButtonGroup className="mb-2">
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant="secondary"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <br />
                    <ToggleButton
                        className="mb-2"
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checked}
                        value="1"
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                        Checked
                    </ToggleButton>
                    <br />
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
                <br /><br />
                {/* ==========*************============= */}
                <div className="container-xl">
                    <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                        <ToggleButton id="tbg-check-1" value={1}>
                            Checkbox 1 (pre-checked)
                        </ToggleButton>
                        <ToggleButton id="tbg-check-2" value={2}>
                            Checkbox 2
                        </ToggleButton>
                        <ToggleButton id="tbg-check-3" value={3}>
                            Checkbox 3 (pre-checked)
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <br />
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        <ToggleButton id="tbg-radio-1" value={1}>
                            Radio 1 (pre-checked)
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-2" value={2}>
                            Radio 2
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-3" value={3}>
                            Radio 3
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <br /><br />
                {/* ==========*************============= */}
                <div className="container-xl">
                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                        <ToggleButton id="tbg-btn-1" value={1}>
                            Option 1
                        </ToggleButton>
                        <ToggleButton id="tbg-btn-2" value={2}>
                            Option 2
                        </ToggleButton>
                        <ToggleButton id="tbg-btn-3" value={3}>
                            Option 3
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <br /><br />
                {/* ==========*************============= */}

                <h1>cards</h1>




                <div className="container-xl">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                    <Card body>This is some text within a card body.</Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>


                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Featured</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>


                    <Card>
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header as="h5">Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a ante.
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>

                    <Card className="text-center">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">1 days ago</Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="https://st2.depositphotos.com/1591133/8812/i/450/depositphotos_88120646-stock-photo-idyllic-summer-landscape-with-clear.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
                    </Card>

                    <Card className="bg-dark text-white">
                        <Card.Img src="https://tinypng.com/static/images/boat.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                <h1>This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex debitis officiis aut nisi sunt dolores similique aperiam rem nobis animi! Explicabo ipsam quia rem sit quaerat, magnam commodi corporis quae.
                                </h1>  </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Nav variant="tabs" defaultActiveKey="#first">
                                <Nav.Item>
                                    <Nav.Link href="#first">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#disabled" disabled>
                                        Disabled
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Nav variant="pills" defaultActiveKey="#first">
                                <Nav.Item>
                                    <Nav.Link href="#first">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#disabled" disabled>
                                        Disabled
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cumque recusandae nesciunt facere. Praesentium cum deserunt, culpa quasi labore libero, similique officia assumenda, explicabo molestias temporibus natus rerum tempore quos?
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    {[
                        'Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Light', 'Dark',
                    ].map((variant) => (
                        <Card
                            bg={variant.toLowerCase()}
                            key={variant}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '18rem' }}
                            className="mb-2"
                        >
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>{variant} Card Title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}

                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />

                    <Card border="secondary" style={{ width: '18rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Secondary Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />

                    <Card border="success" style={{ width: '18rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Success Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />

                    <Card border="danger" style={{ width: '18rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Danger Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />

                    <Card border="warning" style={{ width: '18rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Warning Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />

                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Info Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />

                    <Card border="dark" style={{ width: '18rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Dark Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />

                    <Card border="light" style={{ width: '18rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Light Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <br />
                    <br /><br />

                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="https://st2.depositphotos.com/1006542/6566/i/450/depositphotos_65669135-stock-photo-woman-sitting-on-an-old.jpg" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to
                                    additional content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://th-thumbnailer.cdn-si-edu.com/FL1u6Fs5T1tUo1RAuUZmdw5ssXA=/1000x750/filters:no_upscale():focal(518x341:519x342)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/1a/3d/1a3d1353-7317-4f5f-8b89-23cd066a4535/jason_gulley_wildlife_photographer_of_the_year.jpg" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>

                    <br /><br /><br />
                    <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card>
                                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEapNTj1Y9TlpgQJBQz3ApNYzd9EKsIYpfeMJ_9MqBMrMdWegHRCUuiYhIwMcTNnEAu74&usqp=CAU" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
                <br /><br />
                {/* ==========*************============= */}
                

            </>
        )
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
export default Boostrap

