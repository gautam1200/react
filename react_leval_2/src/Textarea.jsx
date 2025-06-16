import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import {
  TextField,
  Button,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const Textsave = () => {
  const [inputText, setInputText] = useState('');
  const [fullText, setFullText] = useState('');
  const [showTextarea, setShowTextarea] = useState(false);
  const [records, setRecords] = useState([]);


  const handleInitialSubmit = (values) => {
    setInputText(values.inputText);
    // setFullText(values.inputText); 
    setShowTextarea(true);
  };


  const handleTextareaSubmit = (values) => {
    const newEntry = {
      inputText,
      fullText: values.fullText,
    };
    setRecords((prev) => [...prev, newEntry]);
    setInputText('');
    setFullText('');
    setShowTextarea(false);
  };

  // Show full-page textarea
  if (showTextarea) {
    return (
      <Formik
        initialValues={{ fullText }}
        onSubmit={handleTextareaSubmit}
      >
        {({ handleChange, values }) => (
          <Form>
            <Box
              sx={{
                height: '100vh',
                p: 2,
                bgcolor: '#f5f5f5',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Edit Full Text
              </Typography>
              <TextField
                name="fullText"
                multiline
                fullWidth
                minRows={25}
               
                onChange={handleChange}
                variant="outlined"
                placeholder="Edit your full text here..."
                sx={{ mb: 2 }}
              />
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    );
  }

  // Initial input form and table
  return (
    <Box sx={{ p: 2 }}>
      <Formik
        initialValues={{ inputText: '' }}
        onSubmit={handleInitialSubmit}
      >
        {({ handleChange, values }) => (
          <Form>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                maxWidth: 500,
                margin: 'auto',
                padding: 2,
                mt: 4,
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                name="inputText"
                label="Enter text"
                value={values.inputText}
                onChange={handleChange}
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      {records.length > 0 && (
        <Box sx={{ mt: 6, maxWidth: '90%', mx: 'auto' }}>
          <Typography variant="h6" gutterBottom>
            Submitted Records
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ bgcolor: '#1976d2' }}>
                <TableRow>
                  <TableCell sx={{ color: 'white' }}>#</TableCell>
                  <TableCell sx={{ color: 'white' }}>Input Text</TableCell>
                  <TableCell sx={{ color: 'white' }}>Full Text</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {records.map((record, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{record.inputText}</TableCell>
                    <TableCell>{record.fullText}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
};

export default Textsave;