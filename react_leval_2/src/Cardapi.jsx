// import axios from 'axios'
// import { Field, Form, Formik } from 'formik'
// import React, { useState } from 'react'
// function Cardapi() {
//     const token = "chLoCE3bCS0wVAzC"
//     const [init, setinit] = useState({
//         Name: '',
//         Surname: '',
//         Email: '',
//         Number: '',
//         Description: '',
//         Profileimg: ''
//     })
//     const submitdata = (values, { resetForm }) => {
//         // console.log(values);
//         axios.post(`https://generateapi.onrender.com/api/Cards`, values, {
//             headers: {
//                 Authorization: token
//             }
//         })
//             .then((Response) => {
//                 console.log(Response.data);
//                 resetForm()
//             })
//             .catch((error) => {
//                 alert("hello")
//             })
//     }
    
//     return (
//         <>
//             <Formik
//                 enableReinitialize
//                 initialValues={init}
//                 onSubmit={submitdata}
//             >
//                 <Form>
//                     <Field name="Name" type="text"></Field> <br /><br />
//                     <Field name="Surname" type="text"></Field> <br /><br />
//                     <Field name="Email" type="email"></Field><br /><br />
//                     <Field name="Number" type="number"></Field><br /><br />
//                     <Field name="Description" type="text"></Field><br /><br />
//                     <input
//                         name='Profileimg'
//                         type="file"
//                         accept="image/*"
//                         required
//                         onChange={handleFile}
//                         style={{ display: "block", marginTop: 8 }}
//                     />
//                     <button type='submit'>submit</button>
//                 </Form>
//             </Formik>
//         </>
//     )
// }
// // chLoCE3bCS0wVAzC
// export default Cardapi





// // POST : https://generateapi.onrender.com/api/Cards
// // GET : https://generateapi.onrender.com/api/Cards
// // DELETE : https://generateapi.onrender.com/api/Cards/:id
// // PATCH : https://generateapi.onrender.com/api/Cards/:id





import React, { useState } from "react";
import { Card, CardContent, CardMedia, Container, Typography, Button } from "@mui/material";

function Cardapi() {
    const { REACT_APP_REST } = process.env;

    const [file, setFile] = useState(null);

    const handleFile = (event) => {
        const selectedFile = event.target.files[0];
        if (!selectedFile) return;

        setFile(URL.createObjectURL(selectedFile));

        const formData = new FormData();
        formData.append("fileupload", selectedFile);

        fetch(REACT_APP_REST + "/product/upload", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Upload success:", data);
            })
            .catch((err) => {
                console.error("Upload error:", err);
            });
    };
    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Card>
                {file && (
                    <CardMedia
                        component="img"
                        height="200"
                        image={file}
                        alt="Uploaded preview"
                    />
                )}
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Upload Image
                    </Typography>
                    <input
                        type="file"
                        accept="image/*"
                        required
                        onChange={handleFile}
                        style={{ display: "block", marginTop: 8 }}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default Cardapi;
