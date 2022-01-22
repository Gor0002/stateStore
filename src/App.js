import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getUserList } from './redux/service';
import {connect} from 'react-redux';
import {acLoader, saveUserList} from './redux/AC';
import FixedPage from './redux/components/fixedPage';
import People from './redux/components/navBar/people';


function App(props) {
  useEffect(() =>{
    props.handleLoader()
    getUserList()
    .then(res => props.handleSaveUserList(res))
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      props.handleLoader();
    })
  },[])
  if(props.loader){
    return <div>Loading</div>
  }
  return (
    <BrowserRouter>  
      <>
        <div className="firstPage">
          <div className="people">
            <People data={props.data1} />
          </div>
          <div className="fixedPage">
            <Routes>
              <Route path="/" element={<FixedPage />} />
              <Route path="/:id" element={<FixedPage />} />
            </Routes>
          </div>


            <div>
              
              {/* {Array.isArray(props.data1) && props.data1.map((elem, index) => {
                return <div key={index}>{elem}</div>
              })} */} 
              {/* xndir@ stexa map chi pttvum datai vra inch ases porceci chexav ...
               stipvac motavor sharunakelem bayc de kisata stacve miananq haskanam et mapi pahy dasin */}
            </div>

        </div>
      </>
    </BrowserRouter>  
  );
}
const mapStateToProps = (state) => ({
  data1: state.data,
  loader: state.loader
});
const mapDispatchToProps = {
  handleSaveUserList: saveUserList, 
  handleLoader: acLoader
};

export default connect(mapStateToProps, mapDispatchToProps)(App)



// import {useState} from "react";
// import Main from './useEfect';
// import initialState from './redux/service';
// import { useDispatch, useSelector } from 'react-redux';

// const data = useSelector(function(state){
  //   return state.data
  // })
  // const dispatch = useDispatch()


  // useEffect(() =>{
  //   dispatch({
  //       type: "Request",
  //       payload: {
  //         data: initialState().then((res) => res)
  //       }
  //     })
  // },[])
// import logo from './logo.svg';
// import Comp from './porz';

  // let name = "Khachatur";
  // let arr = useState("");
  // const value = arr[0];
  // const setValue = arr[1];

  // const [value ,setValue] = useState("");

    // <Main />
    // <div className="App">
    //   hello world {name}
    //   <h1>{name}</h1>
    //   {/* props */}
    //   <Comp  name="joe" age={33} gender="boy" />      
      
    //   {/*das 3 useState*/}
    //   {/* <button onClick={(evt) => {
    //     alert(name);
    //   }}>click me</button>
    //    */}

    //   <input type="text" onChange={(evt) =>{
    //     setValue(evt.target.value);
    //   }} />
    //   <h1>{value}</h1>



    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>  */}
    // </div>
