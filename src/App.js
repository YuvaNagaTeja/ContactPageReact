// import logo from './logo.svg';
import './App.css';
// import { ContactPg } from './Components/ContactPg';
// import { Submit } from './Components/Submit/Submit'
import { BrowserRouter as Router} from "react-router-dom";
// import React, { useState, useEffect } from 'react';
// import ClipLoader from "react-spinners/ClipLoader";
import ContactPg from './Components/ContactPg';


// function AppRoutes() {

//   const routes = useRoutes(
//     [
//       {
//         path: '/',
//         element: <ContactPg />
//       },

//       {
//         path: '/submit',
//         element: <Submit />
//       },
//     ]
//   )

//   return routes;
// }

function App() {

  // const [loading, setloading] = useState(false)

  // useEffect(() => {
  //   setloading(true)

  //   setTimeout(() => {
  //     setloading(false)
  //   }, 2000)
  // }, [])


  return (
    // <div>

    //   {
    //     loading ?
    //       <ClipLoader
    //         color={'orange'}
    //         loading={loading}
    //         size={30}
    //         aria-label="Loading Spinner"
    //         data-testid="loader"
    //       />
    //       :
    <Router>
      {/* <AppRoutes /> */}
      {/* <Submit /> */}
      
      <ContactPg/>
      {/* <Submit/> */}
    </Router >
    //   }
    // </div>
  )
}

export default App;
