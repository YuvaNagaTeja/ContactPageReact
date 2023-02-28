// import React, { useState, useEffect } from 'react';
// import ClipLoader from "react-spinners/ClipLoader";
// import './Submit.css';


// export const Submit = () => {
//     const [loading, setloading] = useState(false)

//     useEffect(() => {
//         setloading(true)

//         setTimeout(() => {
//             setloading(false)
//         }, 2000)
//     }, [])  

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const firstName = e.target.name.value;
//         const email = e.target.email.value;
//         const msg = e.target.message.value;
//         console.log("Name :" + firstName);
//         console.log("Email :" + email);
//         console.log("Message :" + msg);
//     }

//     return (
//         <div>
//             {
//                 loading ?
//                     <div className="spinner">
//                         <ClipLoader
//                             color={'green'}
//                             loading={loading}
//                             size={30}
//                             aria-label="Loading Spinner"
//                             data-testid="loader"
//                         />
//                     </div>
//                     :


//                     <div className='container-xl my-5'>
//                         <h3> Your Form has been Submitted,</h3>
//                         <h4>Thank You.</h4>
//                     </div>
//             }
//         </div>
//     )
// }
