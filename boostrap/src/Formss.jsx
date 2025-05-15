
import React, { useState } from 'react'
import { Button, Col, Dropdown, DropdownButton, FloatingLabel, Form, InputGroup, Modal, Row, SplitButton } from 'react-bootstrap'



function Formss() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };



  
    return (
        <>
            <h1>Ovreview</h1>
            <div className="container-xl">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <br /><br />

                <Form.Group className="mb-3">
                    <Form.Label>Disabled input</Form.Label>
                    <Form.Control placeholder="Disabled input" disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Disabled select menu</Form.Label>
                    <Form.Select disabled>
                        <option>Disabled select</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Can't check this" disabled />
                </Form.Group>

                <br /><br />

                <Form>
                    <fieldset disabled>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
                            <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Disabled select</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                id="disabledFieldsetCheck"
                                label="Can't check this"
                            />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </fieldset>
                </Form>

                <br /><br />

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <br /><br />

                <Form.Control size="lg" type="text" placeholder="Large text" />
                <br />
                <Form.Control type="text" placeholder="Normal text" />
                <br />
                <Form.Control size="sm" type="text" placeholder="Small text" />
                <br /><br />

                <Form.Control
                    type="text"
                    placeholder="Disabled input"
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                />
                <br />
                <Form.Control
                    type="text"
                    placeholder="Disabled readonly input"
                    aria-label="Disabled input example"
                    readOnly
                />

                <br /><br />

                <Form.Control type="text" placeholder="Readonly input here..." readOnly />

                <br /><br /><br />

                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue="email@example.com" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                </Form>

                <br /><br />
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Multiple files input example</Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group>
                <Form.Group controlId="formFileDisabled" className="mb-3">
                    <Form.Label>Disabled file input example</Form.Label>
                    <Form.Control type="file" disabled />
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Small file input example</Form.Label>
                    <Form.Control type="file" size="sm" />
                </Form.Group>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Large file input example</Form.Label>
                    <Form.Control type="file" size="lg" />
                </Form.Group>

                <br /><br />
                <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
                <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#563d7c"
                    title="Choose your color"
                />
            </div>

            {/* ========***********======== */}
            <br /><br /><br />
            <h1>from text</h1>

            <div className="container-xl">
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <Form.Text id="passwordHelpBlock" muted>
                    Your password must be 8-20 characters long, contain letters and numbers,
                    and must not contain spaces, special characters, or emoji.
                </Form.Text>

                <br /><br />
                <h1>select</h1>

                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <br /><br />
                <Form.Select size="lg">
                    <option>Large select</option>
                </Form.Select>
                <br />
                <Form.Select>
                    <option>Default select</option>
                </Form.Select>
                <br />
                <Form.Select size="sm">
                    <option>Small select</option>
                </Form.Select>
                <br /><br />

                <h1>checks and radios</h1>
                <Form>
                    {['checkbox', 'radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                            <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                            />

                            <Form.Check
                                disabled
                                type={type}
                                label={`disabled ${type}`}
                                id={`disabled-default-${type}`}
                            />
                        </div>
                    ))}
                </Form>
                <br /><br />
                <Form>
                    <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label="Check this switch"
                    />
                    <Form.Check // prettier-ignore
                        disabled
                        type="switch"
                        label="disabled switch"
                        id="disabled-custom-switch"
                    />
                </Form>

                <br /><br />
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <br /><br />

                <Form>
                    {['checkbox', 'radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="1"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="2"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                disabled
                                label="3 (disabled)"
                                type={type}
                                id={`inline-${type}-3`}
                            />
                        </div>
                    ))}
                </Form>
                <br /><br />
                <Form>
                    {['checkbox', 'radio'].map((type) => (
                        <div key={`reverse-${type}`} className="mb-3">
                            <Form.Check
                                reverse
                                label="1"
                                name="group1"
                                type={type}
                                id={`reverse-${type}-1`}
                            />
                            <Form.Check
                                reverse
                                label="2"
                                name="group1"
                                type={type}
                                id={`reverse-${type}-2`}
                            />
                            <Form.Check
                                reverse
                                disabled
                                label="3 (disabled)"
                                type={type}
                                id={`reverse-${type}-3`}
                            />
                        </div>
                    ))}
                </Form>

                <br /><br />
                <Form.Check aria-label="option 1" />
                <Form.Check type="radio" aria-label="radio 1" />

                <br /><br />
                <Form>
                    {['checkbox', 'radio'].map((type) => (
                        <div key={type} className="mb-3">
                            <Form.Check type={type} id={`check-api-${type}`}>
                                <Form.Check.Input type={type} isValid />
                                <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
                                <Form.Control.Feedback type="valid">
                                    You did it!
                                </Form.Control.Feedback>
                            </Form.Check>
                        </div>
                    ))}
                </Form>
            </div>


            <br /><br />
            {/* ==========************============== */}


            <div className="container-xl">
                <Form.Label>Range</Form.Label>
                <Form.Range />

                <h1>Input group</h1>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup>

                <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                        https://example.com/users/
                    </InputGroup.Text>
                    <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control aria-label="Amount (to the nearest dollar)" />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>

                <InputGroup>
                    <InputGroup.Text>With textarea</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>

                <br /><br /><br />

                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                    <Form.Control
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>
                <br />
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Default
                    </InputGroup.Text>
                    <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br />
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
                    <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>
                <br /><br />

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    <Form.Control aria-label="Text input with checkbox" />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Radio aria-label="Radio button for following text input" />
                    <Form.Control aria-label="Text input with radio button" />
                </InputGroup>

                <br /><br />
                <InputGroup className="mb-3">
                    <InputGroup.Text>First and last name</InputGroup.Text>
                    <Form.Control aria-label="First name" />
                    <Form.Control aria-label="Last name" />
                </InputGroup>

                <br /><br />

                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <InputGroup.Text>0.00</InputGroup.Text>
                    <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
                </InputGroup>
                <InputGroup>
                    <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
                    <InputGroup.Text>$</InputGroup.Text>
                    <InputGroup.Text>0.00</InputGroup.Text>
                </InputGroup>

                <br /><br /><br />

                <InputGroup className="mb-3">
                    <Button variant="outline-secondary" id="button-addon1">
                        Button
                    </Button>
                    <Form.Control
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>

                <InputGroup className="mb-3">
                    <Button variant="outline-secondary">Button</Button>
                    <Button variant="outline-secondary">Button</Button>
                    <Form.Control aria-label="Example text with two button addons" />
                </InputGroup>

                <InputGroup>
                    <Form.Control
                        placeholder="Recipient's username"
                        aria-label="Recipient's username with two button addons"
                    />
                    <Button variant="outline-secondary">Button</Button>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup>

                <br /><br /><br />

                <InputGroup className="mb-3">
                    <DropdownButton
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control aria-label="Text input with dropdown button" />
                </InputGroup>

                <InputGroup className="mb-3">
                    <Form.Control aria-label="Text input with dropdown button" />

                    <DropdownButton
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-2"
                        align="end"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>

                <InputGroup>
                    <DropdownButton
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-3"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control aria-label="Text input with 2 dropdown buttons" />
                    <DropdownButton
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-4"
                        align="end"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>

                <br /><br />

                <InputGroup className="mb-3">
                    <SplitButton
                        variant="outline-secondary"
                        title="Action"
                        id="segmented-button-dropdown-1"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </SplitButton>
                    <Form.Control aria-label="Text input with dropdown button" />
                </InputGroup>

                <InputGroup className="mb-3">
                    <Form.Control aria-label="Text input with dropdown button" />
                    <SplitButton
                        variant="outline-secondary"
                        title="Action"
                        id="segmented-button-dropdown-2"
                        alignRight
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </SplitButton>
                </InputGroup>

                <h1>floating labels</h1>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>

                <br /><br /><br />

                <FloatingLabel
                    controlId="floatingTextarea"
                    label="Comments"
                    className="mb-3"
                >
                    <Form.Control as="textarea" placeholder="Leave a comment here" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>

                <br /><br /><br />

                <FloatingLabel controlId="floatingSelect" label="Works with selects">
                    <Form.Select aria-label="Floating label select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FloatingLabel>

                <br /><br />

                <Row className="g-2">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Email address">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel
                            controlId="floatingSelectGrid"
                            label="Works with selects"
                        >
                            <Form.Select aria-label="Floating label select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>

                <br /><br />

                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputCustom">Email address</label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="password"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPasswordCustom">Password</label>
                </Form.Floating>
                <br /><br />

                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>

                <br /><br />

                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                </Form>

                <br /><br /><br />

                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <br /><br />

                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                                Radios
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="first radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="second radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="third radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Remember me" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>

                <br /><br /><br />

                <Row>
                    <Form.Label column="lg" lg={2}>
                        Large Text
                    </Form.Label>
                    <Col>
                        <Form.Control size="lg" type="text" placeholder="Large text" />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Form.Label column lg={2}>
                        Normal Text
                    </Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Normal text" />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Form.Label column="sm" lg={2}>
                        Small Text
                    </Form.Label>
                    <Col>
                        <Form.Control size="sm" type="text" placeholder="Small text" />
                    </Col>
                </Row>

                <br /><br /><br />

                <Form>
                    <Row>
                        <Col xs={7}>
                            <Form.Control placeholder="City" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="State" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Zip" />
                        </Col>
                    </Row>
                </Form>

                <br /><br /><br />

                <Form>
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                Name
                            </Form.Label>
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Jane Doe"
                            />
                        </Col>
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                Username
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Control id="inlineFormInputGroup" placeholder="Username" />
                            </InputGroup>
                        </Col>
                        <Col xs="auto">
                            <Form.Check
                                type="checkbox"
                                id="autoSizingCheck"
                                className="mb-2"
                                label="Remember me"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" className="mb-2">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <br /><br /><br />

            </div>
            <br /><br /><br /><br />
        </>
    )
}

export default Formss
