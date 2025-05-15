import logo from './logo.svg';
import './App.css';
import First from './First'
import Second from './Second';
import news from './Second'; 
import PropsExample from './PropsExample';
import StateExample from './StateExample';
import ReactBootstrap from './ReactBootstrap';

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
  <ReactBootstrap></ReactBootstrap>


    </>
  );
}

export default App;
