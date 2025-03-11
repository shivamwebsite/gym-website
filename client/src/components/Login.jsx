import React, { useState } from 'react'
import "./login.css"
import { NavLink } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [checking, setchecking] = useState(false)
    const {
        register,
        handleSubmit,
        setError,   // to through custome errors of form
        watch,
        formState: { errors ,isSubmitting}
    } = useForm();

    const onSubmit=async (data) =>{
        // data.preventDefault();
        const{email,password}=data;
        const res = await fetch("https://gym-website-backend-of83.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data1 = await res.json();

        if (res.status === 400 || !data) {
            console.log("invalid details");
            toast.error("Fill all the details 🫠!", {
                position: "top-center"
            });
            setchecking(false)
        } else if (res.status === 401) {
            console.log("invalid details");
            toast.error("Incorrect Password 😒!", {
                position: "top-center"
            });
            setchecking(false)
        } else if (res.status === 402) {
            console.log("invalid details");
            toast.error("User not exist Register first 😞!", {
                position: "top-center"
            });
            setchecking(false)
        } else if (res.status === 403) {
            // alert("no data");
            toast.warn("Check your Email and Password!", {
                position: "top-center",
            })
            setchecking(false)
        } else {
            toast.success("Login Successfully done 😃!", {
                position: "top-center"
            });
            setchecking(true)
            
        }
    }
    

    // const onSubmit = async (data) => {
    //     // await delay(4); // network delay raising
    //     // let r= await fetch("http://localhost:3000/",{
    //     //     method:"POST",
    //     //     headers:{ 
    //     //         "Content-Type":"application/json",
    //     //     },body:JSON.stringify(data)
    //     // })
    //     // let res = await r.text()
    //     // console.log(data,res);
    //     if(data.username !== "shivam" || data.password !== "1234"){
    //         toast.error("Invalid Username and Password",{
    //             position:'top-center'
    //         });
    //         toast.error("Refresh the page and then enter correct details",{
    //             position:'top-center'
    //         });
    //         setError("myform",{message:"Invalid Userid re-enter"}) // ya overall form ka errors lega
    //         setchecking(false);
    //     }
    //     else{
    //       toast.success("Welcome to Shivam Gym website Know you can login!", {
    //         position: 'top-center'
    //         });
    //         setchecking(true);
    //     }
    // }


  return (
    <>
    <div id="bodystart">
        <div className="formbox">
            <div className="formcontainer">
                <div className="topHeader">
                <h1>Login</h1>
                </div>
                <span className="social">
               <a href="https://www.instagram.com/0605shivam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"> <span className='i'><FaInstagram  /></span></a>
                <span className='i'><FaFacebook  /></span>
                <span className='i'><FaTwitter  /></span>
                </span>
                <form onSubmit={handleSubmit(onSubmit)}>
                {errors.email && <div className='red'>{errors.email.message}</div> }
                <input type='email' className="inputtext" placeholder="Email..."  {...register("email", { required: {value:true,message:"You have to fill !!"}, minLength:{value:10,message:"Min length is 10 !!"},maxLength:{value:30,message:"Max length is 30 !!"} })} />
                <span className='l'><FaUser /></span>
                {errors.password && <div className='red'>{errors.password.message}</div> }
                <input type="password" className="inputtext" placeholder="Password..." {...register("password", { required: {value:true,message:"You have to fill !!"}, minLength:{value:3,message:"Min length is 3 !!"},maxLength:{value:8,message:"Max length is 8 !!"} })} />
                <span className='l'><FaKey /></span>

                {/* <a href="/home"><button type="submit" id='button' className="submitButton Button" >Continue</button></a> */}

                {(checking)?<NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/home"><input disabled={isSubmitting} type="submit" value="Login" id='button' className="submitButton Button" /></NavLink>:<input disabled={isSubmitting} type="submit" value="Submit" id='button' className="submitButton Button" />
                    }
                    {errors.myform && <div>{errors.myform.message}</div> }
                </form><br />
                <p className='p'>No Account? <NavLink to="/register">Register Now</NavLink></p>
                <a id="forgotpw" href="#Reset Password">Forgot Password?</a>
            </div>
        </div>
        <ToastContainer />
    </div>
    </>
  )
}

export default Login
