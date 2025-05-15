import React from 'react'
import { Badge, Button, ButtonGroup, CloseButton, Col, Container, Dropdown, DropdownButton, Figure, Image, ListGroup, Modal, Nav, Navbar, NavDropdown, Row, SplitButton, Tab } from 'react-bootstrap'


function Carousele() {
    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
    }

    return (
        <>
            <h1>closebutton</h1>
            <div className="container-xl">
                <CloseButton />
                <CloseButton disabled />
                <div data-bs-theme="dark" className='bg-dark p-2'>
                    <CloseButton />
                    <CloseButton disabled />
                </div>
                <CloseButton aria-label="Hide" />
            </div>
            <br /><br />
            {/* ==========*************============= */}
            <h1>dropdown</h1>
            <div className="container-xl">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
                    (variant) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={variant}
                            id={`dropdown-variants-${variant}`}
                            variant={variant.toLowerCase()}
                            title={variant}
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>
                                Active Item
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ),
                )}
                <br /><br />
                <Dropdown as={ButtonGroup}>
                    <Button variant="success">Split Button</Button>

                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <br /><br />
                {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
                    (variant) => (
                        <SplitButton
                            key={variant}
                            id={`dropdown-split-variants-${variant}`}
                            variant={variant.toLowerCase()}
                            title={variant}
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>
                                Active Item
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </SplitButton>
                    ),
                )}
                <br /><br /><br />
                {[DropdownButton, SplitButton].map((DropdownType, idx) => (
                    <DropdownType
                        as={ButtonGroup}
                        key={idx}
                        id={`dropdown-button-drop-${idx}`}
                        size="lg"
                        title="Drop large"
                    >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownType>
                ))}

                {[DropdownButton, SplitButton].map((DropdownType, idx) => (
                    <DropdownType
                        as={ButtonGroup}
                        key={idx}
                        id={`dropdown-button-drop-${idx}`}
                        size="sm"
                        variant="secondary"
                        title="Drop small"
                    >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownType>
                ))}

                <br /><br />
                <Dropdown data-bs-theme="dark">
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" active>
                            Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <DropdownButton
                    id="dropdown-button-dark-example2"
                    variant="secondary"
                    title="Dropdown button"
                    className="mt-2"
                    data-bs-theme="dark"
                >
                    <Dropdown.Item href="#/action-1" active>
                        Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                </DropdownButton>

                <br /><br /><br />
                <Navbar variant="dark" bg="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-dark-example" />
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Dropdown"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <br /><br />
                {['up', 'up-centered', 'down', 'down-centered', 'start', 'end'].map(
                    (direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="secondary"
                            title={`Drop ${direction}`}
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ),
                )}

                {['up', 'up-centered', 'down', 'down-centered', 'start', 'end'].map(
                    (direction) => (
                        <SplitButton
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="secondary"
                            title={`Drop ${direction}`}
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </SplitButton>
                    ),
                )}
                <br /><br />
                <DropdownButton id="dropdown-item-button" title="Dropdown button">
                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>

                <br />
                <DropdownButton
                    align="end"
                    title="Dropdown end"
                    id="dropdown-menu-align-end"
                >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                <br /><br />
                <div>
                    <DropdownButton
                        as={ButtonGroup}
                        align={{ lg: 'end' }}
                        title="Left-aligned but right aligned when large screen"
                        id="dropdown-menu-align-responsive-1"
                    >
                        <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="mt-2">
                    <SplitButton
                        align={{ lg: 'start' }}
                        title="Right-aligned but left aligned when large screen"
                        id="dropdown-menu-align-responsive-2"
                    >
                        <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
                    </SplitButton>
                </div>
                <br /><br />
                <Dropdown.Menu show>
                    <Dropdown.Header>Dropdown header</Dropdown.Header>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                </Dropdown.Menu>

                <br /><br /><br /><br />
                <br /><br /><br /><br />
                <br /><br /><br /><br />
                <Dropdown.Menu show>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
                <br /><br />
                <Dropdown className="d-inline mx-2">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                        Default Dropdown
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="d-inline mx-2" autoClose="inside">
                    <Dropdown.Toggle id="dropdown-autoclose-inside">
                        Clickable Outside
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="d-inline mx-2" autoClose="outside">
                    <Dropdown.Toggle id="dropdown-autoclose-outside">
                        Clickable Inside
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="d-inline mx-2" autoClose={false}>
                    <Dropdown.Toggle id="dropdown-autoclose-false">
                        Manual Close
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <br /><br />
                <br /><br />
                <br /><br />
                <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle id="dropdown-custom-1">Pow! Zoom!</Dropdown.Toggle>
                    <Dropdown.Menu className="super-colors">
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                            Active Item
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={ButtonGroup}>
                    <Button variant="info">mix it up style-wise</Button>
                    <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
                    <Dropdown.Menu className="super-colors">
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                            Active Item
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <br /><br />
            {/* ==========*************============= */}
            <h1>figure</h1>
            <div className="container-xl">

                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src="https://i.pinimg.com/736x/67/d6/75/67d675a2f9551258de5d0a8862bbc439.jpg"
                    />
                    <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                </Figure>
            </div>
            <br /><br />
            {/* ==========*************============= */}
            <div className="container-xl">
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="https://i.pinimg.com/236x/4d/d8/08/4dd8085cf493fc3f95c22aa840a00886.jpg" rounded />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2y9PCVzU888GrIh06X7RK2tOdnsMOkfbCk5dyK5ctfqyqGuWu6UM5cYrkDXAzwp3tHc&usqp=CAU" roundedCircle />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src="https://i.pinimg.com/236x/d3/c2/64/d3c2649ab35d483042e953338bb9bb53.jpg" thumbnail />
                        </Col>
                    </Row>
                </Container>
                <br /><br />
                <Image src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?impolicy=resize&imwidth=420" fluid />
            </div>
            <br /><br />
            {/* ==========*************============= */}
            <h1>Listgroup</h1>
            <div className="container-xl">
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <br /><br />
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active>
                        Cras justo odio
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item as="li" disabled>
                        Morbi leo risus
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
                <br /><br />
                <ListGroup>
                    <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
                <br /><br />
                <ListGroup defaultActiveKey="#link1">
                    <ListGroup.Item action href="#link1">
                        Link 1
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2" disabled>
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={alertClicked}>
                        This one is a button
                    </ListGroup.Item>
                </ListGroup>
                <br /><br />
                <ListGroup as="ol" numbered>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                        </div>
                        <Badge bg="primary" pill>
                            14
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                        </div>
                        <Badge bg="primary" pill>
                            18
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                        </div>
                        <Badge bg="primary" pill>
                            14
                        </Badge>
                    </ListGroup.Item>
                </ListGroup>
                <br /><br />
                <ListGroup horizontal>
                    <ListGroup.Item>This</ListGroup.Item>
                    <ListGroup.Item>ListGroup</ListGroup.Item>
                    <ListGroup.Item>renders</ListGroup.Item>
                    <ListGroup.Item>horizontally!</ListGroup.Item>
                </ListGroup>
                <br /><br />
                {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint) => (
                    <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
                        <ListGroup.Item>This ListGroup</ListGroup.Item>
                        <ListGroup.Item>renders horizontally</ListGroup.Item>
                        <ListGroup.Item>on {breakpoint}</ListGroup.Item>
                        <ListGroup.Item>and above!</ListGroup.Item>
                    </ListGroup>
                ))}
                <br /><br />
                <ListGroup>
                    <ListGroup.Item>No style</ListGroup.Item>
                    <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                    <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
                    <ListGroup.Item variant="success">Success</ListGroup.Item>
                    <ListGroup.Item variant="danger">Danger</ListGroup.Item>
                    <ListGroup.Item variant="warning">Warning</ListGroup.Item>
                    <ListGroup.Item variant="info">Info</ListGroup.Item>
                    <ListGroup.Item variant="light">Light</ListGroup.Item>
                    <ListGroup.Item variant="dark">Dark</ListGroup.Item>
                </ListGroup>
                <br /><br />
                <ListGroup>
                    <ListGroup.Item>No style</ListGroup.Item>
                    <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                    <ListGroup.Item action variant="secondary">
                        Secondary
                    </ListGroup.Item>
                    <ListGroup.Item action variant="success">
                        Success
                    </ListGroup.Item>
                    <ListGroup.Item action variant="danger">
                        Danger
                    </ListGroup.Item>
                    <ListGroup.Item action variant="warning">
                        Warning
                    </ListGroup.Item>
                    <ListGroup.Item action variant="info">
                        Info
                    </ListGroup.Item>
                    <ListGroup.Item action variant="light">
                        Light
                    </ListGroup.Item>
                    <ListGroup.Item action variant="dark">
                        Dark
                    </ListGroup.Item>
                </ListGroup>
                <br /><br /><br />
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroup.Item action href="#link1">
                                    Link 1
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    Link 2
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">Tab pane content 1</Tab.Pane>
                                <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
            



        </>
    )
}

export default Carousele
