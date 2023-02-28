//import React, { useState } from 'react';
//import './ContactPg.css';
// // import { Link } from "react-router-dom";
// // import { Form } from 'react-router-dom';
// // import validator from 'validator';

// // export const ContactPg = () => {
// function ContactPg() {

//     const [error, setError] = useState(false)
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")


//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (name.length === 0 || email.length === 0) {
//             setError(true)
//         }

//         // const firstName = e.target.name.value;  
//         // const email = e.target.email.value;
//         // const msg = e.target.message.value;
//         // console.log("Name :" + firstName);
//         // console.log("Email :" + email);
//         // console.log("Message :" + msg);
//     }

//     return (
//         <div>
//             <div className="split left"></div>

//             <div className="split right">

//                 <h1>CONTACT US. </h1> <br />

//                 <form className="form" onSubmit={handleSubmit}>
//                 <div>
//                     <input placeholder='Name' onChange={e => setName(e.target.value)} />
//                     </div>
//                     {error && name.lenght <= 0 ?
//                         <label>Cant be empty </label> : ""}
//                     <br /><br />
//                     <div>
//                     <input placeholder='Email' onChange={e => setEmail(e.target.value)} />
//                     </div>
//                     {error && email.lenght <= 0 ?
//                         <label>Cant be empty </label> : ""}
//                     <br /><br />

//                     <input type="text" name="message" placeholder='Message' />
//                     <br /> <br />

//                     {/* <Link to="/submit"> */}
//                     {/* <input class="btn btn-primary" type="submit" value="Submit" /> */}
//                     <div>
//                     <button type='submit'>SUBMIT</button>
//                     </div>
//                     {/* </Link> */}
//                 </form>

//             </div>

//         </div>

//     );
// }

// export default ContactPg;




import React, { useState, useEffect } from "react";
import "./ContactPg.css";
import ClipLoader from "react-spinners/ClipLoader";

function ContactPg() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    const [error, setError] = useState(false)
    const [message, setMessage] = useState(""); //Validation Message
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 2000)
    }, [])

    const Submit = (e) => {

        if (name.length === 0 || email.length === 0 || text.length === 0) {
            setError(true)
        }
        if (name && email && text) {
            console.log("First Name: ", name, "\n Email ", email, "\n Message ", text);
        }

        e.preventDefault();

        setloading(true)

        setTimeout(() => {
            setloading(false)
        }, 2000)

    }

    const btndisp = name && email && text //for btn display after validations


    const emailValidation = () => {
        const regEx = /[a-z A-Z 0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g

        if (!regEx.test(email) && email !== "") {
            setMessage("Email is not valid");
        }
        else {
            setMessage("");
        }
    }


    const handelOnChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div>
            {loading ?
                <div className="spinner">
                    <ClipLoader
                        color={'green'}
                        loading={loading}
                        size={30}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>

                :

                <>
                    <div className="split left"></div>


                    <div className="split right">
                        <h1>CONTACT US. </h1> <br />

                        <form onSubmit={Submit} className="form">

                            <div>
                                <input placeholder="Name" onChange={e => setName(e.target.value)} />
                            </div>
                            {error && name.length <= 0 ?
                                <label className="error">First Name can't be Empty</label> : ""}
                            <br />

                            <div>
                                <input placeholder="Email" onChange={handelOnChange} />
                            </div>

                            <label className="error">{message}</label>


                            <div>
                                <input placeholder="Message" onChange={e => setText(e.target.value)} />
                            </div>
                            <br />


                            <div>
                                {
                                    btndisp && (
                                        <button onClick={emailValidation}>
                                            SUBMIT
                                        </button>
                                    )
                                }
                            </div>
                        </form>
                    </div>
                </>
            }




        </div>
    );
}
export default ContactPg;