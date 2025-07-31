import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from "axios";
import { yellow } from '@mui/material/colors';
import bg from './bg6.webp'

import {
  TextField,
  Button,
  Box,
  Typography,
  colors,
} from '@mui/material';

const Textsave = () => {
  const [inputText, setInputText] = useState('');
  const [fullText, setFullText] = useState('');
  const [showTextarea, setShowTextarea] = useState(false);
  const [records, setRecords] = useState([]);

  const key = 'dDdU5D259s304vcB';

  const getdata = () => {
    axios.get('https://generateapi.onrender.com/api/Textsave', {
      headers: {
        Authorization: key,
      },
    })
      .then((res) => {
        setRecords(res.data.Data);
      })
      .catch((error) => {
        console.error('GET error:', error);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleInitialSubmit = (values) => {
    const matched = records.find(
      rec => rec.inputText.trim().toLowerCase() === values.inputText.trim().toLowerCase()
    );

    setInputText(values.inputText);
    if (matched) {
      setFullText(matched.fullText);
    } else {
      setFullText('');
    }
    setShowTextarea(true);
  };

  const handleTextareaSubmit = (values, { resetForm }) => {
    const matched = records.find(
      (rec) => rec.inputText.trim().toLowerCase() === values.inputText.trim().toLowerCase()
    );

    if (matched && matched._id) {
      axios.delete(`https://generateapi.onrender.com/api/Textsave/${matched._id}`, {
        headers: {
          Authorization: key,
        },
      })
        .then((res) => {
          console.log('success');

          saveNewRecord(values, resetForm);
        })
        .catch((err) => {
          console.error('error');
        });
    } else {
      saveNewRecord(values, resetForm);
    }
  };

  const saveNewRecord = (values, resetForm) => {
    axios.post('https://generateapi.onrender.com/api/Textsave', values, {
      headers: {
        Authorization: key,
      },
    })
      .then((res) => {
        console.log('success');
        getdata();
        resetForm();
        setInputText('');
        setFullText('');
        setShowTextarea(false);
      })
      .catch((err) => {
        console.error('POST error:', err);
      });
  };

   const handleDelete = (id) => {
    axios.delete(`https://generateapi.onrender.com/api/Textsave/${id}`, {
      headers: { Authorization: key },
    })
      .then(() => {
        getdata();
      })
      .catch((err) => {
        console.error('Delete error:', err);
      });
  };

  if (showTextarea) {
    return (
      <Formik
        initialValues={{ inputText, fullText }}
        onSubmit={handleTextareaSubmit}
        enableReinitialize
      >
        {({ handleChange }) => (
          <Form >
            <Box
              sx={{

                p: 2,
                margin: ' 0 10px ',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h6" sx={{ color: 'gold', fontStyle: 'italic', marginBottom: '5px' }}>
                Editing for: <strong>{inputText}</strong>
              </Typography>
              <Field
                name="fullText"
                as={TextField}
                multiline
                fullWidth
                minRows={20}
                variant="outlined"
                placeholder="Edit your full text here..."
                onChange={handleChange}
                sx={{ mb: 2, color: 'gold', }}
              />
              <Button type="submit" sx={{ background: 'gold' }}>
                Save
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    );
  }

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position:'relative'

    }}>
      <Formik
        initialValues={{ inputText: '' }}
        onSubmit={handleInitialSubmit}
      >
        {({ handleChange, values }) => (
          <Form>


            <Box
              sx={{
                height: '100vh',
                width: '50%',
                margin: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',

              }}
            >
              <Box>


                <TextField
                  fullWidth
                  variant="outlined"
                  required
                  placeholder="Enter your text here..."
                  name="inputText"
                  label="Enter key"
                  value={values.inputText}
                  onChange={handleChange}
                  margin="normal"
                  sx={{
                    input: { color: 'white' },
                    label: { color: '#ffffff85' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white',
                      },
                      '&:hover fieldset': {
                        borderColor: 'white',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                  }}
                />

                <Box width={'100%'}
                  display={'flex'}
                  justifyContent={'center'}>

                  <Button
                    type="submit"
                    sx={{
                      background: '#00729d',
                      color: 'white',
                      marginTop: '20px',
                      fontFamily: 'math',
                      fontSize: '22px',
                      fontWeight: '700',
                      padding: '5px 20px',
                      '&:hover': {
                        background: '#003cff',
                      },
                    }}
                  >
                    Submit
                  </Button>

                </Box>

              </Box>
            </Box>
          </Form>
        )}
      </Formik>
      {/* <Box sx={{ mt: 6, maxWidth: '90%', mx: 'auto' }}>
        <Typography variant="h6" gutterBottom>
          Submitted Records
        </Typography>
        <table border={1} width="100%" cellPadding={8} style={{ borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#1976d2', color: 'white' }}>
            <tr>
              <th>Title</th>
              <th>Full Text</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{record.inputText}</td>
                <td>{record.fullText}</td>
                <td>
                  <button
                    onClick={() => handleDelete(record._id)}
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box> */}
      <Box
      sx={{
        width:'100%',
        position:'absolute',
        top:'0'
      }}>

      <Typography
        sx={{
          textAlign: 'center', 
          fontFamily: 'math',
          color: 'white',
          fontSize:'40px',
          fontWeight:'bold',
          padding:'30px 0'
        }}>Online Editor</Typography>
      </Box>
      <Box 
      sx={{ 
        width:'100%',
        position:'absolute',
        bottom:'0'
      }}> 

      <Typography
        sx={{
          textAlign:'right',
          fontFamily: 'math',
          color: '#ffffff52',
          fontSize:'20px',
          fontWeight:'bold',
          padding:'5px 15px'
        }}>Developed by Gautam Parmar</Typography>
      </Box>
    </Box >
  );
};

export default Textsave;
