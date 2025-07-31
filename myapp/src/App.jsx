import logo from './logo.svg';
import './App.css';
import First from './First'
import Second from './Second';
import news from './Second';
import PropsExample from './PropsExample';
import StateExample from './StateExample';
import ReactBootstrap from './ReactBootstrap';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { AiFillAccountBook, AiFillAlert } from "react-icons/ai";
import InputExample from './InputExample';
import UseFormikExample from './UseFormikExample';
import FormikTagExample from './FormikTagExample';
import ApiCalling from './ApiCalling';

function App() {
  return (
    // <div>
    //   <div>
    //     <h1>hello</h1>
    //     <h1>hello</h1>
    //     <h1>hello</h1>
    //     <h1>hello</h1>
    //     <h1>hello</h1>
    //   </div>
    //   <div>
    //     <h1>hello</h1>
    //     <h1>hello</h1>
    //     <h1>hello</h1>
    //     <h1>hello</h1>
    //     <h1>hello</h1>
    //   </div>
    // </div>

    <>
      {/* <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <div>
        check
      </div> */}
      {/* 
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>

      <First></First>
      <First></First>
      <First></First>
      <First></First>
      <First></First>
      <First></First>
      <h1>hello</h1> */}

      {/* <h1 className='demo'></h1> */}

      {/* <Second></Second> */}


      {/* props work */}

      {/* <PropsExample demo="hello"></PropsExample> */}
      {/* <PropsExample demo={{name : "demo" , age : 12}}></PropsExample> */}
      {/* <PropsExample demo={[{name : "demo" , age : 12} , {name : "demooooooo" , age : 12} , {name : "demo123" , age : 123}]}></PropsExample> */}


      {/* state => run time value change */}
      {/* <StateExample></StateExample> */}
      {/* <ReactBootstrap></ReactBootstrap> */}

      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>


      <Box sx={{ backgroundColor: "red", width: "100px", height: "100px" }}>

      </Box>

      <Typography variant="h5" component="h2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, obcaecati. Laborum fugiat rem reiciendis officia neque incidunt ipsam voluptatibus aliquid, obcaecati eveniet ea dicta. Accusamus rem fugiat error harum quia.
      </Typography>

      <AiFillAccountBook />
      <AiFillAlert /> */}

      {/* <InputExample></InputExample> */}


      <UseFormikExample></UseFormikExample>

      {/* <FormikTagExample></FormikTagExample> */}

      {/* <ApiCalling></ApiCalling> */}


    </>
  );
}

export default App;
