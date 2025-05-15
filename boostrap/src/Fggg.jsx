// import { useState } from "react";
// import { Button, Col, FloatingLabel, Form, Row, Table } from "react-bootstrap";

// function FormWithTable() {
//   const [formData, setFormData] = useState({
//     email: '',
//     selection: '',
//   });

//   const [tableData, setTableData] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTableData((prev) => [...prev, formData]);
//     setFormData({ email: '', selection: '' }); // clear form
//   };

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//         <Row className="g-2">
//           <Col md>
//             <FloatingLabel controlId="floatingInputGrid" label="Email address">
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="name@example.com"
//                 required
//               />
//             </FloatingLabel>
//           </Col>
//           <Col md>
//             <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
//               <Form.Select
//                 aria-label="Floating label select example"
//                 name="selection"
//                 value={formData.selection}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Open this select menu</option>
//                 <option value="1">One</option>
//                 <option value="2">Two</option>
//                 <option value="3">Three</option>
//               </Form.Select>
//             </FloatingLabel>
//           </Col>
//         </Row>
//         <Button type="submit" className="mt-3">
//           Submit
//         </Button>
//       </Form>

//       {tableData.length > 0 && (
//         <Table striped bordered hover className="mt-4">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Email</th>
//               <th>Selection</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((data, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{data.email}</td>
//                 <td>{data.selection}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </>
//   );
// }

// export default FormWithTable;

// ============================************************===================

// import { useState } from 'react';
// import {
//   Button, Col, Form, InputGroup, Row, Table
// } from 'react-bootstrap';

// function FormExample() {
//   const [validated, setValidated] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     city: '',
//     state: '',
//     zip: '',
//     terms: false,
//   });

//   const [tableData, setTableData] = useState([]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     event.preventDefault();

//     if (form.checkValidity() === false) {
//       event.stopPropagation();
//     } else {
//       setTableData([...tableData, formData]);
//       setFormData({
//         firstName: '',
//         lastName: '',
//         username: '',
//         city: '',
//         state: '',
//         zip: '',
//         terms: false,
//       });
//     }

//     setValidated(true);
//   };

//   return (
//     <>
//       <Form noValidate validated={validated} onSubmit={handleSubmit}>
//         <Row className="mb-3">
//           <Form.Group as={Col} md="4" controlId="validationCustom01">
//             <Form.Label>First name</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               placeholder="First name"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//             />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="4" controlId="validationCustom02">
//             <Form.Label>Last name</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               placeholder="Last name"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//             />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//             <Form.Label>Username</Form.Label>
//             <InputGroup hasValidation>
//               <InputGroup.Text>@</InputGroup.Text>
//               <Form.Control
//                 type="text"
//                 placeholder="Username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please choose a username.
//               </Form.Control.Feedback>
//             </InputGroup>
//           </Form.Group>
//         </Row>
//         <Row className="mb-3">
//           <Form.Group as={Col} md="6" controlId="validationCustom03">
//             <Form.Label>City</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="City"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please provide a valid city.
//             </Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="3" controlId="validationCustom04">
//             <Form.Label>State</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="State"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please provide a valid state.
//             </Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="3" controlId="validationCustom05">
//             <Form.Label>Zip</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Zip"
//               name="zip"
//               value={formData.zip}
//               onChange={handleChange}
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please provide a valid zip.
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Row>
//         <Form.Group className="mb-3">
//           <Form.Check
//             required
//             name="terms"
//             checked={formData.terms}
//             onChange={handleChange}
//             label="Agree to terms and conditions"
//             feedback="You must agree before submitting."
//             feedbackType="invalid"
//           />
//         </Form.Group>
//         <Button type="submit">Submit form</Button>
//       </Form>

//       {tableData.length > 0 && (
//         <Table striped bordered hover className="mt-4">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>First</th>
//               <th>Last</th>
//               <th>Username</th>
//               <th>City</th>
//               <th>State</th>
//               <th>Zip</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((data, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{data.firstName}</td>
//                 <td>{data.lastName}</td>
//                 <td>{data.username}</td>
//                 <td>{data.city}</td>
//                 <td>{data.state}</td>
//                 <td>{data.zip}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </>
//   );
// }

// export default FormExample;



// ========]******************=======================

// import { useState } from 'react';
// import {
//   Button, Col, Form, InputGroup, Row, Table
// } from 'react-bootstrap';

// function FormExample() {
//   const [validated, setValidated] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     city: '',
//     state: '',
//     zip: '',
//     terms: false,
//   });

//   const [tableData, setTableData] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     if (form.checkValidity() === false) {
//       event.stopPropagation();
//     } else {
//       if (editIndex !== null) {
//         // Update
//         const updated = [...tableData];
//         updated[editIndex] = formData;
//         setTableData(updated);
//         setEditIndex(null);
//       } else {
//         // Add new
//         setTableData([...tableData, formData]);
//       }

//       // Clear form
//       setFormData({
//         firstName: '',
//         lastName: '',
//         username: '',
//         city: '',
//         state: '',
//         zip: '',
//         terms: false,
//       });
//     }

//     setValidated(true);
//   };

//   const handleDelete = (index) => {
//     const filtered = tableData.filter((_, i) => i !== index);
//     setTableData(filtered);
//     if (editIndex === index) {
//       setEditIndex(null); // clear if deleting while editing
//     }
//   };

//   const handleEdit = (index) => {
//     setFormData(tableData[index]);
//     setEditIndex(index);
//     setValidated(false); // reset validation on edit
//   };

//   return (
//     <>
//       <Form noValidate validated={validated} onSubmit={handleSubmit}>
//         <Row className="mb-3">
//           <Form.Group as={Col} md="4" controlId="validationCustom01">
//             <Form.Label>First name</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               placeholder="First name"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//             />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="4" controlId="validationCustom02">
//             <Form.Label>Last name</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               placeholder="Last name"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//             />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//             <Form.Label>Username</Form.Label>
//             <InputGroup hasValidation>
//               <InputGroup.Text>@</InputGroup.Text>
//               <Form.Control
//                 type="text"
//                 placeholder="Username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please choose a username.
//               </Form.Control.Feedback>
//             </InputGroup>
//           </Form.Group>
//         </Row>
//         <Row className="mb-3">
//           <Form.Group as={Col} md="6" controlId="validationCustom03">
//             <Form.Label>City</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="City"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please provide a valid city.
//             </Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="3" controlId="validationCustom04">
//             <Form.Label>State</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="State"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please provide a valid state.
//             </Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="3" controlId="validationCustom05">
//             <Form.Label>Zip</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Zip"
//               name="zip"
//               value={formData.zip}
//               onChange={handleChange}
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please provide a valid zip.
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Row>
//         <Form.Group className="mb-3">
//           <Form.Check
//             required
//             name="terms"
//             checked={formData.terms}
//             onChange={handleChange}
//             label="Agree to terms and conditions"
//             feedback="You must agree before submitting."
//             feedbackType="invalid"
//           />
//         </Form.Group>
//         <Button type="submit">
//           {editIndex !== null ? 'Update Entry' : 'Submit Form'}
//         </Button>
//       </Form>

//       {tableData.length > 0 && (
//         <Table striped bordered hover className="mt-4">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>First</th>
//               <th>Last</th>
//               <th>Username</th>
//               <th>City</th>
//               <th>State</th>
//               <th>Zip</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((data, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{data.firstName}</td>
//                 <td>{data.lastName}</td>
//                 <td>{data.username}</td>
//                 <td>{data.city}</td>
//                 <td>{data.state}</td>
//                 <td>{data.zip}</td>
//                 <td>
//                   <Button
//                     variant="warning"
//                     size="sm"
//                     onClick={() => handleEdit(index)}
//                     className="me-2"
//                   >
//                     Edit
//                   </Button>
//                   <Button
//                     variant="danger"
//                     size="sm"
//                     onClick={() => handleDelete(index)}
//                   >
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </>
//   );
// }

// export default FormExample;


// ===============***************=============

// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import * as formik from 'formik';
// import * as yup from 'yup';

// function FormExample() {
//   const { Formik } = formik;

//   const schema = yup.object().shape({
//     firstName: yup.string().required(),
//     lastName: yup.string().required(),
//     username: yup.string().required(),
//     city: yup.string().required(),
//     state: yup.string().required(),
//     zip: yup.string().required(),
//     terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
//   });

//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={console.log}
//       initialValues={{
//         firstName: 'Mark',
//         lastName: 'Otto',
//         username: '',
//         city: '',
//         state: '',
//         zip: '',
//         terms: false,
//       }}
//     >
//       {({ handleSubmit, handleChange, values, touched, errors }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group as={Col} md="4" controlId="validationFormik01">
//               <Form.Label>First name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="firstName"
//                 value={values.firstName}
//                 onChange={handleChange}
//                 isValid={touched.firstName && !errors.firstName}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormik02">
//               <Form.Label>Last name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="lastName"
//                 value={values.lastName}
//                 onChange={handleChange}
//                 isValid={touched.lastName && !errors.lastName}
//               />

//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormikUsername">
//               <Form.Label>Username</Form.Label>
//               <InputGroup hasValidation>
//                 <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend"
//                   name="username"
//                   value={values.username}
//                   onChange={handleChange}
//                   isInvalid={!!errors.username}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.username}
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//           </Row>
//           <Row className="mb-3">
//             <Form.Group as={Col} md="6" controlId="validationFormik03">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="City"
//                 name="city"
//                 value={values.city}
//                 onChange={handleChange}
//                 isInvalid={!!errors.city}
//               />

//               <Form.Control.Feedback type="invalid">
//                 {errors.city}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik04">
//               <Form.Label>State</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="State"
//                 name="state"
//                 value={values.state}
//                 onChange={handleChange}
//                 isInvalid={!!errors.state}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.state}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik05">
//               <Form.Label>Zip</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Zip"
//                 name="zip"
//                 value={values.zip}
//                 onChange={handleChange}
//                 isInvalid={!!errors.zip}
//               />

//               <Form.Control.Feedback type="invalid">
//                 {errors.zip}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>
//           <Form.Group className="mb-3">
//             <Form.Check
//               required
//               name="terms"
//               label="Agree to terms and conditions"
//               onChange={handleChange}
//               isInvalid={!!errors.terms}
//               feedback={errors.terms}
//               feedbackType="invalid"
//               id="validationFormik0"
//             />
//           </Form.Group>
//           <Button type="submit">Submit form</Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default FormExample;0